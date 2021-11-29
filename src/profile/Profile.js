
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile(prop) {
    return (
      <div className="App">
        <h1>Akram Elshra</h1>
        <h2>student</h2>
        <img src={prop.Photo} alt="img in src" style={{marginLeft:"500px", borderRadius:'100px'}}  />
        <p style={{marginLeft:"650px",fontSize:"30px"}}>orang</p>
        <Button onClick={prop.alert} style={{marginLeft:"650px"}}>click</Button>
      </div>
    );
  }
  
  Profile.defaultProps = {
    Bio: "this the default data",
    age: "20"
  };
  