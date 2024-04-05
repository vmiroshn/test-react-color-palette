import { ColorPicker, useColor } from "react-color-palette";
//The readme states that the below line should be
//import "react-color-palette/css";
//but that doesn't work. The below line does work.
import 'react-color-palette/dist/css/rcp.css';
import './App.css';

function App() {
  const [color, setColor] = useColor("rgb(86 30 203)");
  return (
    <div className="App">
      <ColorPicker color={color} onChange={setColor} />;
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
