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
    // Clean the email string from any accidental spaces or quotes from the environment settings
    const contactEmail = (process.env.CONTACT_EMAIL || "me@jacobhull.me").replace(/['"\s]+/g, '');

    console.log(`[Contact API] Sending message to: "${contactEmail}"`);

    try {
      // Create a proper URL object to ensure it's valid
      const targetUrl = new URL(`https://formsubmit.co/ajax/${contactEmail}`);
      
      const response = await fetch(targetUrl.toString(), {
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

      console.log(`[Contact API] FormSubmit status: ${response.status}`);
      
      // Get the response as text first to avoid JSON parsing errors if it's HTML
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error("[Contact API] Failed to parse FormSubmit response as JSON:", responseText);
        return res.status(500).json({ success: false, error: "The email service returned an invalid response. Please try again later." });
      }

      console.log(`[Contact API] Result:`, result);
      
      if (response.ok) {
        return res.status(200).json({ success: true, message: result.message });
      } else {
        const errorMessage = result.message || "Email service returned an error.";
        return res.status(200).json({ 
          success: false, 
          error: errorMessage
        });
      }
    } catch (error) {
      console.error("[Contact API] Critical error:", error);
      return res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Internal Server Error"
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
