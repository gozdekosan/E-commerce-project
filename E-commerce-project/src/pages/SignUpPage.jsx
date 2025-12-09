import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createSignupSchema } from '../validation/ValidationSchema';
import { ClipLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../api/AxiosInstance.js';


const DEFAULT_CUSTOMER_ROLE_ID = 2; 

export default function SignupPage() {
    const navigate = useNavigate();
    const location = useLocation();
    

    const [roles, setRoles] = useState([]);
    const [currentRoleId, setCurrentRoleId] = useState(DEFAULT_CUSTOMER_ROLE_ID);
    const [isLoading, setIsLoading] = useState(false);
    const validationSchema = createSignupSchema(currentRoleId);
    
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors, isValid } 
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            role_id: DEFAULT_CUSTOMER_ROLE_ID,
            store: { name: '', phone: '', tax_no: '', bank_account: '' },
        },
        mode: 'onTouched',
    });


    const watchedRoleId = watch("role_id");

    const isStore = watchedRoleId === 3; 


    useEffect(() => {
        setCurrentRoleId(watchedRoleId);
    }, [watchedRoleId]);


    useEffect(() => {
        axiosInstance.get('/roles')
            .then(res => {
                setRoles(res.data);
            })
            .catch(err => {
                console.error("Failed to fetch roles:", err);
                toast.error("Failed to load roles.");
            });
    }, []);

    const onSubmit = async (data) => {
        setIsLoading(true);

        let apiData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id,
        };


        if (isStore) {
            apiData = { ...apiData, store: data.store };
        }

        delete apiData.confirmPassword;

        try {
            const response = await axiosInstance.post('/signup', apiData);
            console.log("Successful registration:", response.data);
       
            const from = location.state?.from || "/login"; 
            
            navigate(from, { 
                state: { 
                    signupSuccess: true,
                    message: "You need to click the link in the email to activate your account!"
                }, 
                replace: true 
            });

        } catch (error) {
            console.error("Registration error:", error);
            const errorMessage = error.response?.data?.message || "An error occurred during registration. Please check your information.";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <Toaster />
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg transition-all duration-300">
                <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-800">New User Registration</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
    
                    <div className="flex flex-col">
                        <label htmlFor="role_id" className="text-sm font-medium text-gray-700 mb-1">Select Role</label>
                        <select
                            id="role_id"
                            {...register("role_id", { valueAsNumber: true })}
                            className={`border ${errors.role_id ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                        >
                         
                            {roles.length === 0 && <option value={DEFAULT_CUSTOMER_ROLE_ID} disabled>Roles Loading...</option>}
                            
                            {roles.map(role => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                        {errors.role_id && <p className="text-red-500 text-xs mt-1">{errors.role_id.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="First and Last Name"
                            {...register("name")}
                            className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="example@mail.com"
                            {...register("email")}
                            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Min 8 chars (special/upper/lower case, number)"
                            {...register("password")}
                            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Re-enter password"
                            {...register("confirmPassword")}
                            className={`border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    {isStore && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4 transition-all duration-300">
                            <h3 className="text-md font-semibold text-blue-700 mb-4">Store Information</h3>
                            
                            <div className="flex flex-col mb-4">
                                <label htmlFor="store-name" className="text-sm font-medium text-gray-700 mb-1">Store Name</label>
                                <input
                                    id="store-name"
                                    type="text"
                                    placeholder="Minimum 3 characters"
                                    {...register("store.name")}
                                    className={`border ${errors.store?.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                                />
                                {errors.store?.name && <p className="text-red-500 text-xs mt-1">{errors.store.name.message}</p>}
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="store-phone" className="text-sm font-medium text-gray-700 mb-1">Phone (TR format)</label>
                                <input
                                    id="store-phone"
                                    type="text"
                                    placeholder="e.g., 5xx xxx xx xx"
                                    {...register("store.phone")}
                                    className={`border ${errors.store?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                                />
                                {errors.store?.phone && <p className="text-red-500 text-xs mt-1">{errors.store.phone.message}</p>}
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="store-tax_no" className="text-sm font-medium text-gray-700 mb-1">Tax ID</label>
                                <input
                                    id="store-tax_no"
                                    type="text"
                                    placeholder="TXXXXVXXXXXX format"
                                    {...register("store.tax_no")}
                                    className={`border ${errors.store?.tax_no ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                                />
                                {errors.store?.tax_no && <p className="text-red-500 text-xs mt-1">{errors.store.tax_no.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="store-bank_account" className="text-sm font-medium text-gray-700 mb-1">Bank Account (IBAN)</label>
                                <input
                                    id="store-bank_account"
                                    type="text"
                                    placeholder="Valid IBAN address"
                                    {...register("store.bank_account")}
                                    className={`border ${errors.store?.bank_account ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
                                />
                                {errors.store?.bank_account && <p className="text-red-500 text-xs mt-1">{errors.store.bank_account.message}</p>}
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={!isValid || isLoading}
                        className={`
                            flex justify-center items-center py-3 rounded-lg font-semibold text-white transition duration-300
                            ${!isValid || isLoading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            }
                        `}
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            'Register'
                        )}
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium transition duration-150">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}