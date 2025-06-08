// import logo from './logo.svg';
import './App.css';
import MusicPlayer from './MusicPlayer';
import NodeFetcher from './fetchnode';

function App() {
  return (
    <div className="App">
      <NodeFetcher />
      <header className="App-header">
        {/* <img src="https://www.reddit.com/r/MacMiller/comments/tebzgj/whats_mac_most_chill_song_tryna_to_just_have_a/" alt="placeholder" /> */}
        <h2>Just chill</h2>
      </header>
      <main>
        <MusicPlayer />
      </main>
    </div>
  );
}

export default App;
