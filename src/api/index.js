import axios from "axios";


const key='AIzaSyCWEK94JDa476VEtlNKcL7nDBiY4zw-eMs';
const getPlaylist =async (playlistId,pageToken='',result=[]) =>{
   const URL=`https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2CcontentDetails%2Csnippet%20&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`;
  
  const {data}= await axios.get(URL);
  
   result =[...result, ...data.items];

  
  if(data.nextPageToken){
    result= getPlaylist(playlistId,data.nextPageToken,result);
  }
  return result;

};
export default getPlaylist;