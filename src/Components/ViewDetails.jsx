/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const view = useLoaderData()

    const handleSubmit = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const location = e.target.location.value;
        const order={quantity, price, location }
        console.log(order);

       
    fetch("http://localhost:5000/order", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Server Response:", data);
          alert("Craft added successfully!");
      
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to add craft. Please try again.");
        });
    };
    return (
        <div>
            <figure>
                <img
                    src={view?.image}
                    alt="Shoes" />
            </figure>
            <h1>{view?.name}</h1>
            <h1>{view?.email}</h1>
            <h1>{view?.item}</h1>

            <section className="p-6 dark:text-gray-800">
                <form  onSubmit={handleSubmit} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label htmlFor="quantity" className="block mb-1 ml-1">Quantity</label>
                        <input id="quantity" type="number" placeholder="Enter quantity" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-1 ml-1">Price</label>
                        <input id="price" type="number" placeholder="Enter price" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-1 ml-1">Location</label>
                        <input id="location" type="text" placeholder="Enter location" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Submit</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default ViewDetails;