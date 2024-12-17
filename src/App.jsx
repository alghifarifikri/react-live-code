import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/index";
import Detail from "./pages/detail";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
