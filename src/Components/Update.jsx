import { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

export default function Update() {
  const [id, setID] = useState(null);
  useEffect(() => {                 //useeffect to get data previously stored in local storage
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'))
  }, []);
     const updataAPIData=()=>{         //update request to update data
        axios.put(`https://660a3bc60f324a9a288461b3.mockapi.io/fakeData/${id}`,{
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
     }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  return (
    <div className="main">
      <Form className="create-form">
        <Form.Field>
          <h2 className="main-header">React Crud Operations</h2>
          <label>First Name</label>
          <input placeholder="First Name"value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

        </Form.Field>
        <Form.Field>
          <Checkbox  label="I agree to the Terms and Conditions" onChange={(e) => setCheckbox(!checkbox)}/>
          </Form.Field>
        <Button type="submit"onClick={updataAPIData}>Update</Button>  
      </Form>
    </div>
  );
}
