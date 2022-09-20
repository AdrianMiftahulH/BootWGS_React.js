import logo from './logo.svg';
import './App.css';

function Kontak({nama, posisi}) {

  return(<><p>nama : {nama}, posisi : {posisi}</p></>)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bootcamp batch 3</h1>
        <p>Adrian Miftahul Haq</p>
        <Kontak nama="Adri" posisi="peserta"/>
      </header>
    </div>
  );
}

export default App;
