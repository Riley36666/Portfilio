import { useState } from "react";
import { motion } from "framer-motion";
import AdminLogin from "../../components/login";

// ---------------------- API HELPERS ----------------------

async function checkPassword(password) {
  try {
    const res = await fetch("/admin/Password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    const data = await res.json();

    if (data?.success && data?.token) {
      localStorage.setItem("adminToken", data.token);
    }

    return data?.success ?? false;
  } catch {
    return false;
  }
}

async function getAllInfo() {
  try {
    const res = await fetch("/admin/info", {
      headers: {
        "x-admin-token": localStorage.getItem("adminToken")
      }
    });

    return await res.json();
  } catch {
    return null;
  }
}

async function getMessages() {
  try {
    const res = await fetch("/admin/returnMessages", {
      headers: {
        "x-admin-token": localStorage.getItem("adminToken")
      }
    });

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// ---------------------- COMPONENT ----------------------

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [systemInfo, setSystemInfo] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();

    const ok = await checkPassword(passwordInput);

    if (ok) {
      setAuthenticated(true);

      const msgs = await getMessages();
      setMessages(Array.isArray(msgs) ? msgs : []);

      localStorage.setItem(
        "messages",
        JSON.stringify(Array.isArray(msgs) ? msgs : [])
      );

      const info = await getAllInfo();
      setSystemInfo(info ?? {});
    }
  }

  if (!authenticated) {
    return (
      <AdminLogin
        password={passwordInput}
        setPassword={setPasswordInput}
        onLogin={handleLogin}
      />
    );
  }

  const sys = systemInfo?.data ?? {};

  return (
    <div className="min-h-screen bg-black text-white p-10 space-y-12">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold text-teal-300 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-400">
          Welcome back. Here’s what’s happening.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* MESSAGES */}
        <div>
          <h2 className="text-3xl font-bold text-teal-300 mb-4">
            Messages
          </h2>

          {messages.length === 0 ? (
            <p className="text-gray-400">No messages yet.</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-900/40 border border-teal-300/40 rounded-xl p-6 backdrop-blur-md shadow-lg"
                >
                  <p className="text-teal-300 font-semibold">{msg.name}</p>
                  <p className="text-gray-400 text-sm">{msg.email}</p>
                  <p className="mt-3 text-gray-300">{msg.message}</p>
                  <p className="mt-2 text-xs text-gray-500">{msg.date}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* SYSTEM INFO (DISABLED SAFE) */}
        {false && (
          <div>
            <h2 className="text-3xl font-bold text-teal-300 mb-4">
              System Info
            </h2>

            <p className="text-gray-400">System info disabled</p>
          </div>
        )}

      </div>
    </div>
  );
}