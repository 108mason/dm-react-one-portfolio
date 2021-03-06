import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white" >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full" >
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 hidden sm:block">Contact</p>
                <p className="py-6 hidden sm:block">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/421b5aaa-d1f1-4f78-b0c2-73ccdb4a3fe5"
                method="POST"
                 className=" flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <input type="text" name="email" placeholder="Enter your email" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows="10"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    ></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-100 duration-300">Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}
