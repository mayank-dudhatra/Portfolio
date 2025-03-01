// // Import required modules
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Initialize Express app
// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // ✅ Corrected this

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ MongoDB connection error:', err));

// // Define Mongoose Schema and Model
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   subject: { type: String, required: true },
//   message: { type: String, required: true },
// }, { timestamps: true });

// const Contact = mongoose.model('Contact', contactSchema);

// // API Route to handle form submission
// app.post('/api/contact', async (req, res) => {
//   try {
//     const { name, email, phone, subject, message } = req.body;

//     // Validate Input
//     if (!name || !email || !phone || !subject || !message) {
//       return res.status(400).json({ success: false, error: 'All fields are required' });
//     }

//     // Save to MongoDB
//     const newContact = new Contact({ name, email, phone, subject, message });
//     await newContact.save();

//     res.status(201).json({ success: true, message: 'Message sent successfully' });
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// });

// // Start server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Contact Form Route
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Email Transporter (Using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mayankdudhatracg@gmail.com", // Your Gmail
        pass: "jgwv kuih zbjf vikf", // Use an App Password (explained below)
      },
    });

    // Email Content
    const mailOptions = {
      from: `"${name}" <${email}>`, // User's Email
      to: "mayankdudhatracg@gmail.com", // Your Email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
