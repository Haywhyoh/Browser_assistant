import { useState } from "react";
import{ nanoid } from "nanoid";
import { Link } from "react-router-dom";

const { Configuration, OpenAIApi } = require("openai");

export default function Summarise() {

  const neverEver = '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';
  const configuration = new Configuration({
    apiKey:neverEver,
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
        <label> Summarise your text: 
        <textarea value= {prompt} cols={40} rows={10} id="input-title" onChange={(e) => { setPrompt(e.target.value)}}/>
        </label>
        <button type='submit' onClick={() => {const form = document.querySelector('#text_form');
                                              const save = document.querySelector("#save_button");
                                              form.style.display = "none";
                                              getResponse();
                                              save.style.display="block";
                                              }}>Submit</button>
      </form>
      <div>{result}</div>
      <button id="save_button" style={{display: "none"}} onClick={() =>{ const title = document.querySelector('#input-title').value.slice(0, 10)
                                                                          const key = nanoid();
                                                                          const note = { title, content: result, id: key };
                                                                          const note_value = JSON.stringify(note);
                                                                          localStorage[key] = note_value;
                                                                          alert("Saved Successfully!")
                                                                        }}>Save Chat</button>
      <Link to={"/organizer"}>
          <button id="back" style={{display: "none"}}>Back</button>
        </Link>
    </div>
  )
}
