// const port = process.env.PORT || 5000;

// const app = express();
// app.use('/openai', require('./routes/openaiRoutes'))
// app.listen(port, () => console.log(`start litsening on port ${port}`));
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
console.log(process.env.dev);
async function getResponse(content) {
  const data = JSON.stringify({
    apiKey: "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",
    sessionId: uuidv4(),
    content: content,
  });
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.openai-proxy.com/pro/chat/completions",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(response);
    return JSON.stringify(response.data);
  } catch (error) {
    console.log(error);
    return error;
  }
}
let content = '改正这句话中的语法错误：I is human.'
getResponse(content);
// export default getResponse;
