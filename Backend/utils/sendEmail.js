import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password
  },
});

export const sendConfirmationEmail = async (to, name) => {
  const mailOptions = {
    from: `"Herb AI 🌿" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Contribution has been received.",
    html: `
      <p>Dear ${name || "Contributor"},</p>

      <p>
        Thank you for your herb contribution! We truly appreciate you
        taking the time to share it with us.
      </p>

      <p>
        Our team will carefully review your submission and
        once approved, add it to our herb library.
      </p>

      <p>
        Thanks again for contributing to our growing herb community.
      </p>

      <br/>

      <p>
        Best regards,<br/>
        Herb AI Team 🌿
      </p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
