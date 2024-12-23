import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact(props) {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupSuccess, setPopupSuccess] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2v2s3gi', // Replace with your EmailJS Service ID
        'template_49hl226', // Replace with your EmailJS Template ID
        form.current,
        'rhCP0wS0Nvge4HZg4' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setPopupMessage('Email sent successfully!');
          setPopupSuccess(true);
          setShowPopup(true);
        },
        (error) => {
          setPopupMessage('Failed to send email.');
          setPopupSuccess(false);
          setShowPopup(true);
        }
      );

    e.target.reset(); // Optional: Reset form after submission

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 10000);
  };

  return (
    <div className='h-auto md:h-screen relative'>
      <h1
        id='contact'
        className='pt-5 font-sans text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'
      >
        Contact
      </h1>

      <div className="pb-6 px-4 mx-auto max-w-screen-md">
        <p className="mt-4 mb-8 lg:mb-16 font-light text-center font-sans text-gray-500 dark:text-gray-400 sm:text-xl">
          I have got just what you need. <span className='underline decoration-blue-500'>Lets Talk</span>
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name='from_email'
              id="from_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              name='subject'
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="m-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div
          className={`fixed bottom-10 right-10 px-4 py-3 rounded-md shadow-md ${
            popupSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
}

export default Contact;
