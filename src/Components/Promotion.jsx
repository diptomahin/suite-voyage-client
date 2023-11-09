import { Link } from "react-router-dom";

const Promotion = () => {
    return (
        <div data-aos="zoom-in" className="hero w-11/12 mx-auto min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6RdZNDB/pexels-jonas-togo-2907196.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold my-7"> Save up to 50% on your dream stay!</h1>
                    <ul  className="text-start">
                        <li>Free Breakfast for a delightful start to your day!</li>
                        <li>Complimentary Wi-Fi for staying connected.</li>
                        <li>Kids Stay FREE</li>
                        <li> Perfect for family vacations!</li>
                        <li>Flexible Booking</li>
                        <li>No cancellation fees!</li>
                    </ul>
                   <Link to='/rooms'><button className="btn my-7 ">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Promotion;