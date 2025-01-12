import React, { useContext } from 'react';
import { Authcontext } from '../../context/AuthProvider';
import Swal from 'sweetalert2'; // Import Swal for alerts
import { Link } from 'react-router-dom';

const ServicesCard = ({ services, deleteService }) => {
    const { description, title, _id } = services;  // Add _id to delete service
    const { user } = useContext(Authcontext);

    // Function to handle deletion with confirmation
    const deleteHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Send DELETE request to server
                fetch(`https://server-side-cyan-beta.vercel.app/services/${_id}?email=${user.email}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(() => {
                    // Call the deleteService function to update the UI
                    deleteService(_id);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your service has been deleted.",
                        icon: "success"
                    });
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete the service.",
                        icon: "error"
                    });
                });
            }
        });
    };

    return (
        <div className="">
            <div className='card bg-base-100 lg:w-96 md:w-72 w-64 shadow-xl p-5'>
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='flex gap-3 justify-end'>
                <Link to={`/updateJob/${_id}`}><button className="btn">Update</button></Link>
                    <button onClick={deleteHandler} className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
