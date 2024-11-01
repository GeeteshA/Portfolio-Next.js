import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

type Props = {}

export default function ContactMe({ }: Props) {
  const { 
    register, 
    handleSubmit,
   } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:geeteshaheriya99@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} 
    (${formData.email})`
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[15px] text-gray-500 text-xl md:text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-8 md:space-y-10'>
        <h4 className='text-3xl md:text-4xl font-semibold text-center'>
          I have just got what you need.{" "}
          <span className='underline decoration-[#F7AB0A]/50'>
            Let's Talk.
          </span>
        </h4>

        <div className='space-y-6'>
          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <p className='text-lg md:text-2xl'>+91 9907430506</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className='text-lg md:text-2xl'>geeteshaheriya99@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className='text-lg md:text-2xl'>Bangalore</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full md:w-fit mx-auto'>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="text" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button type='submit' className='bg-[#F7AB0A] px-8 py-4 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
