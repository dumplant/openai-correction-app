const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
openai.basePath = "https://api.openai-proxy.com/pro/chat/completions";
console.log(openai);
const generateResponse = async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Correct this to standard English:\n\nShe no went to the market.",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const answer = response.data.choices[0].content;
    console.log(answer);
    res.status(200).json({
      success: true,
      data: answer,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: "Something wrong...",
    });
  }
};

module.exports = { generateResponse };
