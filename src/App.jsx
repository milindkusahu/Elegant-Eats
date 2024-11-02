import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This will render child routes */}
      <Footer />
    </div>
  );
};

export default App;
