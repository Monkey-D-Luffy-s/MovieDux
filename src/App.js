import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import GridComponent from "./components/GridComponent";

function App() {
  return (
    <div className="flex flex-col justify-center lg:mx-20 md:mx-10">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
