import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";

import Login from "./components/Login";
import GeneralChemistry from "./components/GeneralChemistry";

import Blpage from "./components/Blpage"

import PeriodicTableQuiz from "./components/PeriodicTableQuiz.js";
import TeacherLogins from "./components/TeacherLogins.jsx";
import TeacherRegister from "./components/TeacherRegister.jsx";

import InteractionPage from "./components/InteractionPage.jsx";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/generalchemistry" element={<GeneralChemistry />} />
     
        <Route path="/blpage" element={<Blpage />} />
        <Route path="/quiz/periodic-table" element={<PeriodicTableQuiz />} />
        <Route path="/teacherlogins" element={<TeacherLogins />} />
        <Route path="/teacherregister" element={<TeacherRegister />} />
        
        <Route path="/interactionpage" element={<InteractionPage />} />

        
     
        
          
     
      
      


      </Routes>
    </BrowserRouter>
  );
}

export default App; 

