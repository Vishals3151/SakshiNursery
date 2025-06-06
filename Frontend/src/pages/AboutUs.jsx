import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-green-50 min-h-screen py-10 px-6 md:px-20 font-sans">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">
          Rooted in Passion, Growing with Purpose
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Welcome to <strong>Sakshi Hi-Tech Nursery</strong> – where every plant tells a story and every leaf is a promise of care. We’re not just growing plants; we’re growing a greener tomorrow.
        </p>
      </div>

      {/* Founder Section */}
      <section className="max-w-6xl mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="/owner.jpg" // Replace with your actual owner image path
          alt="Founder Mr. Vijay Trambakrao Khaire"
          className="rounded-full shadow-xl w-64 h-64 object-cover mx-auto md:mx-0"
        />
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Meet Our Founder</h2>
          <p className="text-gray-600 text-md">
            Mr. Vijay Trambakrao Khaire planted more than just seeds — he planted a dream. With a deep-rooted love for nature and resilience through every obstacle, he started Sakshi Hi-Tech Nursery in 2020. His vision was simple but powerful: make healthy, beautiful plants accessible to everyone and create a space where care meets quality. Today, his leadership continues to inspire every step we take.
          </p>
        </div>
      </section>

      {/* Nursery Journey */}
      <section className="max-w-6xl mx-auto my-12 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Our Green Journey</h2>
        <p className="text-gray-600 text-md max-w-4xl mx-auto">
          From hand-watering plants in a small corner of land to delivering to homes across states — our journey is one of patience, learning, and growth. We adopted modern technologies, eco-friendly practices, and built a team that cares deeply about every plant we grow.
        </p>
      </section>

      {/* Nursery Photo Gallery */}
      <section className="max-w-6xl mx-auto my-16">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">A Glimpse into Our Nursery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/AboutUs_2.jpg",
            "/AboutUs_3.jpg",
          ].map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md">
              <img
                src={src}
                alt={`Nursery photo ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto my-16 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Why Plant with Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: "https://img.icons8.com/color/96/plant-under-sun.png",
              text: "Diverse range of indoor & outdoor plants",
            },
            {
              icon: "https://img.icons8.com/color/96/gardener.png",
              text: "Expert growing techniques & advice",
            },
            {
              icon: "https://img.icons8.com/color/96/recycle.png",
              text: "Eco-friendly and organic systems",
            },
            {
              icon: "https://img.icons8.com/color/96/feedback.png",
              text: "Personalized care tips and follow-ups",
            },
            {
              icon: "https://img.icons8.com/color/96/teamwork.png",
              text: "A passionate, experienced support team",
            },
            {
              icon: "https://img.icons8.com/color/96/nature-care.png",
              text: "We care for your plants as much as you do",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <img src={item.icon} alt="Icon" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 rounded-2xl shadow-md max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              name: "Amit R. - Pune",
              feedback:
                "I ordered indoor plants and they arrived healthy and thriving. Their care tips made it easy even for a beginner like me!",
            },
            {
              name: "Meera S. - Nashik",
              feedback:
                "It’s not just a nursery, it’s a plant lover’s paradise. You can feel the dedication in every sapling they deliver.",
            },
          ].map((review, idx) => (
            <div key={idx} className="p-6 border-l-4 border-green-500 bg-green-50 rounded-lg shadow-sm">
              <p className="text-gray-700 italic">"{review.feedback}"</p>
              <p className="text-green-800 font-semibold mt-2">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Let’s Grow Something Beautiful Together</h2>
        <p className="text-gray-600">
          Curious about a plant? Need advice?{" "}
          <a href="/contact" className="text-green-600 underline hover:text-green-800">
            Get in touch
          </a>{" "}
          or follow us on social media for green tips and updates.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
