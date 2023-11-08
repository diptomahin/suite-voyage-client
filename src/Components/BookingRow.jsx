
import { PropTypes } from 'prop-types';
const BookingRow = ({booking ,handleDelete}) => {
    const { _id ,Type, Number, Price, Image,date } = booking
    return (
        <tr>
        <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {Image&& <img src={Image} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td>
            {Type}
        </td>
        <td>
            {Number}
        </td>
        <td>{date}</td>
        <td>${Price}</td>
        <td className='grid grid-cols-1 gap-3'>
            <button className='btn btn-success'>Update</button>
            <button className='btn btn-warning'>Review</button>
        </td>
    </tr>
);
   
};

BookingRow.propTypes ={
  booking: PropTypes.array,
  handleDelete: PropTypes.function
    
  }


export default BookingRow;