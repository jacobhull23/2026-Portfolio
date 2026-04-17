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

      const result = await response.json();
      
      if (response.ok) {
        res.status(200).json({ success: true, message: result.message });
      } else {
        res.status(response.status).json({ success: false, error: result.message });
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
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
