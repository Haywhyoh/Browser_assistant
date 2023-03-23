import youtube from './request';
import { useState } from "react";
export default function Utubevid() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const  getVideos = async (searchTerm) => {
      const response = await youtube.get('/search', {
        params: {
          q: searchTerm,
        }
      });
      setVideos(response.data.items);
      console.log(videos)
    }

  return (
    <div>
     <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={search} id="search_val" onChange={(e) => {setSearch(e.target.value)}}/> 
      <button type='submit' onClick={() =>{const searchVal = document.querySelector("#search_val").value; getVideos(searchVal)} } >Search</button>
     </form>

    </div>
  )
}