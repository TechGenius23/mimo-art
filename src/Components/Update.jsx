import { useLoaderData } from "react-router-dom";

const Update = () => {
    const updateData = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const itemname = form.itemname.value;
        const email = form.email.value;
        const user = { name, itemname, email };

        console.log(user);

        // Ensure the backend server is running
        fetch(`http://localhost:5000/user/${updateData._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Response from server:", data);
                if (data.modifiedCount > 0) {
                    alert("User updated successfully!");
                }
            })
            .catch((err) => console.error("Error:", err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        defaultValue={updateData.name}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="itemname">Item</label>
                    <input
                        id="itemname"
                        name="itemname"
                        defaultValue={updateData.item}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        defaultValue={updateData.email}
                        type="email"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Update;
