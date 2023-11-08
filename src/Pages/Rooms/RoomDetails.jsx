import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const details = useLoaderData()
    const { img, roomNumber, roomDescription, roomType, description, pricePerNight, roomSize} = details;
    return (
        <div className="w-11/12 mx-auto bg-[#1E2C1A] text-[#D49B35] rounded-lg">
            <h3 className="text-center font-bold text-2xl py-6"> Room Type : {roomType}</h3>
            <div className="p-9">
                <div className="grid grid-cols-2 py-7">
                <div >
                <img className=" h-72 rounded-lg hover:translate-y-4" src={img} alt="" />
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
                    </div>
                </div>
                <div className="w-80 text-xl">
                    <h3>{roomDescription}</h3>
                    <h4>{description}</h4>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;