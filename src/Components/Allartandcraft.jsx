
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Allartandcraft = ({ userinfo }) => {
    const [users, setUsers] = useState([]); // State for the list of users
    const navigate = useNavigate();

    // Fetch all users when the component loads
    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then((res) => res.json())
            .then((data) => setUsers(data)) // Update the users state
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    // Handle delete request
    const handleDelete = (_id) => {
        console.log("Deleting user with ID:", _id);

        // Send DELETE request
        fetch(`http://localhost:5000/user/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Server response:", data);

                if (data.deletedCount > 0) {
                    alert("User successfully deleted");

                    const remainingUsers = users.filter((user) => user._id !== _id);
                    setUsers(remainingUsers);
                }
            })
            .catch((err) => console.error("Error deleting user:", err));
    };

    // Handle adding data to MyCart
   

    return (
        <div className="grid grid-cols-3">
            {users?.map((user) => {
                const { name, item, image, description } = user;
                return (
                    <div key={user._id} className="grid  gap-10 card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img src={image} alt="Art and Craft" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                                <h1>{item}</h1>
                            </div>

                            <Link to={`/viewdetails/${user._id}`}><button className="btn btn-success">View Details</button></Link>
                            <Link to={`/update/${user._id}`}><button className="btn btn-success">Update Here</button></Link>
                          
                            <button onClick={() => handleDelete(user._id)} className="btn btn-success">Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Allartandcraft;
