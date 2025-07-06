import type { RequestHandler } from 'express';
import express from 'express';
import type { TelegramRequest } from './types/requestTypes';

const app = express();

const validateRequest: RequestHandler<unknown, unknown, TelegramRequest> = (
  req,
  res,
  next
) => {
  const { name, telegram, reason } = req.body;

  if (!name || !telegram || !reason) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  next();
};

app.post('/api/send-to-telegram', validateRequest, async (req, res) => {
  try {
    const { name, telegram, reason } = req.body;

    const message = `📩 New contact request:\n👤 Name: ${name}\n📌 Telegram: ${telegram}\n📌 Reason: ${reason}`;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Error Telegram API');
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown Error',
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
