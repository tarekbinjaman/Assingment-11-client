import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';

const AddService = () => {
    const {user} = useContext(Authcontext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        serviceImage: '',
        title: '',
        companyName: '',
        website: '',
        description: '',
        category: '',
        price:'',
        date: '',
        userEmail: user?.email
    })

    const [errors, setErrors] = useState({})
    const valiDateForm = () => {

        const newErrors = {};
        if (!formData.serviceImage) newErrors.serviceImage = 'Service Image is required';
        if (!formData.title) newErrors.title = 'Service Title is required';
        else if(formData.title.length < 2) {newErrors.title = 'Service Title must be more than 2 characters';}
        if (!formData.companyName) newErrors.companyName = 'Company Name is required';
        if (!formData.website) newErrors.website = 'website is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.price) newErrors.price = 'Service price is required';
        if (!formData.description) newErrors.description = 'Description is required';
        else if(formData.description.length < 10 )
             {newErrors.description = 'Description must be up to 10 characters'}
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
        console.log(formData)
        console.log(user.email)
    }

    const userEmail = user.email;
    const serviceData = {...formData, userEmail};

    useEffect(() => {
        setFormData((prev) => ({...prev, date: new Date().toDateString()}))
    }, [user])

    return (
        <div className='bg-[#F4F3F0] lg:p-24 p-10'>
            <h1 className='text-3xl font-extrabold'>Add services</h1>
            <form onSubmit={handleChange}>
            <div className='grid lg:grid-cols-2 gap-2 lg:justify-between'>
                    <div className="form-control">
                        <label>
                            <label className='label'>
                                <span className='label-text'>Service Title</span>
                            </label>
                            <input type='text' name='title' className="input w-full input-bordered" placeholder="Service name"  value={formData.title} onChange={handleChange}/>
                        </label>
                        {errors?.title && <p className='text-red-400'>{errors.title}</p>}
                    </div>
                    <div className='form-control'>
                        <label>
                            <label className='label'>
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
                        </label>
                        {errors?.category && <p className='text-red-400'>{errors.category}</p>}
                    </div>
                </div>
                {/* form supplayr row */}
                <div className='grid grid-cols-2 gap-2  justify-between'>
                    <div className="form-control">
                        <label>
                            <label className='label'>
                                <span className='label-text'>Price $</span>
                            </label>
                            <input type='number' name='price' className="input w-full input-bordered" placeholder="price"  value={formData.price} onChange={handleChange}/>
                        </label>
                        {errors?.price && <p className='text-red-400'>{errors.price}</p>}

                    </div>
                    <div>
                        <label className='label'>
                            <span className='label-text'>Website</span>
                        </label>
                        <input type='url' name='website' className="input w-full input-bordered" placeholder="website"  value={formData.website} onChange={handleChange}/>

                        {errors?.website && <p className='text-red-400'>{errors.website}</p>}
                    </div>
                </div>
                {/* form category and details row */}
                <div className='grid grid-cols-2 gap-2  justify-between'>
                    <div className="form-control">
                        <label>
                            <label className='label'>
                                <span className='label-text'>Service Image</span>
                            </label>
                            <input type='url' name='serviceImage' className="input w-full input-bordered" placeholder="Service image" value={formData.serviceImage} onChange={handleChange}/>
                        </label>
                        {errors?.serviceImage && <p className='text-red-400'>{errors.serviceImage}</p>}
                    </div>
                    <label>
                        <label className='label'>
                            <span className='label-text'>Company Name</span>
                        </label>
                        <input type='text' name='companyName' className="input w-full input-bordered" placeholder="company name" value={formData.companyName} onChange={handleChange}/>
                    {errors?.companyName && <p className='text-red-400'>{errors.companyName}</p>}
                    </label>
                </div>
                {/* form rowf */}
                <div className=' '>
                    <label>
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <input type='text' name='description' className="input w-full input-bordered" placeholder="description" value={formData.description} onChange={handleChange}/>
                    </label>
                    {errors?.description && <p className='text-red-400'>{errors.description}</p>}

                </div>
                <input type="submit" className='btn btn-block mt-2' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;