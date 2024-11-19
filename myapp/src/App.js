import "./App.css";
import { useState } from "react";
import { students } from "./Data/StudentsDb";
import StudentTable from "./Components/StudentTable";

function App() {
  const [fontSize, setFontSize] = useState(16);

  const changeFontSize = (size) => {
    if (size === "S") setFontSize(12);
    else if (size === "M") setFontSize(16);
    else if (size === "L") setFontSize(20);
  };

  return (
    <>
      <div className="App" style={{ fontSize: `${fontSize}px` }}>
        <h1>Students Information Portal</h1>
        <div className="fontSize">
          Font Size :<button onClick={() => changeFontSize("S")}>S</button>
          <button onClick={() => changeFontSize("M")}>M</button>
          <button onClick={() => changeFontSize("L")}>L</button>
        </div>

        <table width="100%">
          <tbody>
            <tr>
              <td>
                <StudentTable students={students} className={fontSize} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
