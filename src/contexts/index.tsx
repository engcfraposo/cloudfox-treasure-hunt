import { CanvasProvider } from './CanvasProvider';
import { ChestsProvider } from './ChestsProvider';
import { ModalProvider } from './ModalProvider';

const AppProvider= ({children}) => {
  return(
    <CanvasProvider>
      <ChestsProvider>
        <ModalProvider>
        {children}
        </ModalProvider>
      </ChestsProvider>
    </CanvasProvider>
  );
}

export default AppProvider;