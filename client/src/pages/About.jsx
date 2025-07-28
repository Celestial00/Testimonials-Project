import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen flex items-center  text-gray-800 px-6 py-16">
      <div className="max-w-4xl  mx-auto">
        <h1 className="text-6xl text-left font-bold mb-10  text-blue-600">
          About Us
        </h1>

        <p className="text-lg  text-left  mb-6">
          <strong>Welcome to Dissertation Ranking!</strong>
          <br />
          <br />
          We are a student project from the Ruhr region dedicated to supporting
          prospective medical students and doctoral candidates in their search
          for the right dissertation topic and the right professorship. From our
          own experience, we know how challenging and opaque this process can
          be. It often feels like you're groping in the dark, without clear
          direction or guidance.
        </p>

        <p className="text-lg  mb-6">
          Our motivation is to change this situation and shed light on the
          dissertation search. We firmly believe that transparency and
          information are crucial for making the right decision and igniting
          research motivation. By providing a platform for medical dissertation
          reviews, we want to give prospective doctoral students the opportunity
          to benefit from the experiences of others and make informed decisions
          about their dissertation project.
        </p>

        <p className="text-lg  mb-6">
          Our team consists of dedicated students who are committed to
          facilitating the dissertation search and promoting the exchange of
          knowledge and experiences. We are proud to contribute to the academic
          community and hope that our website will help ease the path to
          doctoral studies for many students.
        </p>

        <p className="text-lg  mb-6">
          We warmly invite you to use our platform to read testimonials, share
          your own experiences and become part of a growing community of medical
          doctoral students.
        </p>

        <p className="text-lg  font-medium">
          Thank you for joining us on our mission!
          <br />
          <br />
          <span className="text-blue-600 font-semibold">
            — Your Dissertation Ranking Team
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
