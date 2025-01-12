

const Craftitemsection = () => {
    return (
        <div>
            <div className="font-bold text-4xl text-center my-10">
                <h1>
                Handcraft Items
                </h1>
            </div>
            <div className="grid grid-cols-3">
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/n6F54QH/R.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Unique pices</h2>
                        <p>Quality: Handcrafted products are often made with high-quality materials and attention to detail</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/j4zwZzv/OIP.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Unique pices</h2>
                        <p>Eco-Friendly: Often made using sustainable or upcycled materials, making them environmentally friendly.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/2nYsQpF/R-1.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Unique pices</h2>
                        <p>Cultural Value: Many items showcase traditional techniques and designs that carry cultural or historical significance.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Craftitemsection;