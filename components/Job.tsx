import { Button, Card, Image, Link, Text } from '@geist-ui/core';

export default function Job() {
  const list = [
    {
      name: 'startup.jobs',
      link: 'https://startup.jobs',
      description: `Startup Jobs Help shape the future by joining one of the fastest growing technology startups.`,
    },
    {
      name: 'remoteok',
      link: 'https://remoteok.com',
      description: ``,
    },
    {
      name: 'himalayas',
      link: 'https://himalayas.app/jobs',
      description: `The remote job board you'll actually enjoy using`,
    },
    {
      name: 'WeWorkRemotely',
      link: 'https://weworkremotely.com',
      description: `We Work Remotely is the largest remote work community in the world. With over 4.5M visitors, WWR is the number one destination to find and list incredible remote jobs.`,
    },
    {
      name: 'Working Nomads',
      link: 'https://www.workingnomads.com/jobs',
      description: `Remote jobs for Digital Working Nomads.
      Work remotely from your home or places around the world.`,
    },
    {
      name: 'angel.co',
      link: 'https://angel.co',
      description: `Remote jobs for Digital Working Nomads.
      Work remotely from your home or places around the world.`,
    },
    {
      name: 'remote.co',
      link: 'https://remote.co',
      description: `All Things Remote Work`,
    },
    {
      name: 'JobBoardSearch',
      link: 'https://jobboardsearch.com',
      description: `Hand curated list of 424 job boards😀`,
    },
    {
      name: 'Toptal',
      link: 'https://www.toptal.com',
      description: `Hire the Top 3% of Freelance Talent®`,
    },
    {
      name: 'upwork',
      link: 'https://www.upwork.com',
      description: `Hire the Top 3% of Freelance Talent®`,
    },
    {
      name: 'fiverr',
      link: 'https://www.fiverr.com',
      description: `Find the perfect freelance services for your business`,
    },
    {
      name: 'Flexjobs',
      link: 'https://www.flexjobs.com',
      description: `The #1 job site to find remote jobs - no ads, scams, or junk. Find your next flexible, hybrid, or work from home job.`,
    },
    {
      name: 'remotive',
      link: 'https://remotive.com',
      description: `Find your dream remote job without the hassle`,
    },
    {
      name: 'JustRemote',
      link: 'https://justremote.co',
      description: `Remote Jobs That Fit Your Life`,
    },
    {
      name: 'dynamitejobs',
      link: 'https://dynamitejobs.com',
      description: `Find Your Next Remote Job Today.`,
    },
    {
      name: 'remocate',
      link: 'https://www.remocate.app',
      description: `Find a job and work remotely from anywhere or relocate to your dream country`,
    },
    {
      name: 'remotely',
      link: 'https://www.remotely.jobs',
      description: `Remote Jobs That Fit Your Life`,
    },
    {
      name: 'remotehunt',
      link: 'https://remotehunt.com',
      description: `Remote Jobs That Fit Your Life`,
    },
  ];
  return (
    <div className='grid grid-cols-4 gap-4'>
      {list.map((job, index) => (
        <div key={index}>
          <Image.Browser url={job.link} anchorProps={{ rel: 'nofollow' }}>
            <Link href={job.link} target='_blank'>
              <Image
                src={`https://puppeteer-screenshot-demo.vercel.app/api/screenshot?page=${job.link}`}
                height='auto'
                width='100%'
                draggable={false}
              />
            </Link>
          </Image.Browser>
        </div>
      ))}
    </div>
  );
}
