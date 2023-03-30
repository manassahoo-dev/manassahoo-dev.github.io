import { google } from 'googleapis';

const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
});

export default async (req, res) => {
  const { method, query } = req;

  // Handle different API calls based on the HTTP method and query parameters
  switch (method) {
    case 'GET':
      if (query.playlistId) {
        // Fetch videos in a playlist
        const { data } = await youtube.playlists.list({
          part: 'localizations',
          // playlistId: query.playlistId,
          channelId: 'UC5WO7o71wvxMxEtLRkPhiQQ',
          maxResults: 100,
        });

        res.status(200).json(data.items);
      } else if (query.videoId) {
        // Fetch details of an individual video
        const { data } = await youtube.videos.list({
          part: 'snippet',
          id: query.videoId,
        });

        res.status(200).json(data.items);
      } else if (query.channelId) {
        // Fetch details of a channel
        const { data } = await youtube.channels.list({
          part: 'snippet',
          id: query.channelId,
        });

        res.status(200).json(data.items);
      } else {
        res.status(400).send('Invalid query parameters');
      }
      break;
    default:
      res.status(405).send(`Method ${method} Not Allowed`);
      break;
  }
};
