import React from 'react';

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
  ];
  return (
    <div>
      Job
      {list.map((job, index) => (
        <div key={index} className=''>
          <hr />
          <a href={job.link} target='_blank' className='link active'>
            <img
              height='16'
              width='16'
              src={`http://www.google.com/s2/favicons?domain=${job.link}`}
            />

            {job.name}
          </a>
          <p className='font-thin'>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
