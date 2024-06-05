import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORTA = process.env.PORTA || 3000;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

app.get("/", (req, res) => {
    res.redirect("/pages/index.html");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando http://localhost:${PORTA}`);
});