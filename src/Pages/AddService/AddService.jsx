import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const AddService = () => {
    const { user } = useContext(Authcontext);
    const navigate = useNavigate();
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (valiDateForm()) {
            const userEmail = user.email;
            const serviceData = { ...formData, userEmail };

            fetch(`https://server-side-cyan-beta.vercel.app/services`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(serviceData),
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.insertedId) {
                        toast.success("Job successfully added")
                        navigate('/service')
                    }
                    else {
                        toast.error("Failed to add job");
                    }

                })
                .catch(err => {
                    toast.error('Failed to add service.', {
                        position: 'top-center',
                    });
                });
        }
    };

    useEffect(() => {
        setFormData((prev) => ({ ...prev, date: new Date().toDateString() }));
    }, [user]);

    return (
        <div className='bg-[#F4F3F0] lg:p-24 p-10'>
            <Helmet><title>Add service</title></Helmet>
            <h1 className='text-3xl font-extrabold'>Add services</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid lg:grid-cols-2 gap-2 lg:justify-between'>
                    <div className="form-control">
                        <label>
                            <span className='label-text'>Service Title</span>
                        </label>
                        <input
                            type='text'
                            name='title'
                            className="input w-full input-bordered"
                            placeholder="Service name"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {errors?.title && <p className='text-red-400'>{errors.title}</p>}
                    </div>
                    <div className='form-control'>
                        <label>
                            <span className='label-text'>Category</span>
                        </label>
                        <select
                            name='category'
                            className='select w-full input-bordered'
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
                        </select>
                        {errors?.category && <p className='text-red-400'>{errors.category}</p>}
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 justify-between'>
                    <div className="form-control">
                        <label>
                            <span className='label-text'>Price $</span>
                        </label>
                        <input
                            type='number'
                            name='price'
                            className="input w-full input-bordered"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        {errors?.price && <p className='text-red-400'>{errors.price}</p>}
                    </div>
                    <div>
                        <label className='label'>
                            <span className='label-text'>Website</span>
                        </label>
                        <input
                            type='url'
                            name='website'
                            className="input w-full input-bordered"
                            placeholder="Website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                        {errors?.website && <p className='text-red-400'>{errors.website}</p>}
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 justify-between'>
                    <div className="form-control">
                        <label>
                            <span className='label-text'>Service Image</span>
                        </label>
                        <input
                            type='url'
                            name='serviceImage'
                            className="input w-full input-bordered"
                            placeholder="Service image"
                            value={formData.serviceImage}
                            onChange={handleChange}
                        />
                        {errors?.serviceImage && <p className='text-red-400'>{errors.serviceImage}</p>}
                    </div>
                    <label>
                        <span className='label-text'>Company Name</span>
                        <input
                            type='text'
                            name='companyName'
                            className="input w-full input-bordered"
                            placeholder="Company name"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                        {errors?.companyName && <p className='text-red-400'>{errors.companyName}</p>}
                    </label>
                </div>

                <div>
                    <label>
                        <span className='label-text'>Description</span>
                    </label>
                    <input
                        type='text'
                        name='description'
                        className="input w-full input-bordered"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {errors?.description && <p className='text-red-400'>{errors.description}</p>}
                </div>

                <input type="submit" className='btn btn-block mt-2' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;
