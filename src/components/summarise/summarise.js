import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const { Configuration, OpenAIApi } = require('openai');

export default function Summarise () {
  // add your api key
  const neverEver = '';
  const configuration = new Configuration({
    apiKey: neverEver
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const [result, setResult] = useState('Waiting for GPT');

  function handleSubmit (e) {
    e.preventDefault();
  }

  async function getResponse () {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Summarize this text: ${prompt}` }]
    });
    const result = completion.data.choices[0].message.content;
    console.log(result);
    return setResult(result);
  }

  return (
    <div id='summarise_container'>

      <form onSubmit={handleSubmit} id='text_form'>
        <label> Summarise your text:
          <textarea value={prompt} cols={40} rows={10} onChange={(e) => { setPrompt(e.target.value); }} />

        </label>
        <button
          type='submit' onClick={() => {
            getResponse();
            const form = document.querySelector('#text_form');
            const save = document.querySelector('#save_button');
            const back = document.querySelector('#back');
            const titleLabel = document.querySelector('#titleLabel');
            const res = document.querySelector('#res');
            save.style.display = 'block';
            save.style.display = 'block';
            form.style.display = 'none';
            titleLabel.style.display = 'block';
            res.style.display = 'block';
            back.style.display = 'block';
          }}
        >Submit
        </button>
      </form>
      <div id='titleLabel' style={{ display: 'none' }}>
        <label>Give a title:
          <textarea value={title} cols={40} rows={1} id='input-title' onChange={(e) => { setTitle(e.target.value); }} />
        </label>
      </div>
      <div id='res' style={{ display: 'none' }}>{result}</div>

      <div style={{ display: 'flex' }}>
        <button
          id='save_button' style={{ display: 'none' }} onClick={() => {
            if (result) {
              const titleDom = document.querySelector('#input-title');
              const save = document.querySelector('#save_button');
              titleDom.style.display = 'block';
              const title_value = titleDom.value;
              const key = nanoid();
              const note = { title: title_value, content: result, id: key };
              const note_value = JSON.stringify(note);
              localStorage[key] = note_value;
              save.style.display = 'none';
              alert('Saved Successfully!');
            }
          }}
        >Save Chat
        </button>
        <Link to='/organizer'>
          <button id='back' style={{ display: 'none' }}>Back</button>
        </Link>
      </div>
    </div>
  );
}
