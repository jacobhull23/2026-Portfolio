import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API contact route
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    const contactEmail = process.env.CONTACT_EMAIL || "me@jacobhull.me";

    console.log(`Attempting to send message to ${contactEmail} via FormSubmit...`);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name}`,
          _captcha: "false"
        })
      });

      console.log(`FormSubmit response status: ${response.status}`);
      const result = await response.json();
      console.log(`FormSubmit result:`, result);
      
      if (response.ok) {
        return res.status(200).json({ success: true, message: result.message });
      } else {
        // FormSubmit response handling
        const errorMessage = result.message || "Email service returned an error.";
        return res.status(200).json({ 
          success: false, 
          error: errorMessage,
          debug: { status: response.status, result }
        });
      }
    } catch (error) {
      console.error("Critical server error during contact form submission:", error);
      return res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Internal Server Error",
        stack: process.env.NODE_ENV !== 'production' ? (error instanceof Error ? error.stack : undefined) : undefined
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
