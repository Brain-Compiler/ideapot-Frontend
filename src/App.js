import "./styles/Reset.scss";
import Router from "./Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="background">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
