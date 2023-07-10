// import fetch from 'isomorphic-unfetch';

const getResponse = async (content) => {
  console.log('content:' + content);
  const response = await fetch('https://api.openai-proxy.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `Output the corrected version of this statement: "${content}"`,
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
