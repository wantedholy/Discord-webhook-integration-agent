"use server";
export const sendDiscordMessage = async (formData) => {
  try {
    const rawFormEntries = Object.fromEntries(formData);
    console.log("Sending to Discord:", rawFormEntries.message);
    const result = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: rawFormEntries.message }),
    });
    console.log("Discord response status:", result.status);
  } catch (error) {
    console.error("Discord error:", error);
  }
};
