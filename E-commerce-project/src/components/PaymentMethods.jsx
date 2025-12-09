import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/AxiosInstance';
import NewCardForm from '../components/NewCardForm';
import { CreditCard, Edit, Trash2, PlusCircle } from 'react-feather';


export default function PaymentMethods({ onNextStep, setPaymentMethod }) {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const [cardToEdit, setCardToEdit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCards = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get('/user/card');
            setCards(response.data); 
          
            if (!selectedCard && response.data.length > 0) {
                 setSelectedCard(response.data[0]);
                 setPaymentMethod(response.data[0]);
            }
        } catch (error) {
            console.error('Kartlar çekilirken hata oluştu:', error.response?.data || error.message);
            setCards([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const handleDeleteCard = async (id) => {
        if (!window.confirm("Bu kartı silmek istediğinizden emin misiniz?")) {
            return;
        }
        try {
            await axiosInstance.delete(`/user/card/${id}`);
            alert('Kart başarıyla silindi.');
            fetchCards(); 
            

            if (selectedCard?.id === id) setSelectedCard(null);
        } catch (error) {
            console.error('Kart silme hatası:', error.response?.data || error.message);
            alert('Silme işlemi başarısız oldu.');
        }
    };

    const handleSelectCard = (card) => {
        setSelectedCard(card);
        setPaymentMethod(card); 
    };

    const handleAddNewCard = () => {
        setCardToEdit(null);
        setFormOpen(true);
    };

    const handleEditCard = (card) => {
        setCardToEdit(card);
        setFormOpen(true);
    };
    
    const maskCardNumber = (cardNumber) => {
        if (!cardNumber) return 'XXXX XXXX XXXX XXXX';
        const stripped = cardNumber.replace(/\s/g, '');
        return '**** **** **** ' + stripped.slice(-4);
    };


    if (isLoading) {
        return <div className="text-center py-10 text-[#252B42]">Kartlar yükleniyor...</div>;
    }

    return (
        <div className="bg-gray-50 p-8 rounded-lg">
            
            <h2 className="text-2xl font-bold text-[#252B42] mb-6 border-b pb-3">Ödeme Yöntemini Seçin</h2>

            {formOpen && (
                <NewCardForm 
                    currentCard={cardToEdit}
                    onCancel={() => setFormOpen(false)}
                    onSuccess={fetchCards}
                />
            )}

            <div className="space-y-4">
                {cards.map((card) => (
                    <div 
                        key={card.id} 
                        className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer transition duration-200 ${
                            selectedCard?.id === card.id ? 'border-4 border-[#23A6F0] bg-blue-50' : 'hover:border-[#23A6F0] bg-white'
                        }`}
                        onClick={() => handleSelectCard(card)}
                    >
                        <div className="flex items-center space-x-4">
                            <CreditCard size={24} className={selectedCard?.id === card.id ? 'text-[#23A6F0]' : 'text-gray-500'} />
                            <div>
                                <h3 className="text-lg font-semibold text-[#252B42]">{card.nameOnCard}</h3>
                                <p className="text-sm text-gray-600">{maskCardNumber(card.cardNo)}</p>
                                <p className="text-xs text-gray-500">Geçerlilik: {card.expireMonth}/{card.expireYear}</p>
                            </div>
                        </div>
  
                        <div className="flex space-x-2">
                            <button onClick={(e) => { e.stopPropagation(); handleEditCard(card); }} className="text-gray-500 hover:text-green-500 p-1 rounded">
                                <Edit size={18} />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); handleDeleteCard(card.id); }} className="text-gray-500 hover:text-red-500 p-1 rounded">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}

                <button 
                    onClick={handleAddNewCard}
                    className="w-full border-2 border-dashed border-gray-300 text-gray-500 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition"
                >
                    <PlusCircle size={20} />
                    <span className="font-semibold">Yeni Kart Ekle</span>
                </button>
            </div>
            
            <div className="mt-8">
                <button
                    onClick={() => onNextStep(selectedCard)}
                    className="w-full bg-[#23A6F0] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#1E77B5] transition disabled:bg-gray-400"
                    disabled={!selectedCard}
                >
                    Ödeme Bilgileriyle Devam Et
                </button>
            </div>
        </div>
    );
}