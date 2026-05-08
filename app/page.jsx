'use client';
import { sendDiscordMessage } from "./actions/sendDiscordMessage";
import { useState } from "react";

export default function Dashboard() {
  const [sent, setSent] = useState(false);
  return (
    <main style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Discord Community Dashboard</h1>
      <form
        action={async (data) => {
          await sendDiscordMessage(data);
          setSent(true);
        }}
        style={{ display: "flex", flexDirection: "column", gap: "1em" }}
      >
        <input name="message" placeholder="Type your message..." required />
        <button type="submit">Send</button>
        {sent && <span style={{ color: "green" }}>Message sent to Discord!</span>}
      </form>
    </main>
  );
}
