"use client";

import { useRef, useCallback, useEffect } from "react";

const SWIPE_THRESHOLD = 80;   // px needed to commit a swipe
const SWIPE_VELOCITY = 0.3;  // px/ms fast-flick shortcut

/**
 * useSwipeStack
 * Works with plain (non-CSS-Modules) class names: card-1 … card-N
 */
export function useSwipeStack(
  containerRef: React.RefObject<HTMLElement | null>,
  cardCount = 4,
  onOrderChange?: (order: number[]) => void
) {
  // order[cardIndex] = current stack position (1 = top / front)
  const orderRef = useRef<number[]>(Array.from({ length: cardCount }, (_, i) => i + 1));
  const dragState = useRef<{ startX: number; startTime: number; card: HTMLElement } | null>(null);

  // ─── helpers ────────────────────────────────────────────────────────────

  const getCard = useCallback(
    (index: number): HTMLElement | null =>
      containerRef.current?.querySelector(`.card-${index + 1}`) ?? null,
    [containerRef]
  );

  const getCardAtPos = useCallback(
    (pos: number): HTMLElement | null => {
      const idx = orderRef.current.indexOf(pos);
      return idx === -1 ? null : getCard(idx);
    },
    [getCard]
  );

  /** Re-apply inline transform + z-index for every card's current position */
  const applyPositions = useCallback(
    (skipIndex?: number) => {
      const configs = {
        1: { y: 0, scale: 1.0, z: 40, opacity: 1 },
        2: { y: -14, scale: 0.95, z: 30, opacity: 1 },
        3: { y: -26, scale: 0.9, z: 20, opacity: 0.85 },
        4: { y: -36, scale: 0.85, z: 10, opacity: 0.65 },
      };

      orderRef.current.forEach((pos, idx) => {
        if (idx === skipIndex) return;
        const el = getCard(idx);
        if (!el) return;

        const cfg = (configs as any)[pos] ?? (configs as any)[cardCount];

        // ✅ STORE base transform instead of overriding everything
        const baseTransform = `translateY(${cfg.y}px) scale(${cfg.scale})`;

        el.dataset.base = baseTransform;

        el.style.transition =
          "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.45s ease";

        el.style.transform = baseTransform;
        el.style.zIndex = String(cfg.z);
        el.style.opacity = String(cfg.opacity);
      });

      onOrderChange?.(orderRef.current.slice());
    },
    [getCard, cardCount, onOrderChange]
  );

  // ─── swipe right: dismiss top card ──────────────────────────────────────

  const swipeRight = useCallback(() => {
    const topIdx = orderRef.current.indexOf(1);
    const topCard = getCard(topIdx);
    if (!topCard) return;

    // Flag so the Link click handler can suppress navigation
    topCard.dataset.swiped = "1";
    setTimeout(() => delete topCard.dataset.swiped, 600);

    // Fly off right
    const base = topCard.dataset.base || "";
    topCard.style.transition = "transform 0.42s cubic-bezier(0.55,0.055,0.675,0.19), opacity 0.38s ease";
    topCard.style.transform = `${base} translateX(120%) rotate(18deg)`;
    topCard.style.opacity = "0";

    // Rotate order: pos1→posN, others -1
    orderRef.current = orderRef.current.map((pos) => (pos === 1 ? cardCount : pos - 1));
    applyPositions(topIdx);

    // After fly-out, snap dismissed card to its new (bottom) stack position
    setTimeout(() => {
      topCard.style.transition = "none";
      const cfg = { y: -36, scale: 0.85, z: 10, opacity: 0.65 };
      topCard.style.transform = `translateY(${cfg.y}px) scale(${cfg.scale})`;
      topCard.style.zIndex = String(cfg.z);
      topCard.style.opacity = String(cfg.opacity);
    }, 450);
  }, [getCard, cardCount, applyPositions]);

  // ─── swipe left: bring bottom card to top ────────────────────────────────

  const swipeLeft = useCallback(() => {
    const bottomIdx = orderRef.current.indexOf(cardCount);
    const bottomCard = getCard(bottomIdx);
    if (!bottomCard) return;

    // Snap it off-screen right instantly (no transition)
    bottomCard.style.transition = "none";
    const base = bottomCard.dataset.base || "";
    bottomCard.style.transform = `${base} translateX(110%) rotate(14deg)`;
    bottomCard.style.opacity = "0";
    bottomCard.style.zIndex = "50"; // above everything while flying in

    // Rotate order: posN→1, others +1
    orderRef.current = orderRef.current.map((pos) => (pos === cardCount ? 1 : pos + 1));
    applyPositions(bottomIdx); // reposition all other cards

    // Next frame: animate the returning card into the top position
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bottomCard.style.transition = "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease";
        bottomCard.style.transform = "translateY(0px) scale(1)";
        bottomCard.style.opacity = "1";
        bottomCard.style.zIndex = "40";
      });
    });
  }, [getCard, cardCount, applyPositions]);

  // ─── drag handlers ───────────────────────────────────────────────────────

  const onDragStart = useCallback(
    (clientX: number) => {
      const topCard = getCardAtPos(1);
      if (!topCard) return;
      dragState.current = { startX: clientX, startTime: Date.now(), card: topCard };
      topCard.style.transition = "none"; // follow finger exactly
    },
    [getCardAtPos]
  );

  const onDragMove = useCallback((clientX: number) => {
    if (!dragState.current) return;

    const { startX, card } = dragState.current;
    const dx = clientX - startX;
    const rotate = dx * 0.07;

    const base = card.dataset.base || "";

    // ✅ MERGE transforms instead of replacing
    card.style.transform = `${base} translateX(${dx}px) rotate(${rotate}deg)`;
  }, []);

  const onDragEnd = useCallback(
    (clientX: number) => {
      if (!dragState.current) return;
      const { startX, startTime, card } = dragState.current;
      const dx = clientX - startX;
      const dt = Date.now() - startTime;
      const velocity = Math.abs(dx) / dt; // px/ms

      dragState.current = null;

      const isSwipeRight = dx > SWIPE_THRESHOLD || (dx > 30 && velocity > SWIPE_VELOCITY);
      const isSwipeLeft = dx < -SWIPE_THRESHOLD || (dx < -30 && velocity > SWIPE_VELOCITY);

      if (isSwipeRight) {
        swipeRight();
      } else if (isSwipeLeft) {
        swipeLeft();
      } else {
        // Snap back
        card.style.transition = "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)";
        card.style.transform = "translateY(0px) scale(1)";
      }
    },
    [swipeRight, swipeLeft]
  );

  // ─── event listeners ─────────────────────────────────────────────────────

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => onDragStart(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => { e.preventDefault(); onDragMove(e.touches[0].clientX); };
    const onTouchEnd = (e: TouchEvent) => onDragEnd(e.changedTouches[0].clientX);

    const onMouseDown = (e: MouseEvent) => onDragStart(e.clientX);
    const onMouseMove = (e: MouseEvent) => { if (dragState.current) onDragMove(e.clientX); };
    const onMouseUp = (e: MouseEvent) => { if (dragState.current) onDragEnd(e.clientX); };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [containerRef, onDragStart, onDragMove, onDragEnd]);

  // ─── initial positions ────────────────────────────────────────────────────

  useEffect(() => {
    // small delay so DOM is painted before we apply transforms
    const id = setTimeout(() => applyPositions(), 50);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { swipeRight, swipeLeft };
}