import { Route, Routes } from "react-router-dom";
import Plans from "./pages/Plans1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Plans />} />
      </Routes>
    </>
  );
}

export default App;
