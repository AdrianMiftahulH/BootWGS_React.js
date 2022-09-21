import logo from './logo.svg';
import './App.css';


function Kontak({nama, posisi}) {
  return(<><p>Nama : {nama}, Posisi : {posisi}</p></>)
}


function App() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <h1>Bootcamp batch 39</h1>
        <p>Adrian Miftahul Haq</p>
        <Kontak nama="Adrian" posisi="peserta"/>
      </header>
    </div>
  );
}

export default App;
