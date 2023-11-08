import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "../../Components/BookingRow";
// import BookingRow from "../../Components/BookingRow";

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
        // console.log(bookings)
    }
        , [user?.email])




    return (
        <div >
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Room Type</th>
                            <th>Room Number</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings.map(booking =><BookingRow key={booking._id} booking={booking}></BookingRow>)
                       }
                    </tbody>

                </table>
            </div>
        </div>
    );
};




export default MyBookings;