import React from "react";

const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center  text-gray-800 px-6 py-16">
      <div className="max-w-3xl mx-auto text-left">
        <h1 className="text-6xl font-bold mb-10 text-center text-blue-600">
          Thank You!
        </h1>

        <p className="text-lg mb-6">
          <strong>
            Your dissertation information has been successfully submitted.
          </strong>
          <br />
          <br />
          We appreciate your contribution to the Dissertation Ranking platform.
          Your feedback and insights will help fellow students make more
          informed decisions, and we’re proud to have you as part of our growing
          community.
        </p>

        <p className="text-lg mb-6">
          Our mission is to bring transparency and collaboration to the world of
          medical dissertations. By sharing your experience, you've helped make
          this process easier for countless others.
        </p>

        <p className="text-lg mb-6">
          If you’d like to continue exploring testimonials or read more about
          how we help students like you, feel free to visit our{" "}
          <a href="/about" className="text-blue-600 underline font-medium">
            About Us
          </a>{" "}
          page.
        </p>

        <p className="text-lg font-medium">
          Thank you again for your trust and contribution!
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

export default ThankYou;
