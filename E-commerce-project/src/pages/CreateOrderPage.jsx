import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedComponent from '../utils/ProtectedComponent'; 
import { CreateOrderStep1 } from './CreateOrderStep1';
import PaymentMethods from './PaymentMethods'; 


const StepIndicator = ({ step, currentStep }) => (
    <div className={`p-4 rounded-lg font-semibold text-center ${
        step === currentStep 
            ? 'bg-[#23A6F0] text-white' 
            : step < currentStep 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-500'
    }`}>
        Adım {step}: {step === 1 ? "Adres" : "Ödeme"}
    </div>
);


export default function CreateOrderPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [orderData, setOrderData] = useState({}); 
    const navigate = useNavigate();

    const handleStep1Complete = (shipping, billing) => {
        setOrderData(prev => ({ 
            ...prev, 
            shippingAddress: shipping, 
            billingAddress: billing 
        }));
        setCurrentStep(2);
    };

    const handleStep2Complete = (paymentMethod) => {
        setOrderData(prev => ({ 
            ...prev, 
            paymentMethod: paymentMethod 
        }));
        alert("Sipariş verileri toplandı. Son Onay/Ödeme API Adımına geçilebilir.");
    };

    return (
        <ProtectedComponent>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-[#252B42] mb-8">Sipariş Oluşturma Süreci</h1>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <StepIndicator step={1} currentStep={currentStep} />
                    <StepIndicator step={2} currentStep={currentStep} />
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {currentStep === 1 && (
                        <CreateOrderStep1 onNext={handleStep1Complete} />
                    )}
                    {currentStep === 2 && (
                        <PaymentMethods 
                            onNextStep={handleStep2Complete} 
                            setPaymentMethod={(card) => setOrderData(prev => ({ ...prev, selectedCard: card }))}
                        />
                    )}
                </div>
            </div>
        </ProtectedComponent>
    );
}