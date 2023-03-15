import { createContext, useState } from 'react';
import Organizer from './organizer';
export const NotesContext = createContext(null);

export function NotesContextProvider({children}) {
  let temp = [];
  for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let items = JSON.parse(localStorage.getItem(key));
    temp.push({...items});
}

const [ideas, setIdeas] = useState(temp);

  return (
      <NotesContext.Provider value={{ideas, setIdeas}}>
          <Organizer />
      </NotesContext.Provider>
  );
} 
