import Head from 'next/head';
import Job from '../components/Job';
import {
  Feed,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from '../components/youtube';
export default function Home() {
  return (
    <>
      <Head>
        <title>Manas Sahoo - Portfolio</title>
        <meta name='description' content='Manas Sahoo - Portfolio' key='desc' />
      </Head>
      <div>
        <Job />
        <Feed />
        <VideoDetail />
      </div>
    </>
  );
}
