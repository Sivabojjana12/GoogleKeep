import './App.css';
import Mainheader from './note/mainheader';
import Sidebar from './note/sidebar';

function App() {
  return (
    <div className="App">
      <div className="Mainheader">
        <Mainheader />
        <hr sx={{height: '0px'}}/>
      </div>
      <div className='sidebar'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
