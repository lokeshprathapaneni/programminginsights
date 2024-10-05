
import './App.css';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewBatches } from './NewBatches/NewBatch';
import { RegisterStudent } from './NewBatches/Register/RegisterStudent';
import JavaSyllabus from './NewBatches/Syllabus/JavaSyllabus';

function App() {
  return (


<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="/newBatch" element={<NewBatches />}></Route>
  <Route path="/registerStudent" element={<RegisterStudent />}></Route>
  <Route path="/syllabus" element={<JavaSyllabus />}></Route>

  

</Routes>
</BrowserRouter>
  );
}

export default App;
