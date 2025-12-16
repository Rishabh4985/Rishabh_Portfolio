// import React, { useState } from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";

// const Contact = () => {
//   const socials = [
//     {
//       icon: <FaEnvelope />,
//       name: "Email",
//       desc: "Send me a message anytime",
//       link: "mailto:rishabh@gmail.com",
//       color: "hover:text-red-400",
//     },
//     {
//       icon: <FaLinkedin />,
//       name: "LinkedIn",
//       desc: "Connect with me professionally",
//       link: "https://linkedin.com/in/rishabh-garg",
//       color: "hover:text-blue-400",
//     },
//     {
//       icon: <FaGithub />,
//       name: "GitHub",
//       desc: "Check out my projects",
//       link: "https://github.com/rishabh-garg",
//       color: "hover:text-white",
//     },
//   ];

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate form
//     if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
//       toast.error("Please fill in all required fields!");
//       return;
//     }

//     setLoading(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast.success(
//         `Thank you, ${form.name}! Your message has been sent. 🚀`,
//         {
//           duration: 4000,
//           icon: "✨",
//         }
//       );
      
//       // Reset form
//       setForm({ name: "", email: "", phone: "", message: "" });
//       setLoading(false);
//     }, 800);
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 scroll-mt-20"
//     >
//       <Toaster position="bottom-center" />

//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Let&apos;s{" "}
//           <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//             Connect
//           </span>
//         </h2>
//         <p className="text-slate-400 text-lg">
//           Have a project in mind? Let&apos;s collaborate and create something
//           amazing together.
//         </p>
//       </div>

//       {/* Main Contact Container */}
//       <div className="max-w-5xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
//           {/* Left Side - Profile & Social */}
//           <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 p-12 flex flex-col justify-between">
//             {/* Profile Info */}
//             <div className="text-center">
//               <div className="mb-8">
//                 <img
//                   src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg"
//                   alt="Rishabh Garg"
//                   className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-400 shadow-lg"
//                 />
//               </div>

//               <h3 className="text-3xl font-bold text-white mb-2">
//                 Rishabh Garg
//               </h3>
//               <p className="text-cyan-400 font-semibold mb-6">
//                 Frontend Developer
//               </p>

//               <p className="text-slate-300 leading-relaxed mb-8">
//                 Passionate about crafting beautiful UI and making ideas come
//                 alive. Open for freelance and full-time opportunities.
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center gap-6">
//               {socials.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-14 h-14 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-2xl text-white transition-all duration-300 hover:scale-110 ${item.color} border border-slate-600 hover:border-slate-500`}
//                   aria-label={item.name}
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12">
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Name & Email Row */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
//                 />
//               </div>

//               {/* Phone */}
//               <input
//                 name="phone"
//                 type="tel"
//                 placeholder="Phone (Optional)"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
//               />

//               {/* Message */}
//               <textarea
//                 name="message"
//                 placeholder="How can I help you?"
//                 rows={5}
//                 required
//                 value={form.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
//               ></textarea>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>

//               {/* Helper Text */}
//               <p className="text-slate-400 text-sm text-center">
//                 I&apos;ll get back to you as soon as possible! ✨
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Alternative Social Cards (Optional) */}
//       <div className="max-w-5xl mx-auto mt-16">
//         <div className="grid md:grid-cols-3 gap-6">
//           {socials.map((social, index) => (
//             <a
//               key={index}
//               href={social.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-700/50 transition-all text-center group cursor-pointer"
//             >
//               <div className="text-4xl mb-3 inline-block group-hover:scale-125 transition-transform text-cyan-400">
//                 {social.icon}
//               </div>
//               <h4 className="text-white font-semibold mb-1">{social.name}</h4>
//               <p className="text-slate-400 text-sm">{social.desc}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ isDark }) => {
  const socials = [
    {
      icon: <FaEnvelope />,
      name: "Email",
      desc: "Send me a message anytime",
      link: "mailto:rishabh@gmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      desc: "Connect with me professionally",
      link: "https://linkedin.com/in/rishabh-garg",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      desc: "Check out my projects",
      link: "https://github.com/rishabh-garg",
      color: "hover:text-white",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(
        `Thank you, ${form.name}! Your message has been sent. 🚀`,
        {
          duration: 4000,
          icon: "✨",
        }
      );
      
      // Reset form
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section
      id="contact"
      className={`py-24 px-6 scroll-mt-20 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-50"
      }`}
    >
      <Toaster position="bottom-center" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className={`text-lg transition-colors duration-500 ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}>
          Have a project in mind? Let&apos;s collaborate and create something
          amazing together.
        </p>
      </div>

      {/* Main Contact Container */}
      <div className="max-w-5xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 ${
          isDark
            ? "border-slate-700 bg-slate-900"
            : "border-slate-200 bg-white"
        }`}>
          {/* Left Side - Profile & Social */}
          <div className={`p-12 flex flex-col justify-between transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900"
              : "bg-gradient-to-br from-blue-50 via-white to-slate-50"
          }`}>
            {/* Profile Info */}
            <div className="text-center">
              <div className="mb-8">
                <img
                  src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg"
                  alt="Rishabh Garg"
                  className={`w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-400 shadow-lg ${
                    isDark ? "" : "ring-4 ring-blue-100"
                  }`}
                />
              </div>

              <h3 className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Rishabh Garg
              </h3>
              <p className="text-cyan-400 font-semibold mb-6">
                Frontend Developer
              </p>

              <p className={`leading-relaxed mb-8 transition-colors duration-500 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}>
                Passionate about crafting beautiful UI and making ideas come
                alive. Open for freelance and full-time opportunities.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white transition-all duration-300 hover:scale-110 border ${
                    isDark
                      ? "bg-slate-700 hover:bg-slate-600 border-slate-600 hover:border-slate-500"
                      : "bg-slate-200 hover:bg-slate-300 border-slate-300 hover:border-slate-400"
                  } ${item.color}`}
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`p-12 transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 to-slate-950"
              : "bg-gradient-to-br from-white to-slate-50"
          }`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                      : "bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-cyan-600/20"
                  }`}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                      : "bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-cyan-600/20"
                  }`}
                />
              </div>

              {/* Phone */}
              <input
                name="phone"
                type="tel"
                placeholder="Phone (Optional)"
                value={form.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                    : "bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-cyan-600/20"
                }`}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="How can I help you?"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                    : "bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-cyan-600/20"
                }`}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Helper Text */}
              <p className={`text-sm text-center transition-colors duration-500 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                I&apos;ll get back to you as soon as possible! ✨
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Alternative Social Cards (Optional) */}
      <div className="max-w-5xl mx-auto mt-16">
        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-xl border transition-all text-center group cursor-pointer ${
                isDark
                  ? "bg-slate-800 border-slate-700 hover:border-slate-600 hover:bg-slate-700/50"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="text-4xl mb-3 inline-block group-hover:scale-125 transition-transform text-cyan-400">
                {social.icon}
              </div>
              <h4 className={`font-semibold mb-1 transition-colors duration-500 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {social.name}
              </h4>
              <p className={`text-sm transition-colors duration-500 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                {social.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;