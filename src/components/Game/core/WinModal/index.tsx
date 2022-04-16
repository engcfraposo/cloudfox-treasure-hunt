import React from 'react';
import Modal from 'react-modal';
import Hero from '../../../../assets/hero.png';
import { useModal } from '../../../../contexts/ModalProvider';
import { HEAD_OFFSET, TILE_SIZE } from '../../../../settings/constants';

const WinModal: React.FC = () => {
  const {winModal, updateWinModal} = useModal();
  return (
    <Modal
        isOpen={winModal}
        onRequestClose={() => updateWinModal(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 10,
          },
          content: {
            position: 'absolute',
            top: '33%',
            left: '33%',
            width: 600,
            height: 400,
            border: '1px solid #ccc',
            background: '#282c34',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
        contentLabel="Win Modal"
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div 
            style={{
              marginTop: 100,
              width: TILE_SIZE,
              height: TILE_SIZE + HEAD_OFFSET,
              backgroundImage: `url(${Hero})`,
              backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
              backgroundRepeat: 'no-repeat',
              animation: 'hero-animation 1s steps(4) infinite',
            }}
          />
          <h1 style={{color:"orange"}}>Você venceu!</h1>
          <button 
            onClick={() => updateWinModal(false)}
            style={{
              marginTop: 50,
              backgroundColor: 'orange',
              border: 'white',
              borderRadius: '5px',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              width: '150px',
              height: '50px',
              zIndex: 3,
              cursor: 'pointer',
            }}
            >
              Jogar Novamente
            </button>
        </div>
        
      </Modal>
  );
}

export default WinModal;