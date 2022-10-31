import "./styles/reset.scss";
import Router from "./routes";
import Header from "./components/header/header"

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
