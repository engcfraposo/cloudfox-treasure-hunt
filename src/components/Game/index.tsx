import { useState } from 'react';
import AppProvider from '../../contexts';
import Board from './Core/Board';
import Button from './Core/Button';
import Debugger from './Core/Debugger';

const Game: React.FC = () => {
  const [isDebugger, setIsDebugger] = useState(false);
  return (
    <AppProvider>
      <Button onClick={() => setIsDebugger(pState => !pState)} />
      <Board />
      {isDebugger && <Debugger />}
    </AppProvider>
  );
}

export default Game;