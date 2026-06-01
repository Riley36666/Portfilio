import { motion } from "framer-motion";
import { useRef } from "react";
import Background from "../components/Background";


async function sendEmail(e) {
  e.preventDefault();

  const name = nameRef.current.value;
  const email = emailRef.current.value;
  const message = messageRef.current.value;

  try {
    const res = await fetch("admin/addMessages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();

    if (data.success) {
      setToast({ type: "success", text: "Message sent successfully!" });

      // clear inputs
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } else {
      setToast({ type: "error", text: "Failed to send message." });
    }

    // auto hide toast
    setTimeout(() => setToast(null), 3000);

  } catch (err) {
    setToast({ type: "error", text: "Server error. Try again." });
    setTimeout(() => setToast(null), 3000);
  }
}
    


  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Background />
 
      <div className="flex flex-col items-center pt-32 px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-teal-300 mb-6"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-xl text-center leading-relaxed mb-10"
        >
          Whether you want to collaborate, ask a question, or just say hello, feel free to reach out.
          I’m always open to new opportunities and conversations.
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/40 border border-teal-300/40 rounded-2xl p-8 w-full max-w-lg backdrop-blur-md shadow-lg"
        >
          <form className="flex flex-col gap-6" onSubmit={sendEmail}>
            <div>
              <label className="text-gray-300 text-sm">Name</label>
              <input
                ref={nameRef}
                type="text"
                className="w-full mt-1 px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white focus:border-teal-300 outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Email</label>
              <input
                ref={emailRef}
                type="email"
                className="w-full mt-1 px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white focus:border-teal-300 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                ref={messageRef}
                rows="5"
                className="w-full mt-1 px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white focus:border-teal-300 outline-none transition"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-teal-300 text-black font-medium py-3 rounded-xl hover:bg-teal-400 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Extra Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-gray-400 text-sm text-center"
        >
          Or reach me directly at  
          <span className="text-teal-300 ml-1">Riley.36666@gmail.com</span>
        </motion.div>
      </div>
    </div>
  );


