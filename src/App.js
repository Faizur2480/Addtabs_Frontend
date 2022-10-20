import React from "react";
import "./index.css";
import "./index.js";
import "./AddQuestion";
import { useNavigate } from "react-router-dom";

export default function App() { 
  
const navigate = useNavigate();
  return (
    <div>

      <form class="register-form">
          <div className="box">
          </div>
        <div>
    <section classname="accordion">
      <div classname="content">
      </div>
    </section>
  </div>
  <div />
        <button class="butt-ons" 
                type="Add"
                onClick={() => navigate("/addQuestion")}
                >
           Add Question
        </button>
      </form>
    </div>
  );
}