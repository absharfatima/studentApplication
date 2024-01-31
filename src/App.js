import './App.css';
// import Greet from './components/greet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/employeeForm';
import EmployeeList from './components/employeeList';
//import ParentComponent from './components/parentComponent';
//import CounterComponent from './components/counterComponent';

//import ActivityList from './components/activityList';



function App() {
  return (
    <div>
     
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<EmployeeForm />} /> 
        <Route path="/employeeList" element={<EmployeeList />} />
      </Routes>
      </div>
  </Router> 

  {/*<ParentComponent/> 

  <CounterComponent/> 
  <ActivityList/> */}

    </div>
  );
}

export default App;

