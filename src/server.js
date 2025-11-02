import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'web' directory
app.use(express.static(path.join(__dirname, '../web')));

// API endpoint for account data (can be expanded)
app.get('/api/status', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tradovate Multi-Account Manager API',
        version: '1.0.0'
    });
});

// Catch all route - serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/index.html'));
});

app.listen(PORT, () => {
    console.log('╔════════════════════════════════════════════════════╗');
    console.log('║   Tradovate Multi-Account Manager - Web Server    ║');
    console.log('╚════════════════════════════════════════════════════╝\n');
    console.log(`🚀 Server is running on: http://localhost:${PORT}`);
    console.log(`📂 Serving files from: ${path.join(__dirname, '../web')}`);
    console.log(`\n💡 Open your browser and navigate to: http://localhost:${PORT}`);
    console.log(`\n⏹️  Press Ctrl+C to stop the server\n`);
});
