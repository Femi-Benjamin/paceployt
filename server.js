import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Wildcard SPA route fallback: serve index.html for all direct URL visits
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Paceployt production server running at http://localhost:${PORT}`);
});
