//ONLY FOR SERVER SIDE

import { Configuration, OpenAIApi } from 'openai';

const openaiApi = new OpenAIApi(
  new Configuration({
    apiKey: KEY,
  })
);

console.log(onAsking());

async function onAsking() {
  const response = await openaiApi.createChatCompletion({
    modell: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello' }],
  });

  return console.log(response);
}
