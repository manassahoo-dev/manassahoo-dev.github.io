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
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}
