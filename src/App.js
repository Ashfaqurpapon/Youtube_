
import { CssBaseline } from "@mui/material";
import Navbar from "./componants/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./componants/playlist-card-item";
function App() {
 const {playlists,error,getPlaylistById}=usePlaylists();
 const playlistArray=Object.values(playlists);
 
 
 return (
   <>
      <CssBaseline />
      <div>
       <Navbar getPlaylistById={getPlaylistById} />
       {playlistArray.length >0 &&(
        playlistArray.map((item)=><PlaylistCardItem 
        
        key={item.id}
        playlistThumbnail={item.playlistThumbnail}
        playlistTitle={item.playlistTitle}
        channelTitle={item.channelTitle}
        />)
       )}
      </div>

   </>
  );
};

export default App;
