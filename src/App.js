import Header from "./Header"
import Body from "./Body";
import Footer from "./Footer"
import SignIn from "./SignIn"
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>

        <Route path="/" 
          element={<>
            <Header/>
            <Body/>
            <Footer/></>
          }/>

        <Route path="/signin" 
          element={<SignIn/>}/>


        
      </Routes>
    </BrowserRouter>

      
      
    </div>
  );
}

export default App;
