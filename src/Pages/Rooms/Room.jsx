
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const Room = ({room}) => {
    const { _id, img} = room; 
    return (
      <Link to={`/rooms/${_id}`}>
        <div className='my-5'>
            <img className='w-80 h-72 rounded-lg hover:translate-y-4 ' src={img} alt="" />
        </div>
      </Link>
    );
};

Room.propTypes ={
    room: PropTypes.object
}

export default Room;