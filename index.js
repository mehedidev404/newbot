const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('GANDU Bot is Watching You! 👁️'));
app.listen(port, () => console.log(`Gandu is alive on port ${port}`));

const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const token = '8537616245:AAFKym83dKZk17aDFUb32hK-0nc9Q1OM-UU';
const chatId = '-5064556201';

process.env.NTBA_FIX_319 = 1;
const bot = new TelegramBot(token, { polling: true });

const sendGanduMessage = (message) => {
  bot
    .sendMessage(chatId, message)
    .then(() => console.log(`Gandu says: ${message}`))
    .catch((err) => console.log('Gandu error:', err));
};

console.log('GANDU Bot is ready to roast! 🔥');

// 8:00 AM - Entry Warning
cron.schedule(
  '0 8 * * *',
  () => {
    sendGanduMessage(
      "Ekhon tik moto sobai ase nai, aisob ki? 🤨 Don't Force me to take action about you guy's!",
    );
  },
  { timezone: 'Asia/Dhaka' },
);

// 11:00 AM - Delivery Plan
cron.schedule(
  '0 11 * * *',
  () => {
    sendGanduMessage('Delivery Plan koren ajker. Shomoy kintu boshe nai! ⏳');
  },
  { timezone: 'Asia/Dhaka' },
);

// 1:00 PM - Lunch Break Rules
cron.schedule(
  '0 13 * * *',
  () => {
    sendGanduMessage(
      'Jan 4 ta khaiya asen, kintu 2 ta baje jeno sit-a dekhi sobai-re! 🍱 Beshi deri korle khobor ase!',
    );
  },
  { timezone: 'Asia/Dhaka' },
);

// 4:00 PM - Work Pressure
cron.schedule(
  '0 16 * * *',
  () => {
    sendGanduMessage(
      'Kaj na sesh kore keu jabe na! 🚫 Ekta issue jeno na thake make sure korben. Ghore jawar shakh thakle kaj shesh koren.',
    );
  },
  { timezone: 'Asia/Dhaka' },
);

// 4:30 PM - Disappointment
cron.schedule(
  '30 16 * * *',
  () => {
    sendGanduMessage(
      'Things are not getting well as i expected... 🙄 Boltesi ekta, kortesen arekta!',
    );
  },
  { timezone: 'Asia/Dhaka' },
);

// 5:00 PM - End of Day Roast
cron.schedule(
  '0 17 * * *',
  () => {
    sendGanduMessage(
      '5 ta bajar ageei jawar jonno ready hoiya bose asen? 👜 Not good, not good! Kaaj ki asholei shesh naki faki?',
    );
  },
  { timezone: 'Asia/Dhaka' },
);
