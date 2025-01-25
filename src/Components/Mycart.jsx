import { useLoaderData } from "react-router-dom";


const Mycart = () => {
    const orders = useLoaderData()

    return (
        <div className="grid grid-cols-3 border-4 border-red-500">
            {
                orders?.map((order) => {
                    const { quantity, price, location } = order;
                    return (
                        <div key={order._id}>
                            <div className=" bg-base-100 rounded-2xl border-4 border-blac-900 w-96 shadow-lg">
                                <div className="card-body">
                                    <h2 className="card-title">Price is{price}</h2>
                                    <p>Address {location}</p>
                                    <p>Address {quantity}</p>
                                </div>
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Mycart;