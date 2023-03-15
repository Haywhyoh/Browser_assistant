import { Routes, Route} from 'react-router-dom';
import Popup from "./components/popup/popup";
import Summarise from "./components/summarise/summarise";
import Askchatgpt from "./components/askChatgpt/askChatgpt";
import Utubevid from "./components/utubeVid/utubevid";
import Screenshot from "./components/screenshot/screenshot";
import Games from './components/Games/games';
import AddNote from './components/organizer/addNotes';
import { NotesContextProvider } from './components/organizer/Ideacontext';
function App() {
    return (
    <div style={{width: "350px",
                backgroundColor: "lightblue",
                height: "500px"}}>
      <Popup />
      <div>
        <Routes>
          <Route path='/' element={<Popup />} />
          <Route path='/summarise' element={<Summarise />} />
          <Route path='/askchatgpt' element={<Askchatgpt />} />
          <Route path='/organizer' element={<NotesContextProvider/>}/>
          <Route path='/screenshot' element={<Screenshot />} />
          <Route path='/utubevid' element={<Utubevid />} />
          <Route path='/games' element={<Games />} />
          <Route path='/add' element={<AddNote />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;