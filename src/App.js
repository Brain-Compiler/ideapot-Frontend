import "./styles/reset.scss";
import Router from "./routes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

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
