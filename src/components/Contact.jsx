import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const socials = [
    {
      icon: <FaEnvelope />,
      name: "Email",
      desc: "Send me a message anytime",
      link: "mailto:rishabh@gmail.com",
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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="pt-28 px-6 pb-24 bg-gray-50 scroll-mt-20">
      <Toaster position="bottom-center" />
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Contact Me
      </h2>

      <div className="flex justify-center">
        <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-8 grid md:grid-cols-2 gap-10 border border-gray-200">
          {/* Left */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg"
              alt="My Profile"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-gray-800">Rishabh Garg</h3>
            <p className="text-gray-500 mb-4">Frontend Developer</p>
            <p className="text-gray-600 mb-6">
              Passionate about crafting beautiful UI and making ideas come
              alive.
            </p>

            <div className="flex space-x-4">
              {socials.map((item, index) => (
                <button
                  key={index}
                  onClick={() => window.open(item.link, "_blank")}
                  className="text-2xl text-blue-600 hover:scale-110 transition-transform"
                  aria-label={item.name}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-blue-50 shadow-md rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number (optional)"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
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
    </section>
  );
};

export default Contact;
