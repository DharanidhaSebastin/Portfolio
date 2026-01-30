import type { Express } from "express";
import type { Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // ===================== CONTACT FORM =====================
  app.post("/api/contact", async (req, res) => {
    try {
      // 1️⃣ Validate request
      const validatedData = insertContactMessageSchema.parse(req.body);

      // 2️⃣ Save to database
      const message = await storage.createContactMessage(validatedData);

      // 3️⃣ Send email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.CONTACT_EMAIL,
          pass: process.env.CONTACT_EMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
        to: process.env.CONTACT_EMAIL, // 👈 your email
        replyTo: validatedData.email,
        subject: `New Contact: ${validatedData.subject}`,
        html: `
          <h3>New Portfolio Contact Message</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
      });

      // 4️⃣ Respond success
      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: message.id,
      });

    } catch (error) {
      console.error("Contact API error:", error);

      if (error instanceof Error) {
        res.status(400).json({ success: false, error: error.message });
      } else {
        res.status(500).json({ success: false, error: "Failed to send message" });
      }
    }
  });

  // ===================== FETCH MESSAGES =====================
  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}
