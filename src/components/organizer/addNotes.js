import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './organizer.css';

export default function AddNote () {
  const [note, setNote] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
  }
  return (
    <div className='note_box'>
      <form onSubmit={handleSubmit}>
        <label>
          Title <br />
          <input type='text' id='note_title' />
        </label>{' '}
        <br />
        <label>
          Write Note:
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            cols={40}
            rows={10}
            id='note_value'
          />
        </label>
        <Link to='/organizer'>
          <button type='submit' value='Submit' id='set_note' onClick={setNewNote}>
            Save
          </button>
        </Link>

        <Link to='/organizer'>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

function setNewNote () {
  const title = document.querySelector('#note_title').value;
  const content = document.querySelector('#note_value').value.toString();
  const key = nanoid();
  const note = { title, content, id: key };
  const note_value = JSON.stringify(note);
  localStorage[key] = note_value;
  console.log(note_value);
}
