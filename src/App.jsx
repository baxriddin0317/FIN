import { Route, Routes } from "react-router-dom";
import Plans from "./pages/Plans1";
import Plans2 from "./pages/Plans2";
import { Header } from "./components";
import Home from "./pages/Home";

function App() {

  return (
    <>
      {/* === header === */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan1" element={<Plans />} />
        <Route path="/plan2" element={<Plans2 />} />
      </Routes>
    </>
  );
}

export default App;
