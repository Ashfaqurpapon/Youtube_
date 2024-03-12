
import { Container, CssBaseline, Grid, Stack } from "@mui/material";
import Navbar from "./componants/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./componants/playlist-card-item";
function App() {
 const {playlists,error,getPlaylistById}=usePlaylists();
 const playlistArray=Object.values(playlists);
 
 
 return (
   <>
      <CssBaseline />
      <Container maxWidth={ "lg"} sx={{marginTop:16}}>
       <Navbar getPlaylistById={getPlaylistById} />
       {playlistArray.length >0 &&(
        <Grid container alignItems='stretch' >
        {playlistArray.map((item)=>(
          <Grid item xs={12} md={4} lg={4} mb={2}>
        <PlaylistCardItem 
        
        key={item.id}
        playlistThumbnail={item.playlistThumbnail}
        playlistTitle={item.playlistTitle}
        channelTitle={item.channelTitle}
        />
      </Grid>
       ))}

       </Grid>
       )
       }
      </Container>

   </>
  );
};
export default App;