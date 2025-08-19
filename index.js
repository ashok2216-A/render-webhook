const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('🔔 Webhook received:', req.body);
  res.status(200).send('Webhook received');
});

app.get('/', (req, res) => {
  res.send('Webhook server is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
