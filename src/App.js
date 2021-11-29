import Profile from "./profile/Profile";
import Photo from "./profile/imageInSrc.jpg";
import './App.css'
export default function App() {
  var x = "imen soltani";
  const funprop = () => {
    return alert("handleName ");
  };
  return (
    <div className="App">
      <Profile mariem="imen soltani" Photo={Photo} alert={funprop} />
    </div>
  );
}
