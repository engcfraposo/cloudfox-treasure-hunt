import { CanvasProvider } from './CanvasProvider';
import { ChestProvider } from './ChestProvider';

const AppProvider= ({children}) => {
  return(
    <CanvasProvider>
      <ChestProvider>
        {children}
      </ChestProvider>
    </CanvasProvider>
  );
}

export default AppProvider;