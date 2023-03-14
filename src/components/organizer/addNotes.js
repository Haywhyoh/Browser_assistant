import { useState } from  'react';

export default function AddNote() {
  const [note, setNote] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title <br></br>
        <input type="text"/>
        </label> <br></br>
        <label>Write Note: 
        <textarea value={note} onChange={(e) => setNote(e.target.value)} cols={40} rows={15} defaultValue="Paste some notes"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}