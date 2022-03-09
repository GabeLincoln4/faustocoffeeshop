import React, {useEffect} from 'react';
import {Route, Link} from "react-router-dom";
import Home from "./Home.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
