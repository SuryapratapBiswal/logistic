"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormik } from 'formik';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaQuestion } from "react-icons/fa";

const initialValues = {
    old_password: '',
    new_password: "",
    confirm_password: "",
};

const Page = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = async (values, actions) => {
        try {
            toast.success("Password Changed Successfully!");
            // setLoading(true);
            // const response = await dispatch(addContentSliceAsync(values));
            // setLoading(false);
            // actions.resetForm();
            // return response.data;
        } catch (error) {
            console.error('User error:', error);
        }
    };

    const togglePasswordVisibility = (setFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
        setFunction((prev: boolean) => !prev);
    };
    
    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues,
        // validationSchema: contentSchema,
        onSubmit,
    });

    return (
        <div>
            <div className="flex justify-between px-4 mb-10">
                <div className="flex items-center gap-4">
                    <div className="bg-gradient p-4 rounded-md w-14 text-white">
                        <FaQuestion size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Forgot Password</p>
                        <p className='text-sm text-gray-500'>Here you can change your password</p>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-slate-100 shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div>
                            <Label>Old Password<span className="text-red-600 items-center text-lg">*</span></Label>
                            <div className="relative">
                                <Input
                                    className="my-2"
                                    placeholder='Enter old password'
                                    name='old_password'
                                    type={showOldPassword ? 'text' : 'password'}
                                    value={values.old_password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility(setShowOldPassword)}
                                    className="absolute right-3 top-3"
                                >
                                    {showOldPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                            {errors.old_password && touched.old_password && (
                                <p className="error-message mt-1" style={{ color: "red" }}>
                                    {errors.old_password}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>New Password<span className="text-red-600 items-center text-lg">*</span></Label>
                            <div className="relative">
                                <Input
                                    className="my-2"
                                    placeholder='Enter new password'
                                    name='new_password'
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={values.new_password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility(setShowNewPassword)}
                                    className="absolute right-3 top-3"
                                >
                                    {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                            {errors.new_password && touched.new_password && (
                                <p className="error-message mt-1" style={{ color: "red" }}>
                                    {errors.new_password}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Confirm Password<span className="text-red-600 items-center text-lg">*</span></Label>
                            <div className="relative">
                                <Input
                                    className="my-2"
                                    placeholder='Enter confirm password'
                                    name='confirm_password'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={values.confirm_password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
                                    className="absolute right-3 top-3"
                                >
                                    {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                            {errors.confirm_password && touched.confirm_password && (
                                <p className="error-message mt-1" style={{ color: "red" }}>
                                    {errors.confirm_password}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 my-6">
                        <Button className="bg-gradient" type="submit">Submit</Button>
                        <Button className="bg-red-500 hover:bg-red-400" type="reset">Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Page;
