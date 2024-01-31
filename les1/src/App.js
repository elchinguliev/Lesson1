import './App.css';
// import Navi from './Navi';
import SlideBar from './SideBar'
import Main from './Main'
import NavBar from './NavBar';



function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
      <SlideBar></SlideBar>
     <Main></Main>
   </div>
  );
}

export default App;
