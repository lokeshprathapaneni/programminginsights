
import './App.css';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewBatches } from './NewBatches/NewBatch';

function App() {
  return (


<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="/newBatch" element={<NewBatches />}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
