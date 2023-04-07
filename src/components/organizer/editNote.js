import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditNote () {
  const location = useLocation();
  const key = location.state.id;
  const idea = localStorage.getItem(key);
  const parsedIdea = JSON.parse(idea);
  const [content, setNote] = useState(parsedIdea.content);
  const [title, setTitle] = useState(parsedIdea.title);

  function handleSubmit (e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title <br />
          <input
            type='text'
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            id='note_title'
          />
        </label>{' '}
        <br />
        <label>
          Write Note:
          <textarea
            defaultValue={content}
            onChange={(e) => setNote(e.target.value)}
            cols={40}
            rows={15}
            id='note_value'
          />
        </label>
        <Link to='/organizer'>
          <button
            type='submit'
            value='Submit'
            id='set_note'
            onClick={() => {
              const title = document.querySelector('#note_title').defaultValue;
              const content =
                document.querySelector('#note_value').defaultValue;
              parsedIdea.title = title;
              parsedIdea.content = content;
              localStorage.setItem(key, JSON.stringify(parsedIdea));
            }}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
