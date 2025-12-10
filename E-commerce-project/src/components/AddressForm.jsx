import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/AxiosInstance.js';
import { X } from 'react-feather';

const CITIES = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

const emptyAddress = {
    title: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
    district: '',
    neighborhood: '',
    address: '', 
};

export default function AddressForm({ currentAddress, onSave, onCancel, onSuccess }) {
    const [formData, setFormData] = useState(currentAddress || emptyAddress);
    const [isLoading, setIsLoading] = useState(false);
    const isEditing = !!currentAddress?.id;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const apiPayload = {
            title: formData.title,
            name: formData.name,
            surname: formData.surname,
            phone: formData.phone,
            city: formData.city.toLowerCase(), 
            district: formData.district.toLowerCase(),
            neighborhood: formData.neighborhood,
            address: formData.address 
        };

       
        if (isEditing) {
            apiPayload.id = formData.id;
        }

        try {
            if (isEditing) {
                await axiosInstance.put('/user/address', apiPayload);
                alert(`Adres başarıyla güncellendi: ${formData.title}`);
            } else {
                await axiosInstance.post('/user/address', apiPayload);
                alert(`Yeni adres başarıyla eklendi: ${formData.title}`);
            }
            onSuccess(); 
        } catch (error) {
            console.error('Adres kaydetme/güncelleme hatası:', error.response?.data || error.message);
            alert(`İşlem başarısız: ${error.response?.data?.message || 'Bir hata oluştu.'}`);
        } finally {
            setIsLoading(false);
            onCancel();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
                <div className="flex justify-between items-center mb-6 border-b pb-3">
                    <h3 className="text-xl font-bold text-[#252B42]">
                        {isEditing ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
                    </h3>
                    <button onClick={onCancel} className="text-gray-500 hover:text-red-500">
                        <X size={24} />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        placeholder="Adres Başlığı (Ev, İş vb.)"
                        required 
                        className="w-full border p-3 rounded focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />

                    <div className="flex space-x-4">
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Adınız"
                            required 
                            className="w-1/2 border p-3 rounded"
                        />
                        <input 
                            type="text" 
                            name="surname" 
                            value={formData.surname} 
                            onChange={handleChange} 
                            placeholder="Soyadınız"
                            required 
                            className="w-1/2 border p-3 rounded"
                        />
                    </div>

                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="Telefon Numarası (Örn: 05xx...)"
                        required 
                        className="w-full border p-3 rounded"
                    />

                    <select 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        required
                        className="w-full border p-3 rounded bg-white focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    >
                        <option value="">İl Seçiniz</option>
                        {CITIES.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>

                    <input 
                        type="text" 
                        name="district" 
                        value={formData.district} 
                        onChange={handleChange} 
                        placeholder="İlçe (District)"
                        required 
                        className="w-full border p-3 rounded"
                    />

                    <input 
                        type="text" 
                        name="neighborhood" 
                        value={formData.neighborhood} 
                        onChange={handleChange} 
                        placeholder="Mahalle (Neighborhood)"
                        required 
                        className="w-full border p-3 rounded"
                    />

                    <textarea 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder="Açık Adres Detayları (Cadde, Bina No, Daire No)"
                        rows="3"
                        required 
                        className="w-full border p-3 rounded resize-none"
                    />

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-[#23A6F0] text-white py-3 rounded-lg font-bold hover:bg-[#1E77B5] transition disabled:bg-gray-400"
                    >
                        {isLoading ? 'Kaydediliyor...' : (isEditing ? 'Adresi Güncelle' : 'Adresi Kaydet')}
                    </button>
                </form>
            </div>
        </div>
    );
}