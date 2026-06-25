import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper to escape HTML characters and prevent HTML/XSS injection in the email template
const escapeHTML = (str) => {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, (tag) => {
        const chars = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        };
        return chars[tag] || tag;
    });
};

export default async function handler(req, res) {
    // 1. Enforce POST requests
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method Not Allowed",
        });
    }

    try {
        const { name, email, message } = req.body;

        // 2. Validate presence and type of body parameters
        if (!name || typeof name !== "string" || !name.trim()) {
            return res.status(400).json({ error: "Missing or invalid name." });
        }
        if (!email || typeof email !== "string" || !email.trim()) {
            return res.status(400).json({ error: "Missing or invalid email." });
        }
        if (!message || typeof message !== "string" || !message.trim()) {
            return res.status(400).json({ error: "Missing or invalid message." });
        }

        // 3. Prevent excessive payload lengths
        if (name.length > 100 || email.length > 100 || message.length > 5000) {
            return res.status(400).json({ error: "Input length exceeds safety thresholds." });
        }

        // 4. Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return res.status(400).json({ error: "Please provide a valid email format." });
        }

        // 5. Sanitize / Escape input values
        const safeName = escapeHTML(name.trim());
        const safeEmail = escapeHTML(email.trim());
        const safeMessage = escapeHTML(message.trim());

        // 6. Send email notification
        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: [process.env.EMAIL_TO],
            reply_to: safeEmail,
            subject: `Portfolio Contact from ${safeName}`,
            html: `
                <h2>New Contact</h2>
                <p><b>Name:</b> ${safeName}</p>
                <p><b>Email:</b> ${safeEmail}</p>
                <p><b>Message:</b></p>
                <p style="white-space: pre-wrap;">${safeMessage}</p>
            `,
        });

        // 7. Hide detailed system errors from clients
        if (error) {
            console.error("Resend API Send Failure:", error);
            return res.status(500).json({
                error: "Failed to dispatch notification email.",
            });
        }

        return res.status(200).json({
            success: true,
        });

    } catch (err) {
        console.error("Unhandled API Serverless Error:", err);
        return res.status(500).json({
            error: "An unexpected server error occurred.",
        });
    }
}