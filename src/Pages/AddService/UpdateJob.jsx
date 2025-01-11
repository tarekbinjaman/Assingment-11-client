import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'; // useParams to get the id from the URL
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Authcontext } from '../../context/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateJob = () => {
    const { user } = useContext(Authcontext);
    const navigate = useNavigate();
    const service = useLoaderData();
    const id = service._id;
    const [formData, setFormData] = useState({
        serviceImage: '',
        title: '',
        companyName: '',
        website: '',
        description: '',
        category: '',
        price: '',
        date: '',
        email: user?.email
    });

    const [errors, setErrors] = useState({});

    // Function to validate the form
    const valiDateForm = () => {
        const newErrors = {};
        if (!formData.serviceImage) newErrors.serviceImage = 'Service Image is required';
        if (!formData.title) newErrors.title = 'Service Title is required';
        else if (formData.title.length < 2) {
            newErrors.title = 'Service Title must be more than 2 characters';
        }
        if (!formData.companyName) newErrors.companyName = 'Company Name is required';
        if (!formData.website) newErrors.website = 'Website is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.price) newErrors.price = 'Service price is required';
        if (!formData.description) newErrors.description = 'Description is required';
        else if (formData.description.length < 10) {
            newErrors.description = 'Description must be up to 10 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Function to handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (valiDateForm()) {
            const userEmail = user.email;
            const serviceData = { ...formData, userEmail };

            // Update service
            fetch(`http://localhost:5000/services/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(serviceData),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        toast.success("Service successfully updated");
                        navigate('/service');
                    } else {
                        toast.error("Failed to update job");
                    }
                })
                .catch(err => {
                    toast.error('Failed to update service.', { position: 'top-center' });
                });
        }
    };

    // Use effect to fetch the data for the current service
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    serviceImage: data.serviceImage || '',
                    title: data.title || '',
                    companyName: data.companyName || '',
                    website: data.website || '',
                    description: data.description || '',
                    category: data.category || '',
                    price: data.price || '',
                    date: data.date || new Date().toDateString(),
                    email: user?.email,
                });
            })
            .catch((error) => {
                toast.error('Failed to load service data.', { position: 'top-center' });
            });
    }, [id, user?.email]); // Fetch data only when id or user changes

    return (
        <div className="bg-[#F4F3F0] lg:p-24 p-10">
            <Helmet><title>Update Job</title></Helmet>
            <h1 className="text-3xl font-extrabold">Update Service</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-2 lg:justify-between">
                    <div className="form-control">
                        <label>
                            <span className="label-text">Service Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="input w-full input-bordered"
                            placeholder="Service name"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {errors?.title && <p className="text-red-400">{errors.title}</p>}
                    </div>
                    <div className="form-control">
                        <label>
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            className="select w-full input-bordered"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="Construction">Construction</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Design">Design</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="IT">IT</option>
                            <option value="Finance">Finance</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Legal">Legal</option>
                            <option value="Customer Support">Customer Support</option>
                            <option value="Hospitality">Hospitality</option>
                        </select>
                        {errors?.category && <p className="text-red-400">{errors.category}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 justify-between">
                    <div className="form-control">
                        <label>
                            <span className="label-text">Price $</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            className="input w-full input-bordered"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        {errors?.price && <p className="text-red-400">{errors.price}</p>}
                    </div>
                    <div className="form-control">
                        <label>
                            <span className="label-text">Website</span>
                        </label>
                        <input
                            type="url"
                            name="website"
                            className="input w-full input-bordered"
                            placeholder="Website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                        {errors?.website && <p className="text-red-400">{errors.website}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 justify-between">
                    <div className="form-control">
                        <label>
                            <span className="label-text">Service Image</span>
                        </label>
                        <input
                            type="url"
                            name="serviceImage"
                            className="input w-full input-bordered"
                            placeholder="Service image"
                            value={formData.serviceImage}
                            onChange={handleChange}
                        />
                        {errors?.serviceImage && <p className="text-red-400">{errors.serviceImage}</p>}
                    </div>
                    <div className="form-control">
                        <label>
                            <span className="label-text">Company Name</span>
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            className="input w-full input-bordered"
                            placeholder="Company name"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                        {errors?.companyName && <p className="text-red-400">{errors.companyName}</p>}
                    </div>
                </div>

                <div>
                    <label>
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        className="input w-full input-bordered"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {errors?.description && <p className="text-red-400">{errors.description}</p>}
                </div>

                <input type="submit" className="btn btn-block mt-2" value="Update Service" />
            </form>
        </div>
    );
};

export default UpdateJob;
