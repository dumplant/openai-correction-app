// import fetch from 'isomorphic-unfetch';

const getResponse = async (type, content) => {
  console.log('content:' + content);
  const response = await fetch('https://api.openai-proxy.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `假设你是一名${type}英语作文考官,这是用户提供的一篇${type}作文：${content}。
你有两个任务: 1. 检查单词拼写、纠正标点符号、修正语法错误,为用户提供一个修改全文版本;2. 为用户的作文打分,分数的总分为9分,请从词汇能力、句子能力、篇章能力三个方面给用户打分。
请以json格式给出回答, json的key分别为: polishedVersion、totalScore、vpScore、vpEvaluation、spScore、spEvaluation、epScore、epEvaluation, value分别为修改过的全文版本、总分分数、词汇能力得分、词汇能力评价、句子能力得分、句子能力评价、篇章能力得分、篇章能力评价`,
      // prompt: `Output the corrected version of this statement: "${content}"`,
      // prompt: `translate this content into ${targetLanguage}: "${content}"`,
      temperature: 0.5,
      max_tokens: 2048,
      n: 1,
      stop: '\\n',
      model: 'text-davinci-003',
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
      logprobs: 10,
    }),
  });

  const data = await response.json();
  // const data = await response;
  if (!response.ok) {
    console.log(response);
    throw new Error(data.error || 'Error.');
  }
  console.log(data);

  let res = data.choices[0].text.trim();
  if (res[0] === `"` && res[res.length - 1] === `"`) {
    res = res.slice(1, -1);
  }
  return res;
};

export default getResponse;
