
import { PropTypes } from 'prop-types';
const Room = ({room}) => {
    const { img} = room; 
    return (
        <div>
            <img className='w-80 h-72 rounded-lg hover:translate-x-64' src={img} alt="" />
        </div>
    );
};

Room.propTypes ={
    room: PropTypes.object
}

export default Room;