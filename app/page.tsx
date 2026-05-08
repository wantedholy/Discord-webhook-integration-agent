'use client';
import { useState } from "react";

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);
    await fetch("/api/discord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    setSent(true);
    setMessage('');
  };

  return (
    <main style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Discord Community Dashboard</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <input
          name="message"
          placeholder="Type your message..."
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
        {sent && <span style={{ color: "green" }}>Message sent to Discord!</span>}
      </form>
    </main>
  );
}
