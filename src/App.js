
import './App.css';
import Video from './components/Video';
import mp4VideoFile from './videos/jumbotron.mp4';
import TitleText from './components/TitleText';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="jumbotron-video">
          
          <Video  mp4Src={mp4VideoFile}/>
          <TitleText />
          
        </div>
        <button className='shop-now'>Shop</button>
      </header>
    </div>
  );
}

export default App;
