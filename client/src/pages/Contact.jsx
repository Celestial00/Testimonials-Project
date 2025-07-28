import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center  text-left text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-6xl font-bold mb-10  text-blue-600">Contact Us</h1>

        <p className="text-lg mb-8 ">
          We'd love to hear from you! Whether you have questions, suggestions,
          or want to share your experience, feel free to reach out using the
          form below.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@example.com"
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-500 rounded-lg  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
