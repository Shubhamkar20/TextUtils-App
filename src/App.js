import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
  <Navbar title="TextUtils"/>

  <div className="container mt-5">
  <Home heading="Enter text here"/>
  </div>
    </>
  );
}

export default App;
