import "./App.css";

import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import Footer from "./components/common/Footer";
import SupportForm from "./components/common/SupportForm";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <SupportForm />
    </div>
  );
}

export default App;
