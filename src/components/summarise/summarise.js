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
     }
  return (
    <div id="summarise_container">
      <form onSubmit={handleSubmit} id="text_form">
        <textarea value= {prompt} cols={40} rows={10} id="input-title" onChange={(e) => { setPrompt(e.target.value)}}/>

        <button type='submit' onClick={() => {const form = document.querySelector('#text_form');
                                              const save = document.querySelector("#save_button");
                                              form.style.display = "none";
                                              getResponse();
                                              save.style.display="block";
                                              }}>Submit</button>
      </form>
      <div>{result}</div>
      <button id="save_button" style={{display: "none"}}>Save Text</button>
    </div>
  )
}
