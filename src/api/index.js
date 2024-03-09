import axios from "axios";



const key = process.env.REACT_APP_NOT_SECRET_CODE;
const getPlaylistItem = async (playlistId, pageToken = '', result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2CcontentDetails%2Csnippet%20&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];


  if (data.nextPageToken) {
    result = getPlaylist(playlistId, data.nextPageToken, result);
  }
  return result;

};



const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`



  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);

  const { 
    title:playlistTitle,
    description:playlistDescription,
    thumbnails, 
    channelId, 
    channelTitle,
   } = data?.items[0]?.snippet;

  playlistItems = playlistItems.map((item) => {
    const { title, description, thumbnails: { medium }, } = item.snippet;


    return {

      title,
      description,
      thumbnail: medium,
      contentDetails: item.contentDetails,
    };
  });
 

  return{
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail:thumbnails.default,
    channelId, 
    channelTitle,
    playlistItems,
  }








}
export default getPlaylist;