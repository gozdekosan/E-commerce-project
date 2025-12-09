import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from "../redux/actions/loginActions"; 

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector(state => state.user);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(formData, navigate));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-[#252B42] mb-6">Giriş Yap</h2>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-posta</label>
                        <input
                            type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="E-posta adresiniz"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Şifre</label>
                        <input
                            type="password" id="password" name="password" value={formData.password} onChange={handleChange} required
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Şifreniz"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit" disabled={loading}
                            className="bg-[#23A6F0] hover:bg-[#1E77B5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors disabled:bg-gray-400"
                        >
                            {loading ? 'Yükleniyor...' : 'Giriş Yap'}
                        </button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Hesabınız yok mu? <a href="/signup" className="text-[#23A6F0] hover:underline">Kaydolun</a>
                </p>
            </div>
        </div>
    );
}