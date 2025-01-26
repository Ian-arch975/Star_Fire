const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/np12u1.jpeg"
    ALIVE_MSG: process.env.ALIVE_MSG || "Hey👋, Star_Fire is alive"
};
