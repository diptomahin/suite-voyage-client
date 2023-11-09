
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const Room = ({room}) => {
    const { _id, img, roomType, roomSize, pricePerNight} = room; 
    return (
      <Link to={`/rooms/${_id}`}>
        <div className='my-5    text-[#D49B35] border-x-2 border-y-2 rounded-lg p-2'>
            <img className='w-80 h-72 rounded-lg hover:translate-y-4 ' src={img} alt="" />
            <div className='border-[#D49B35] mt-2'>
              <h1>{roomType}</h1>
              <h1>{roomSize}</h1>
              <h1>{pricePerNight}</h1>
            </div>
        </div>
      </Link>
    );
};

Room.propTypes ={
    room: PropTypes.object
}

export default Room;