import { TILE_SIZE } from '../../../../settings/constants';
const Button = ({onClick}:{onClick:()=>void}) => {
  return (
          <button
            onClick={onClick}
            style={{
              position: 'absolute',
              top: TILE_SIZE,
              left: -TILE_SIZE*3,
              backgroundColor: 'orange',
              border: 'white',
              borderRadius: '5px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              width: '100px',
              height: '30px',
              zIndex: 3,
              cursor: 'pointer',
            }}
          >DEBUG
          </button>
  );
}

export default Button;