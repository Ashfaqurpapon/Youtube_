
import { CssBaseline } from "@mui/material";
import Navbar from "./componants/navbar";
import usePlaylists from "./hooks/usePlaylists";
function App() {
 const {playlists,error,getPlaylistById}=usePlaylists();
  console.log(playlists);
  console.log('error',error);
 
 
 return (
   <>
      <CssBaseline />
      <div>
       <Navbar getPlaylistById={getPlaylistById} />
      </div>

   </>
  );
};

export default App;
