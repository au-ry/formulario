import React, {useState} from "react";

const Form = () => {
  let [nameValue, setNameValue] = useState("");
  let [emailValue, setEmailValue] = useState("");
  let [genderValue, setGenderValue] = useState("");

  function getData() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let selectedOption = document.querySelector('input[name="options"]:checked');

    setNameValue(name.value);
    setEmailValue(email.value);
    setGenderValue(selectedOption.value);
  }

  return (
    <div className="form">
      <div className="name item">
        <label>Name: </label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="email item">
        <label>E-mail: </label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="gender item">
        <label>Gender: </label>
        <input type="radio" name="options" id="female" value="Female" />
        <label htmlFor="female">Female</label>

        <input type="radio" name="options" id="male" value="Male" />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          name="options"
          id="transformer"
          value="Transformer"

        />
        <label htmlFor="transformer">Transformer</label>
      </div>
      <div className="submit item">
        <button
          onClick={() => {
            getData();
          }}
          type="submit"
        >
          Submit
        </button>
      </div>

      <h2>{nameValue} {emailValue} {genderValue}</h2>
    </div>
  );
};

export default Form;
