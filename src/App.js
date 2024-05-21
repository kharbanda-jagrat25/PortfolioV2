import { Routes, Route, BrowserRouter } from "react-router-dom"
import { LandingPage } from "./pages/landingPage/LandingPage";

function App() {
  return (
   <div className="bg-black h-full">
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} />
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about" element={<>About</>} />
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
