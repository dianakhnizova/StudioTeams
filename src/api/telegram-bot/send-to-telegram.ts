import {
  CHAT_ID_VALUE,
  TOKEN_BOT,
} from '@/components/contact-me-form/constants';

export const sendToTelegram = async (
  name: string,
  telegram: string,
  reason: string
) => {
  const BOT_TOKEN = TOKEN_BOT;
  const CHAT_ID = CHAT_ID_VALUE;

  const message = `📩 New contact request:\n👤 Name: ${name}\n📌 Telegram: ${telegram}\n📌 Reason: ${reason}`;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    }),
  });
};
