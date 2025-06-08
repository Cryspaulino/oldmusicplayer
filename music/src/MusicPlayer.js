import { useState } from "react";

const playlists = {
  get_happy_yesoryes: [
    { title: "Be Kind", videoId: "ePao0cTGG-o"},
    { title: "Eastside", videoId: "KFof8aaUvGY"}
  ],
  edm:[
    { title: "Mind", videoId: "fDrTbLXHKu8"},
    { title: "So long", videoId: "WhwEWuSTLD4"}

  ],
  chillmusic: [
    { title: "Back to you", videoId: "ulNswX3If6U"},
    { title: "Mind over matter", videoId: "buvWBOZTfdc"}
  ],
  // happymusic: [
  //   { title: "Be Kind", videoId: "ePao0cTGG-o"}
  // ],
  DRparty: [
    { title: "Volando", videoId: "YTFfzB3W240"},
    { title: "La curita", videoId: "qWK_2uMkSmU"}
  ]
};

function MusicPlayer() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleCLick()
  {
    setCount(count + 1);
  }

  function handleSearch()
  {
    const name = search.toLowerCase();
    const matches = [];

    Object.entries(playlists).forEach(([playlistName, songs]) => {
      songs.forEach((song) => {
        if (song.title.toLowerCase().includes(name)) {
          matches.push({ ...song, playlist: playlistName });
        }
      });
    });

    setResults(matches);
  };

  // function closeVideo()
  // {
  //   if (handleCLick)
  //     <p></p>
  // }

  return (

    // ADDING RANDOM HAPPY SONGS

      <div className="songs">

        <main>
          {/* <h1 className="trendband">Trending songs</h1> */}
          {/* <img src="/headphones.avif" alt="placeholder" /> */}
          {/* <h2>Just chill</h2> */}

          <input className="input" type="text" value={search} placeholder="Song title" onChange={(e) => setSearch(e.target.value)} />

          <button onClick={handleSearch}>Find Song</button>

          <div className="result">
            {results.length > 0 ? (
              <ul>
                {results.map((song, index) => (
                  <ul key={index}>{song.title}(from {song.playlist})</ul>
                ))}
              </ul>
            ) : (
              search && <p>Sorry! You haven't added that song</p>
            )}
          </div>


          <div className= "playlists">
            {Object.entries(playlists).map(([playlistName, songs]) => (
            <div key={playlistName}>
              <h3>{playlistName}</h3>
              <ul>
                {songs.map((song, index) => (
                <ul key={index}>
                  <button className="random-button" 
                  onClick={() => {setCurrentVideo(song.videoId); handleCLick();}}>
                    {song.title}
                  </button>
                </ul>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="video">
          {currentVideo && (
            <div style={{ marginTop: "50px" }}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="YouTube player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <p>You have played {count} songs!</p>
          <button className="notvideo" onClick={() => setCurrentVideo(null)} >Close Video</button>
          </div>
      </main>
      <footer>
        <h4>@Crystal Paulino | My music</h4>
      </footer>
    </div>
  );
}

export default MusicPlayer;


