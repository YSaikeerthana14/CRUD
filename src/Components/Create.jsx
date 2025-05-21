import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from 'axios';

export default function Create() {
  const [firstName, setFirstName] = useState("");    //creating states for fn,ln,cb
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    console.log(firstName);
    // console.log(lastName);
    // console.log(checkbox);
    axios.post(`https://660a3bc60f324a9a288461b3.mockapi.io/fakeData`, {  //axios to send post request
      firstName,
      lastName,
      checkbox,
    });
  };
  return (
    <div className="main">
      <Form className="create-form">
        <Form.Field>
        <h2 className="main-header">React Crud Operations</h2>
          <label>First Name</label>
          <input placeholder="First Name"onChange={(e) => setFirstName(e.target.value)} //setuping fn to setFirstName
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
