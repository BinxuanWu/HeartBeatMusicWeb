import Header from "./Header"
import Body from "./Body";
import Footer from "./Footer"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>

        <Route path="/HeartBeatMusicWeb" 
          element={<>
            <Header/>
            <Body/>
            <Footer/></>
          }/>

        <Route path="/signin" 
          element={<SignIn/>}/>

        <Route path="/signup" 
          element={<SignUp/>}/>

        
      </Routes>
    </BrowserRouter>

      
      
    </div>
  );
}

export default App;
