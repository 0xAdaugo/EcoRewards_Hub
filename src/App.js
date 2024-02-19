import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import Footer from "./components/common/Footer";
import SupportForm from "./components/common/SupportForm";
import GetStarted from "./components/common/GetStarted";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/get-started" element={<GetStarted />} />
          {/* <Home /> */}
        </Routes>
      </main>
      <Footer />
      <SupportForm />
    </div>
  );
}

export default App;
