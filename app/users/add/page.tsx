"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useFormik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaListUl, FaPlus } from 'react-icons/fa'
import toast from "react-hot-toast";
import DashboardLayout from '@/components/common/layout'

const initialValues = {
  phone: '',
  first_name: "",
  last_name: "",
  address: '',
  email: '',
}
const Page = () => {

  const [loading, setLoading] = useState('');

  const onSubmit = async (values, actions) => {
    try {
      toast.success("User Created Successfully!");
      // setLoading(true);
      // const response = await dispatch(addContentSliceAsync(values));
      // setLoading(false);
      // actions.resetForm();
      // return response.data;
    } catch (error) {
      // setLoading(false);
      console.error('User error:', error);
    }
  };
  const { values, errors, touched, handleBlur, setFieldValue, handleSubmit, setFieldTouched, handleChange } = useFormik({
    initialValues,
    // validationSchema: contentSchema,
    onSubmit,
  });
  return (
    <DashboardLayout>
      <div className="flex justify-between px-4 mb-10 ">
        <div className="flex items-center gap-4">
          <div className="bg-gradient p-4 rounded-md w-14 text-white">
            <FaPlus size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold">Add User</p>
            <p className='text-sm text-gray-500'>Here you can add new user</p>
          </div>
        </div>
        <Link href={'/users'}>
          <Button className="bg-gradient"><FaListUl />User List</Button>
        </Link>
      </div>

      <div className="p-4 bg-slate-100 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div>
              <Label className="">First Name <span className="text-red-600 items-center text-lg">*</span></Label>
              <Input
                className="my-2"
                placeholder='Enter First Name'
                name='first_name'
                value={values.first_name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.first_name && touched.first_name && (
                <p className="error-message mt-1" style={{ color: "red" }}>
                  {errors.first_name}
                </p>
              )}
            </div>
            <div>
              <Label className="">Last Name <span className="text-red-600 items-center text-lg">*</span></Label>
              <Input
                className="my-2"
                placeholder='Enter Last Name'
                name='last_name'
                value={values.last_name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.last_name && touched.last_name && (
                <p className="error-message mt-1" style={{ color: "red" }}>
                  {errors.last_name}
                </p>
              )}
            </div>
            <div>
              <Label className="">Phone <span className="text-red-600 items-center text-lg">*</span></Label>
              <Input
                className="my-2"
                placeholder='Enter Phone no.'
                name='phone'
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.phone && touched.phone && (
                <p className="error-message mt-1" style={{ color: "red" }}>
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <Label className="">Email <span className="text-red-600 items-center text-lg">*</span></Label>
              <Input
                className="my-2"
                placeholder='Enter Email'
                name='email'
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <p className="error-message mt-1" style={{ color: "red" }}>
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <Label className="">Address <span className="text-red-600 items-center text-lg">*</span></Label>
              <Textarea
                className="my-2"
                placeholder='Enter Address'
                name='address'
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.address && touched.address && (
                <p className="error-message mt-1" style={{ color: "red" }}>
                  {errors.address}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-4 my-6">
            <Button className="bg-gradient" type="submit">Submit</Button>
            <Button className="bg-red-500 hover:bg-red-400" type="reset">Cancle</Button>
          </div>
        </form>

      </div>
    </DashboardLayout>
  )
}

export default Page