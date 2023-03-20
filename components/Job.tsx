import { Card, Grid, Image, Link, Text } from '@geist-ui/core';

export default function Job() {
  const list = [
    {
      name: 'startup.jobs',
      link: 'https://startup.jobs',
      description: `Startup Jobs Help shape the future by joining one of the fastest growing technology startups.`,
    },
    {
      name: 'remoteok.com',
      link: 'https://remoteok.com',
      description: ``,
    },
    {
      name: 'himalayas.app',
      link: 'https://himalayas.app/jobs',
      description: `The remote job board you'll actually enjoy using`,
    },
    {
      name: 'weworkremotely.com',
      link: 'https://weworkremotely.com',
      description: `We Work Remotely is the largest remote work community in the world. With over 4.5M visitors, WWR is the number one destination to find and list incredible remote jobs.`,
    },
    {
      name: 'workingnomads.com',
      link: 'https://workingnomads.com/jobs',
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
      name: 'jobboardsearch.com',
      link: 'https://jobboardsearch.com',
      description: `Hand curated list of 424 job boards😀`,
    },
    {
      name: 'toptal.com',
      link: 'https://toptal.com',
      description: `Hire the Top 3% of Freelance Talent®`,
    },
    {
      name: 'upwork.com',
      link: 'https://upwork.com',
      description: `Hire the Top 3% of Freelance Talent®`,
    },
    {
      name: 'fiverr.com',
      link: 'https://fiverr.com',
      description: `Find the perfect freelance services for your business`,
    },
    {
      name: 'flexjobs.com',
      link: 'https://flexjobs.com',
      description: `The #1 job site to find remote jobs - no ads, scams, or junk. Find your next flexible, hybrid, or work from home job.`,
    },
    {
      name: 'remotive.com',
      link: 'https://remotive.com',
      description: `Find your dream remote job without the hassle`,
    },
    {
      name: 'justremote.co',
      link: 'https://justremote.co',
      description: `Remote Jobs That Fit Your Life`,
    },
    {
      name: 'dynamitejobs.com',
      link: 'https://dynamitejobs.com',
      description: `Find Your Next Remote Job Today.`,
    },
    {
      name: 'remocate.app',
      link: 'https://remocate.app',
      description: `Find a job and work remotely from anywhere or relocate to your dream country`,
    },
    {
      name: 'remotely.jobs',
      link: 'https://www.remotely.jobs',
      description: `Remote Jobs That Fit Your Life`,
    },
    {
      name: 'remotehunt.com',
      link: 'https://remotehunt.com',
      description: `Remote Jobs That Fit Your Life`,
    },
  ];
  return (
    <Grid.Container gap={2} justify='center'>
      {list.map((job, index) => (
        <Grid xs={12} sm={8} lg={6}>
          <Card shadow>
            <Link href={job.link} target='_blank'></Link>
            <Image
              src={`assets/${job.name}.png`}
              height='auto'
              width='100%'
              alt={job.name}
              draggable={false}
            />
            <Text h5 margin={0}>
              {job.name}
            </Text>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
