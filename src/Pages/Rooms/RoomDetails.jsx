import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from './../../Providers/AuthProvider';
import RoomReview from "../../Components/RoomReview";
import Swal from 'sweetalert2'
const RoomDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const details = useLoaderData()
    const { _id, img, roomNumber, roomDescription, roomType, description, pricePerNight, roomSize } = details;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const RoomId = _id
        const date = form.date.value;
        const Type = form.type.value;
        const Number = form.number.value;
        const Price = form.price.value;
        const Name = user.displayName;
        const email = form.email.value;
        const Image = img;

        const bookedRoom = { RoomId, Type, Name, Number, Price, email, date, Image }

        console.log(bookedRoom);

        fetch('https://suite-voyage-server-ij9ribipj-mahin-ahmeds-projects.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedRoom)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Booking Confirmed',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })


    }



    return (
        <div className="  lg:w-11/12 mx-auto bg-[#1E2C1A] text-[#D49B35] rounded-lg">
            <h3 className="text-center font-bold text-2xl py-6"> Room Type : {roomType}</h3>
            <div className="p-9">
                <div className="grid grid-cols-1 lg:grid-cols-2 py-7">
                    <div className="lg:w-11/12" >
                        <img className=" h-72 rounded-lg hover:translate-y-4" src={img} alt="" />
                        <div className="w-80 text-xl py-3">
                            <h3>{roomDescription}</h3>
                            <h4>{description}</h4>
                        </div>
                    </div>
                    <div className="w-80">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xl text-[#D49B35]">
                                <tr>
                                    <th>Room Number</th>
                                    <th>Room size</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>{roomNumber}</td>
                                    <td>{roomSize}</td>
                                    <td>${pricePerNight}</td>
                                </tr>
                            </tbody>
                        </table>
                        <form className="w-100" onSubmit={handleBooking} >
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Room Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="type" defaultValue={roomType} placeholder="Room Type" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" name="date" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={pricePerNight} name="price" placeholder="price" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Room Number</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="number" defaultValue={roomNumber} placeholder="Room Number" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered w-full" />
                                </label>
                            </div>
                            {
                                user ?
                                    <input type="submit" value="Book Now" className="font-semibold btn my-5" />
                                    :
                                    <Link to='/login'><input type="button" value="Login" className="font-semibold  btn my-5" /></Link>

                            }
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto text-center">
                <h1 className="font-bold text-3xl my-4">Reviews</h1>
                <RoomReview details={details}></RoomReview>
            </div>
        </div>
    );
};

export default RoomDetails;