
import { Container, CssBaseline, Grid, Stack, Typography } from "@mui/material";
import Navbar from "./componants/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./componants/playlist-card-item";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

const HomePage = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems='stretch' >
          {playlistArray.map((item) => (
            <Grid item xs={12} md={4} lg={4} mb={2}>
              <PlaylistCardItem

                key={item.playlistId}
                playlistId={item.playlistId}
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
  );
};

const PlayerPage = ({playlists}) => {

  const {playlistId}=useParams();
  const current =playlists[playlistId];
  console.log('Current Course',current);
  if(!current) return;
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 16 }} >
      <Typography variant="h2" align="center">{current.playlistTitle}
      </Typography>
      <Typography variant="body2" >{current.playlistDescription}
      </Typography>
    </Container>
  );
};


const NotFound = () => (
  <Container maxWidth={"lg"} sx={{ marginTop: 16 }} ali>
    <Typography variant="h2" align="center">404 Page Not Found
    </Typography>
  </Container>
)


function App() {
  const { playlists, error, getPlaylistById } = usePlaylists();
  const playlistArray = Object.values(playlists);
  return (

    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route
          path='/'
          element={<HomePage playlistArray={playlistArray} />}
        />
        <Route path='/player/:playlistId' element={<PlayerPage playlists={playlists}/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>


    </BrowserRouter>
  );
};
export default App;