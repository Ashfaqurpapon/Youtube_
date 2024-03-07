import { useEffect } from "react";
import getPlaylist from "./api";
import usePlaylists from "./hooks/usePlaylists";


function App() {

  const {getPlaylistById,playlists,error,loading}=usePlaylists();

  useEffect(()=>{
    getPlaylistById('PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS');
  },[]);
 console.log(playlists);


  return (
    <div className="App">0
      <h1>Hellow world</h1>
    </div>
  );
}

export default App;
