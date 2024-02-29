import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SupportForm from "./components/common/SupportForm";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Header />
      <main>
        <Routes>
          {Object.values(routes).map((component) => (
            <Route
              key={component.key}
              exact
              path={component.path}
              element={<component.name />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
      <SupportForm />
    </div>
  );
}

export default App;
