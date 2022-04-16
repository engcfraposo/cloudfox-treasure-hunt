import { useState } from 'react';
import AppProvider from '../../contexts';
import Board from './core/Board';
import Button from './core/Button';
import Debugger from './core/Debugger';
import WinModal from './core/WinModal';
import Modal from 'react-modal';
import LoseModal from './core/LoseModal';

Modal.setAppElement('#root');
const Game: React.FC = () => {
  const [isDebugger, setIsDebugger] = useState(false);
  return (
    <AppProvider>
      <Button onClick={() => setIsDebugger(pState => !pState)} />
      <Board />
      {isDebugger && <Debugger />}
      <WinModal />
      <LoseModal />
    </AppProvider>
  );
}

export default Game;