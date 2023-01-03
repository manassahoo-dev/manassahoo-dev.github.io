import './App.css';

function App() {
  const data = {
    title: '',
    result: [
      {
        website: 'https://soovle.com/',
      },
    ],
  };
  return (
    <div className='App'>
      <h1>Hey, I'm Manas 👋</h1>
      <h3>Front End Developer based in Hyderabad, India</h3>

      <button>React Js</button>
      <button>Angular</button>
      <button>JavaScript</button>
      <button>TypeScript</button>
      <button>Html</button>

      <footer>Manas Sahoo</footer>
    </div>
  );
}

export default App;
