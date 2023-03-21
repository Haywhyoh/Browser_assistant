import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./organizer.css";

export default function AddNote() {
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="note_box">
      <form onSubmit={handleSubmit}>
        <label>
          Title <br></br>
          <input type="text" id="note_title" />
        </label>{" "}
        <br></br>
        <label>
          Write Note:
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            cols={20}
            rows={10}
            id="note_value"
          />
        </label>

        <button type="submit" value="Submit" id="set_note" onClick={setNewNote}>
          Save
        </button>
        <Link to={"/organizer"}>
          <button>Back</button>
        </Link>

      </form>
    </div>
  );
}

function setNewNote() {

<<<<<<< HEAD
 
}
=======
  const title = document.querySelector("#note_title").value;
  const content = document.querySelector("#note_value").value;
  const key = nanoid();
  const note = { title, content, id: key };
  const note_value = JSON.stringify(note);
  localStorage[key] = note_value;
  console.log(note_value);
}

>>>>>>> 95a48ef92bc976cf9460e378a77937430e8d7a83
