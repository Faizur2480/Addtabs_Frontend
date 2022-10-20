import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import AddQuestion from './AddQuestion';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element ={<App/>}/>
      <Route path="/addQuestion" element ={<AddQuestion/>}/>
    </Routes>
  </Router>,
);


