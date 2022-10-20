import { useState } from 'react';
import './App.css';
//import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import {
  okBtn,
  successIcon,
} from "./Utilis/SweetCommonMsg";

function App() {

const handleSubmit = (event) => {
    swal({
            text: "Question Added Successfully",
            icon: successIcon,
            button: okBtn,
        });
    };

  const [formFields, setFormFields] = useState([
    { name: '', age: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  //submit
  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }
    //Add
  const addFields = () => {
    let object = {
      name: '',
      age: ''
    }

    setFormFields([...formFields, object])
  }
  //Remove
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  const navigate = useNavigate();
  return (
    <div className="register-form">
      <header>
        <h1>Question</h1>
      </header>
      <input
          id="question"
          class="form-field"
          type="text"
          placeholder="Question Title"
          name="questionTitle" required
        />
        <header>
        <h2>Options</h2>
      </header>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
          
            // Option
            <div key={index}>
              <input className="checkmark" type="checkbox" />
              <input
                className='form-subfield'
                placeholder='Option'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <button className="add" onClick={addFields}>+</button>
              <button className="remove" onClick={() => removeFields(index)}>x</button>
            </div>
          )
        })}
      </form>
      <div>
          <button class="buttons" type="submit" value="Submit" onClick={handleSubmit}>Submit</button>           
          <button class="buttons" type="cancel" onClick={() => navigate("/")} >Cancel</button>
          </div>
    </div>
  );
}

export default App;