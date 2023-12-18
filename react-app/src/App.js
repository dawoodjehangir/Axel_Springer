import "./App.css";
import JokeContainer from "./components/JokeContainer";

// https://pngimg.com/uploads/chuck_norris/small/chuck_norris_PNG13.png
function App() {
  const fetchJoke = () => {
    return "This is some Joke";
  };
  return (
    <div className="App">
      <Header />
      <MidDivider />
      <JokeContainer />
      <button onClick={fetchJoke}>Humor Me</button>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="ChuckHeader">
        <img
          src="https://pngimg.com/uploads/chuck_norris/small/chuck_norris_PNG13.png"
          alt="Chuck Norris"
          className="ChuckFace"
        />
        <div>
          <span className="ChuckOrangeText">Chuck Norris</span>
        </div>
      </div>
    </>
  );
}

function MidDivider() {
  return (
    <>
      <div className="Divider">
        <span className="DividerText">Wanna get a Random Joke?</span>
      </div>
    </>
  );
}

export default App;
