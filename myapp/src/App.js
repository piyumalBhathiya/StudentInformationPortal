import './App.css';
import {students} from './Data/StudentsDb';
import StudentTable from './Components/StudentTable'

function App() {
  return (
    <div className="App">
      <h1>Students Information Portal</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
}

export default App;
