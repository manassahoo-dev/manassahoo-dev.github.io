export default function Jobs() {
  const list = [
    {
      link: 'https://angel.co',
      title: 'angel.co',
      description: ''
    },
    {
      link: 'https://dice.com',
      title: 'Find Jobs in Technology',
      description: `Search 70,000+ job openings from tech's hottest employers. Salary estimations, career path tips and Insights to make your next career move the right one.`
    },
    {
      link: 'https://nodesk.co',
      title: 'NoDesk - Where Everyone Works Remote',
      description:
        'Browse and apply to the best new remote jobs at leading remote companies and startups for free. Join hundreds of companies that use NoDesk to build their remote teams.'
    },
    {
      link: 'https://remotive.com',
      title: 'Remote Jobs in Programming, Support, Design and more',
      description: `Find the best remote job, working as a developer, customer support rep, product or sales professional... See openings in our categories. All jobs are hand curated and allow remote work. We serve the best work from home jobs in popular categories. Talent is everywhere, work remotely today!`
    },
    {
      link: 'https://www.flexjobs.com',
      title: 'FlexJobs: The Best Remote Jobs, Work from Home Jobs & More',
      description: `The #1 job site for hand-screened remote jobs (work from home jobs) since 2007. No ads, scams or junk. Discover a better online job search with FlexJobs!`
    },
    {
      link: 'https://remoteok.com',
      title:
        'Remote Jobs in Programming, Design, Sales, and more #OpenSalaries',
      description: `Looking for a remote job? Remote OK® is the #1 Remote Job Board and has 294,142+ remote jobs as a Developer, Designer, Copywriter, Customer Support Rep, Sales Professional, Project Manager and more! Find a career where you can work remotely from anywhere.`
    },
    {
      link: 'https://trulyremote.co',
      title: 'Truly Remote: Work from Anywhere',
      description: `TrulyRemote.co helps you find the right remote job and hire the most diverse talent across the globe.`
    },
    {
      link: 'https://www.weworkremotely.com',
      title:
        'We Work Remotely: Remote jobs in design, programming, marketing and more',
      description: `Find the most qualified people in the most unexpected places: Hire remote! We Work Remotely is the best place to find and list remote jobs that aren't restricted by commutes or a particular geographic area. Browse thousands of remote work jobs today.`
    },
    {
      link: 'https://remote.co',
      title: 'Remote Work: Jobs, Companies & Virtual Teams - Remote.co',
      description: `Remote.co is the definitive remote work job board for online job seekers and companies hiring. Start your remote job search here!`
    },
    {
      link: 'https://justremote.co',
      title: 'Remote Jobs: Design, Marketing, Programming, Writing & More',
      description: `Discover Remote Jobs from around the world. Give up the commute, work remotely and do what you love, daily, from anywhere. Find your perfect remote development, design, sales, or marketing job today.`
    },
    {
      link: 'https://remoteleaf.com',
      title:
        'Remote Leaf | Receive hand-picked remote jobs posted anywhere delivered straight to your inbox',
      description: `Remote Leaf aggregates remote jobs in one organized place from hundreds of remote job boards, company career pages, LinkedIn, Reddit, twitter, Facebook groups, and hacker news hiring.`
    },
    {
      link: 'https://dailyremote.com',
      title: 'Remote Jobs | DailyRemote',
      description: `Looking for a remote job and want to work from home? Apply for top remote jobs in Software Development, Design, Support, Sales, Writing, Product, and Others. Apply now and start telecommuting & working from home today!`
    }
  ]
  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          <a className="m-0 p-0" href={item.link} target="_blank">
            {item.link}
          </a>
          <h6>{item.title}</h6>
          <p className="m-0 p-0">{item.description}</p>
          <hr />
        </div>
      ))}
    </>
  )
}
