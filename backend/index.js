import { env } from 'node:process';
// const port = process.env.PORT || 5000;

// const app = express();
// app.use('/openai', require('./routes/openaiRoutes'))
// app.listen(port, () => console.log(`start litsening on port ${port}`));
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

function getResponse(content) {
  const data = JSON.stringify({
    apiKey: env.OPENAI_API_KEY,
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

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

getResponse("hello");