import { useState } from 'react';
import './App.css';
import { BgBlob } from './components/bgBlur';
import {Cards} from './components/cards';
import { EventsHead } from './components/sectionHead';
import MonoActPic from '../src/assets/images/eventMonoact.JPG';
import NukkadPic from '../src/assets/images/eventNukkad.JPG';
import StageActPic from '../src/assets/images/eventStage.JPG';
import MimesPic from '../src/assets/images/eventMimes.jpg';

function App() {
  const [eventInfo,setEventInfo] = useState([
    {dataImage : `${MonoActPic}` , header : 'Mono Act', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque eius magni a inventore aut expedita, voluptates tenetur laudantium nesciunt, consequatur ut vero, cupiditate id sapiente cum incidunt dolorem consectetur!' , id : 1},
    {dataImage : `${NukkadPic}` , header : 'Street Act', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque eius magni a inventore aut expedita, voluptates tenetur laudantium nesciunt, consequatur ut vero, cupiditate id sapiente cum incidunt dolorem consectetur!' , id : 2},
    {dataImage : `${StageActPic}` , header : 'Stage Act', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque eius magni a inventore aut expedita, voluptates tenetur laudantium nesciunt, consequatur ut vero, cupiditate id sapiente cum incidunt dolorem consectetur!' , id : 3},
    {dataImage : `${MimesPic}` , header : 'Mimes', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque eius magni a inventore aut expedita, voluptates tenetur laudantium nesciunt, consequatur ut vero, cupiditate id sapiente cum incidunt dolorem consectetur!' , id : 4}
  ])
  return (
    <div className="Sections">
        <EventsHead/>
        <Cards eventInfo={eventInfo}/>
        <BgBlob/>
    </div>
  );
}

export default App;
