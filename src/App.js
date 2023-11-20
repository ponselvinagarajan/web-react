import logo from './logo.svg';
import './App.css';
import NavList from './component/nav/nav'
import Banner from './component/Banner/banner'
import ThirdSec from './component/third sec/Third sec'
import Shop from './component/fourth sec/Shop'
import Detail from './component/fifth sec/detail'




function App() {
  return (
    <div className="App">
        <NavList />
        <Banner />
        <ThirdSec />
        <Shop />
        <Detail />
    </div>
  )
}

export default App;
