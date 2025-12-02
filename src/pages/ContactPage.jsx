import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const socials = [
    {
      icon: <FaEnvelope />,
      name: "Email",
      desc: "Send me a message anytime",
      link: "rishabh@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      desc: "Connect with me professionally",
      link: "https://linkdin.com/",
    },

    {
      icon: <FaGithub />,
      name: "GitHub",
      desc: "Check out my projects",
      link: "https://github.com/",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-24 px-6 pb-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Contact Me
      </h2>

      {/* Outer Card - 2 Column */}
      <div className="flex justify-center">
        <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-8 grid md:grid-cols-2 gap-10 border border-gray-200">
          {/* Left Column - Profile / Info */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="
              alt="My Profile"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-gray-800">Rishabh Garg</h3>
            <p className="text-gray-500 mb-4">Frontend Developer</p>
            <p className="text-gray-600 mb-6">
              Passionate about crafting beautiful UI and converting ideas into
              digital reality.
            </p>

            <div className="flex space-x-4">
              {socials.map((item, index) => (
                <button
                  key={index}
                  onClick={() => window.open(item.link, "_blank")}
                  className="text-2xl text-blue-600 hover:text-blue-800 transition"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-blue-50 shadow-md rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
