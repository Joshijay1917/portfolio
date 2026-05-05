"use client";
import { contactForm } from "@/Types/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<contactForm>();
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<contactForm> = async (data) => {
        setLoading(true);

        try {
            const res = await fetch("/api/send-sms", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            toast.success("Message sent successfully!");
            reset();
        } catch (error: any) {
            console.error("Failed to send! " + (error.message || error));
            toast.error("Failed to send message!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl mx-auto w-full">
            <h1 className='text-2xl font-bold text-slate-900 mb-6'>Send a message</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

                {/* Name and Email in a Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name Field */}
                    <div className='flex flex-col gap-2'>
                        <label className="text-sm font-semibold text-slate-700">Full Name</label>
                        <input
                            type="text"
                            className={`p-3 border outline-none shadow-sm rounded-xl transition-all bg-slate-50/50 
                                ${errors.name ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
                            placeholder='Enter your full name'
                            {...register("name", { required: "Full name is required" })}
                        />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col gap-2'>
                        <label className="text-sm font-semibold text-slate-700">Email (Optional)</label>
                        <input
                            type="email"
                            className={`p-3 border outline-none shadow-sm rounded-xl transition-all bg-slate-50/50 
                                ${errors.email ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
                            placeholder='Enter your email address'
                            {...register("email")}
                        />
                    </div>
                </div>

                {/* Message Field */}
                <div className='flex flex-col gap-2'>
                    <label className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                        className={`p-3 border outline-none shadow-sm rounded-xl transition-all bg-slate-50/50 
                            ${errors.message ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
                        placeholder='How can I help you?'
                        rows={5}
                        {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className='bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 cursor-pointer flex items-center gap-3 justify-center shadow-md mt-2 p-3.5 font-bold text-white rounded-xl transition-all w-full'
                >
                    {loading && <AiOutlineLoading3Quarters className="text-xl animate-spin" />}
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;