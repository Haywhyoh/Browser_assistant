import { nanoid } from 'nanoid';
import { useState } from  'react';
import { Link } from 'react-router-dom';

export default function AddNote() {
  const [note, setNote] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title <br></br>
        <input type="text" id="note_title"/>
        </label> <br></br>
        <label>Write Note: 
        <textarea value={note} onChange={(e) => setNote(e.target.value)} cols={40} rows={15}  id='note_value'/>
        </label>
        <Link to={'/organizer'}><input type="submit" value="Submit" id='set_note' onClick={setNewNote}/></Link>
      </form>
    </div>
  )
}

function setNewNote() {
  const title = document.querySelector('#note_title').value;
  const content = document.querySelector('#note_value').value;
  if (title && content) {
    const key = nanoid()
    const note = { title, content, "id":key}
    const note_value  = JSON.stringify(note)
    localStorage[key] = note_value;
  }

  alert("Cannot submit empty note")
 
}