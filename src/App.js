import logo from './logo.svg';
import './App.css';


function Kontak({nama, mobile, email}) {
  return(<><p>Nama : {nama}, Mobile : {mobile}, email : {email}</p></>)
}

function App() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <h1 className="title_web">Bootcamp batch 3</h1>
        <p className="Nama_lengkap">Adrian Miftahul Haq</p>
        <p>---- Contacts ----</p>
        <Kontak nama="Adrian" mobile="089656104174" email="adrianmiftahul@gmial.com"/>
        <Kontak nama="Sinta" mobile="081234643536" email="sinta123@gmial.com"/>
        <Kontak nama="Jojo" mobile="081256443536" email="jojo34@gmial.com"/>
      </header>
    </div>
  );
}

export default App;
