

import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div className="App flex flex-col justify-between h-screen">
    <Header/>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/home/:id' element={<Details/>}/>
      </Routes>
         <Footer></Footer>
    </div>
  );
}

export default App;
