import "./styles/Reset.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Router from "./Router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="background">
      <Header />
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
