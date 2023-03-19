import { useEffect, useState } from 'react';
import axios from 'axios';

const VideoDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${videoId}&key=AIzaSyDo60lI_7Ydg8eakZ9wqefn-1EVpm0WV4M&part=snippet`
      );
      setVideoDetails(response.data.items[0]);
    };
    getVideoDetails();
  }, [videoId]);

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const { title, description, thumbnails } = videoDetails.snippet;
  const thumbnailUrl = thumbnails.default.url;

  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnailUrl} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default VideoDetails;
