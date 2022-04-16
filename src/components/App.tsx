import { GAME_SIZE } from '../settings/constants'
import './App.css'
import Game from './Game'

function App() {
  return (
    <div className="App">
      <div 
        className="App-header"
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
      >
        <Game />
      </div>
    </div>
  )
}

export default App
