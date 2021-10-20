import ReactDOM from "react-dom";
import logo from "./logo.png";
import JobForm from "./jobform";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <img alt="logo1" className="logo" src={logo} />
      <h1>UI/UX Designer (m/f/d)</h1>
      <h2>Remote Full Time</h2>
      <h3>Join Our Team:</h3>
      <JobForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
