import logo from './logo.svg';
import './App.css';
// import SideBar from './Components/SIdeBar';
// import NavBar from './Components/Navbar/NavBar';
// import SearchBar from './Components/SearchBar/SearchBar';

import Table from './Components/Table/Table';
import Portal from './Components/Portal/Portal';
import SideBar from './Components/Sidebar/SideBar';

function App() {
  return (
    <div className="App">
      {/* <SideBar/> */}
      <Portal/>
      {/* <Table/> */}
    </div>
  );
}

export default App;
