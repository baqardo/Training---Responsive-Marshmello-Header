import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <SocialMedia />
    </div>
  );
}

export default App;
