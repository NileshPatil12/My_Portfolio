import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';

function Contact() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i3ap4p3', 'template_fcnpnm9', form.current, {
        publicKey: 'VvDhyEIoWhorLcL4Z',
      })
      .then(
        () => {
          toast.success("Your message has been sent!");
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-lg container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">Contact Me</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Feel free to reach out. I’d love to hear from you!
      </p>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white w-full md:w-96 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Your Message</h2>

          {/* Full Name Field */}
          <div className="flex flex-col mb-6">
            <label className="block text-lg text-gray-700">Full Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="shadow-md border-2 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col mb-6">
            <label className="block text-lg text-gray-700">Email Address</label>
            <input
              {...register("email", { required: "Email is required" })}
              className="shadow-md border-2 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-6">
            <label className="block text-lg text-gray-700">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="shadow-md border-2 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl px-6 py-3 w-full hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
