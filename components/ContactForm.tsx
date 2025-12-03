"use client"
import { contactForm } from "@/Types/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm<contactForm>();
    const [loading, setloading] = useState<boolean>(false)

    const onSubmit: SubmitHandler<contactForm> = async (data) => {
        setloading(true)

        try {
            const res = await fetch("/api/send-sms", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const resData = await res.json();
    
            toast.success("Message sent successfully!")
            reset()
        } catch (error: any) {
            console.error("Failed to send! " + error.message)
            toast.error("Failed to send message!")
        } finally {
            setloading(false)
        }
    }
    

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Send a message</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col p-3'>
            <label>Full Name</label>
            <input
                type="text"
                className={`p-3 border outline-0 border-gray-300 shadow-sm rounded-xl ${errors.name ? "border-red-400" : ""}`}
                placeholder='Full name'
                {...register("name", { required: true })}
            />
        </div>
        <div className='flex flex-col p-3'>
            <label>Email</label>
            <input
                type="text"
                className={`p-3 border outline-0 border-gray-300 shadow-sm rounded-xl ${errors.email ? "border-red-400" : ""}`}
                placeholder='Email'
                {...register("email")}
            />
        </div>
        <div className='flex flex-col p-3'>
            <label>Message</label>
            <textarea
                className={`p-3 border outline-0 border-gray-300 shadow-sm rounded-xl ${errors.message ? "border-red-400" : ""}`}
                placeholder='Add a message'
                rows={5}
                {...register("message", { required: true })}
            >
            </textarea>
        </div>
        {/* {errors.name && <p className="text-red-400 text-center font-bold">Please Enter Full Name</p>}
        {errors.message && <p className="text-red-400 text-center font-bold">Please Enter Message</p>} */}
        <button className='bg-green-400/90 cursor-pointer flex items-center gap-3 justify-center shadow-xl mt-3 p-3 font-bold text-white rounded-2xl w-full'>{loading && <AiOutlineLoading3Quarters className="text-xl animate-spin"/>} Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
