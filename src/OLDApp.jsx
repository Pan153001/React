import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Counter';

  function App() {
    const helloData = [
      {name: 'Pan', message: 'Hi'},
      {name: 'Tim', message: 'Hello'}
    ];


  return (
    <div className='App'>
      <Counter/>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}
      <Contact email="Pan@gmail.com" phone="999-999-999"/>
    </div>
  )
}

export default App;


