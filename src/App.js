import React,{lazy,Suspense} from 'react';
import './App.css';
import Loader from './components/loader';
import Images from './assets/images';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
const Cards = lazy(()=>import('./components/cards'));
const LandingPage = lazy(()=>import('./components/websiteHeader'));
const About = lazy(()=>import('./components/about'));
const Gallery = lazy(()=>import('./components/gallery'));
const Team = lazy(()=>import('./components/team'));
const Footer = lazy(()=>import('./components/footer'));
const Dev_team = lazy(()=>import('./components/Dev_team'));

function App() {
  const eventInfo =[
    {dataImage : `${Images.MonoActPic}` , header : 'Mono Act', description : 'In a monoact, it\'s just you - acting, reacting, and unraveling a scene through a solo monologue. Imagine the intensity of being the sole storyteller, where every emotion, every word is magnified. Captivate the audience with your presence as you embody characters, thoughts, and feelings.' , id : 1},
    {dataImage : `${Images.NukkadPic}` , header : 'Street Act', description : 'Imagine the deepest messages delivered through simple, raw acting. That\'s Nukkad - where the streets become our stage. Join us in this unique form of theater, where powerful stories meet outdoor spaces, creating unforgettable experiences for all.' , id : 2},
    {dataImage : `${Images.StageActPic}` , header : 'Stage Act', description : 'Unlike longer plays with multiple acts, a one-act play is a concentrated burst of drama that packs a punch in a single breath. Dive into a world where every word, every moment matters - where storytelling is distilled to its purest form.' , id : 3},
    {dataImage : `${Images.MimesPic}` , header : 'Mimes', description : 'Silent tales sculpted by movement, Mimes are poetry without words. Emotions dance, stories unfold, all in the elegant language of gestures. Watch as invisible walls and tangible joys come alive, speaking volumes in silence. A mesmerizing art that transcends language, Mime paints stories on the canvas of imagination.' , id : 4}
  ];

  return (
      <div className="Jazbaat">
        <Router>
          <Routes>
            <Route path="/dev_team" element={<Suspense fallback={<Loader/>}><Dev_team/></Suspense>} />
            <Route
              path="/"
              element={<Suspense fallback={<Loader/>}><LandingPage/>
              <About/>
              <Cards eventInfo={eventInfo} />
              <Gallery/>
              <Team/>
              <Footer/>
              </Suspense>}
            />
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;