import React from 'react';
import './App.css';
import { BgBlob } from './components/bgBlur';
import { Cards } from './components/cards';
import { EventsHead } from './components/sectionHead';
import { LandingPage } from './components/websiteHeader';
import { About } from './components/about';
import MonoActPic from '../src/assets/images/eventMonoact.JPG';
import NukkadPic from '../src/assets/images/eventNukkad.JPG';
import StageActPic from '../src/assets/images/eventStage.JPG';
import MimesPic from '../src/assets/images/eventMimes.jpg';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

function App() {
  const [eventInfo,setEventInfo] = React.useState([
    {dataImage : `${MonoActPic}` , header : 'Mono Act', description : 'In a monoact, it\'s just you - acting, reacting, and unraveling a scene through a solo monologue. Imagine the intensity of being the sole storyteller, where every emotion, every word is magnified. Captivate the audience with your presence as you embody characters, thoughts, and feelings.' , id : 1},
    {dataImage : `${NukkadPic}` , header : 'Street Act', description : 'Imagine the deepest messages delivered through simple, raw acting. That\'s Nukkad - where the streets become our stage. Join us in this unique form of theater, where powerful stories meet outdoor spaces, creating unforgettable experiences for all.' , id : 2},
    {dataImage : `${StageActPic}` , header : 'Stage Act', description : 'Unlike longer plays with multiple acts, a one-act play is a concentrated burst of drama that packs a punch in a single breath. Dive into a world where every word, every moment matters - where storytelling is distilled to its purest form.' , id : 3},
    {dataImage : `${MimesPic}` , header : 'Mimes', description : 'Silent tales sculpted by movement, Mimes are poetry without words. Emotions dance, stories unfold, all in the elegant language of gestures. Watch as invisible walls and tangible joys come alive, speaking volumes in silence. A mesmerizing art that transcends language, Mime paints stories on the canvas of imagination.' , id : 4}
  ])

  return (
      <div className="Jazbaat">
        <Router>
        <Routes>
          <Route
            path="/"
            element={[<LandingPage/>,
            <About/>,
            <EventsHead/>,
            <Cards eventInfo={eventInfo}/>,
            <BgBlob/>]}
          />
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;