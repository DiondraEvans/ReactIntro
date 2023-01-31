import './App.css';
import Header from "./components/header"
import Player from "./components/player"
import Board from "./components/board";
function App() {
  return (
    <div className ="App">
      <Header />
      <Player whichPlayer ="O"/>
      <Player whichPlayer ="X"/> 
      <Board />
    </div>
  )
}

export default App;
