import React, { useState } from 'react';
import axiosInstance from '../api/AxiosInstance.js';
import { CreditCard, X } from 'react-feather';

const emptyCard = {
    card_no: '',
    expire_month: '',
    expire_year: '',
    name_on_card: '',
};

export default function NewCardForm({ currentCard, onCancel, onSuccess }) {
    const [formData, setFormData] = useState(currentCard || emptyCard);
    const [isLoading, setIsLoading] = useState(false);
    const isEditing = !!currentCard?.id;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
       
        const apiPayload = {
            card_no: formData.card_no.replace(/\s/g, ''), 
            expire_month: parseInt(formData.expire_month, 10),
            expire_year: parseInt(formData.expire_year, 10),
            name_on_card: formData.name_on_card,
        };

        if (isEditing) {
            apiPayload.id = formData.id;
        }

        try {
            if (isEditing) {

                await axiosInstance.put('/user/card', apiPayload);
                alert('Kart başarıyla güncellendi.');
            } else {
  
                await axiosInstance.post('/user/card', apiPayload);
                alert('Yeni kart başarıyla eklendi.');
            }
            onSuccess();
        } catch (error) {
            console.error('Kart kaydetme/güncelleme hatası:', error.response?.data || error.message);
            alert(`İşlem başarısız: ${error.response?.data?.message || 'Bir hata oluştu.'}`);
        } finally {
            setIsLoading(false);
            onCancel();
        }
    };


    const handleCardNoChange = (e) => {
        let value = e.target.value.replace(/\s/g, ''); 
        if (value.length > 16) value = value.slice(0, 16);
        

        const formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        setFormData(prev => ({ ...prev, card_no: formattedValue }));
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                <div className="flex justify-between items-center mb-6 border-b pb-3">
                    <h3 className="text-xl font-bold text-[#252B42]">
                        {isEditing ? 'Kartı Düzenle' : 'Yeni Kart Ekle'}
                    </h3>
                    <button onClick={onCancel} className="text-gray-500 hover:text-red-500">
                        <X size={24} />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <input 
                        type="text" 
                        name="card_no" 
                        value={formData.card_no} 
                        onChange={handleCardNoChange} 
                        placeholder="Kart Numarası"
                        maxLength="19" 
                        required 
                        className="w-full border p-3 rounded focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />

                    <input 
                        type="text" 
                        name="name_on_card" 
                        value={formData.name_on_card} 
                        onChange={handleChange} 
                        placeholder="Kart Üzerindeki İsim Soyisim"
                        required 
                        className="w-full border p-3 rounded"
                    />

                    <div className="flex space-x-4">
                        <input 
                            type="number" 
                            name="expire_month" 
                            value={formData.expire_month} 
                            onChange={handleChange} 
                            placeholder="Ay (MM)"
                            min="1" max="12"
                            required 
                            className="w-1/2 border p-3 rounded"
                        />
                         <input 
                            type="number" 
                            name="expire_year" 
                            value={formData.expire_year} 
                            onChange={handleChange} 
                            placeholder="Yıl (YYYY)"
                            min={new Date().getFullYear()} max={new Date().getFullYear() + 10}
                            required 
                            className="w-1/2 border p-3 rounded"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-[#23A6F0] text-white py-3 rounded-lg font-bold hover:bg-[#1E77B5] transition disabled:bg-gray-400"
                    >
                        {isLoading ? 'Kaydediliyor...' : (isEditing ? 'Kartı Güncelle' : 'Kartı Kaydet')}
                    </button>
                </form>
            </div>
        </div>
    );
}