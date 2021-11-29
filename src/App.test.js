import Profile from ".//Profile/Profile";
import Photo from "./Profile/imageInSrc.jpg";
import "./styles.css";
export default function App() {
  var x = "Akram";
  const funprop = () => {
    return alert("this my alert");
  };
  return (
    <div className="App">
      <Profile mariem="akram Elshara" Photo={Photo} alert={funprop} />
    </div>
  );
}
