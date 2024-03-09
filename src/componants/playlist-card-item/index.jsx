
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';





const PlaylistCardItem=({ playlistThumbnail, playlistTitle, channelTitle })=> {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                image={playlistThumbnail.url}
                alt={playlistTitle}
            />
            <CardContent>
                <Typography variant="h6" color="text.primary">
                    {playlistTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {channelTitle}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button>
                 Play
                </Button>
            </CardActions>
        </Card>
    );
}
export default PlaylistCardItem;