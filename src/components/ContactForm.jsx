// src/components/ContactForm.jsx
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { sendContact } from '../utils/sendContact';
import { useState } from 'react';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const [serverError, setServerError] = useState(null);

  const onSubmit = async (data) => {
    try {
      await sendContact(data);
      reset();
    } catch (error) {
      setServerError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              rows={5}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {serverError && <p className="text-red-600 text-center">{serverError}</p>}
          {isSubmitSuccessful && !serverError && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
