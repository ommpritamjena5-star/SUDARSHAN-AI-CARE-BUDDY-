const dotenv = require('dotenv');
dotenv.config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
    baseURL: 'https://models.inference.ai.azure.com',
    apiKey: process.env.GITHUB_TOKEN
});

async function run() {
    try {
        const res = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'test' }],
            model: 'gpt-4o'
        });
        console.log('SUCCESS:', res.choices[0].message.content);
    } catch (e) {
        console.error('ERROR FROM GITHUB API:', e.message);
    }
}
run();
