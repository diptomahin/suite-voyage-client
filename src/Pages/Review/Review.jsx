
const Review = () => {
    const handleReview=(event)=> {
        event.preventDefault();
        const form = event.target;
        console.log(form)
        const UserName = form.UserName.value;
        const Rating = form.rating.value;
        const Comment = form.comment.value;
        const Email = form.email.value;
        const review = {UserName,Rating,Comment,Email};
        console.log(review)
    }
    return (
        <div className="w-11/12 mx-auto bg-[#1E2C1A] text-[#D49B35] rounded-lg">
            <h1 className="text-center font-bold text-3xl py-6">Post Review</h1>
            {/* <h3 className="text-center font-bold text-2xl py-6"> Room Type : {Type}</h3> */}
            <div className="p-9">

                <div className="grid grid-cols-2 py-7">
                    <div className="w-80">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xl text-[#D49B35]">
                                <tr>
                                    <th>Room Number</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {/* <tr>
                                <td>{Number}</td>
                                <td>{date}</td>
                                <td>{Price}</td>
                            </tr> */}
                            </tbody>
                        </table>
                        <form onSubmit={handleReview} >
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="UserName" placeholder="User Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="0-5" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="comment" placeholder="comment" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <input type="submit" value="Submit" className="font-semibold btn my-5" />



                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;