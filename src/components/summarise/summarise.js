import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

export default function Summarise() {
  const configuration = new Configuration({
    apiKey:'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',
    });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState('');
  const [title,setTitle] = useState('');
  const [result, setResult] = useState('');
  

  function handleSubmit(e) {
    e.preventDefault()
  }
  async function getResponse () {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `Summarize this text + ${prompt}`}],
    });
    const result = completion.data.choices[0].message.content
    return setResult(result);
    
    console.log(result)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} id="text_form">
        <textarea value= {prompt} cols={40} rows={10} id="input-title" onChange={(e) => { setPrompt(e.target.value)}}/>
        <button type='submit' onClick={() => {const form = document.querySelector('#text_form')
                                              form.style.display = "none";
                                              getResponse()}}>Submit</button>
      </form>
      <div>{result}</div>
    </div>
  )
}