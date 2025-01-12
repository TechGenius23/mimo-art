/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const Allartandcraft = (userinfo) => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
        console.log(users);
    }, [])
    return (
        <>
            {
                users?.map(user => {
                    const { name, item,image,description } = user;
                    return (
                        <div className=" grid grid-cols-2 gap-10 card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{description}</p>
                                <div className="card-actions justify-end">
                                    <h1>{item}</h1>
                                </div>
                                <button className="btn btn-success">Add my card</button>
                            </div>
                        </div>

                    )
                })
            }
        </>
    );
};

export default Allartandcraft;