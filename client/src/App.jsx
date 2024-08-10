import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Statistics from "./pages/Statistics";

import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-black h-screen">
        <div className="bg-lightPrimaryBG h-screen max-w-[430px] mx-auto p-6 flex flex-col items-center">
          <div className="h-full w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/acc" element={<Account />} />
              <Route path="/stat" element={<Statistics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <NavBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
