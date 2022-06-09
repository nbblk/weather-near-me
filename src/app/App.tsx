import { Routes, Route } from "react-router-dom";
import Header from '@/common/components/organisms/Header/Header';
import Summary from "@/pages/Summary";
import Map from "@/pages/Map";

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </div>
  );
}

export default App;
