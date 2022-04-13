import { GAME_SIZE } from '../settings/constants'
import './App.css'
import Board from './Board'
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
        <Board />
      </div>
    </div>
  )
}

export default App
