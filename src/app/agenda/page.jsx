"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import { motion } from 'framer-motion';
import "./agenda.css";
import 'react-calendar/dist/Calendar.css';

export default function Agenda() {
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [step, setStep] = useState(1);

    const services = [
        { id: 1, name: "Corte de Cabelo", duration: 30, price: 50 },
        { id: 2, name: "Barba", duration: 20, price: 30 },
        { id: 3, name: "Corte + Barba", duration: 45, price: 70 },
        { id: 4, name: "Hidratação", duration: 15, price: 25 },
        { id: 5, name: "Pintura", duration: 60, price: 100 },
    ];

    const timeSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
    ];

    const handleDateChange = (newDate) => {
        setDate(newDate);
        setStep(2);
    };

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setStep(3);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(4);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você implementaria a lógica para salvar o agendamento
        alert('Agendamento realizado com sucesso!');
        setStep(1);
        setSelectedTime(null);
        setSelectedService(null);
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold mb-6 text-gradient">Agende seu Horário</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Escolha o melhor dia e horário para ser atendido com todo o cuidado que você merece.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Progress Steps */}
                    <div className="flex justify-between mb-12">
                        {[1, 2, 3, 4].map((stepNumber) => (
                            <div
                                key={stepNumber}
                                className={`flex items-center ${
                                    stepNumber < step ? 'text-yellow-400' : 'text-gray-600'
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                                        stepNumber <= step
                                            ? 'border-yellow-400 bg-yellow-400 text-black'
                                            : 'border-gray-600'
                                    }`}
                                >
                                    {stepNumber}
                                </div>
                                {stepNumber < 4 && (
                                    <div
                                        className={`w-24 h-1 ${
                                            stepNumber < step ? 'bg-yellow-400' : 'bg-gray-600'
                                        }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Content */}
                    <motion.div
                        className="bg-gray-900 rounded-lg p-8 shadow-xl"
                        {...fadeIn}
                    >
                        {step === 1 && (
                            <div className="text-center">
                                <h2 className="text-2xl font-bold mb-6">Escolha a Data</h2>
                                <div className="calendar-container">
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={date}
                                        minDate={new Date()}
                                        className="custom-calendar"
                                    />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Escolha o Serviço</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.map((service) => (
                                        <motion.div
                                            key={service.id}
                                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                                                selectedService?.id === service.id
                                                    ? 'bg-yellow-400 text-black'
                                                    : 'bg-gray-800 hover:bg-gray-700'
                                            }`}
                                            onClick={() => handleServiceSelect(service)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <h3 className="font-bold">{service.name}</h3>
                                            <p className="text-sm">
                                                Duração: {service.duration} min | R$ {service.price}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Escolha o Horário</h2>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                                    {timeSlots.map((time) => (
                                        <motion.button
                                            key={time}
                                            className={`p-3 rounded-lg text-center ${
                                                selectedTime === time
                                                    ? 'bg-yellow-400 text-black'
                                                    : 'bg-gray-800 hover:bg-gray-700'
                                            }`}
                                            onClick={() => handleTimeSelect(time)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {time}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Confirme seu Agendamento</h2>
                                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                                    <p className="mb-2">
                                        <strong>Data:</strong> {date.toLocaleDateString()}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Serviço:</strong> {selectedService.name}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Horário:</strong> {selectedTime}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Valor:</strong> R$ {selectedService.price}
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Seu nome"
                                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="tel"
                                            placeholder="Seu telefone"
                                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-3 rounded-lg"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Confirmar Agendamento
                                    </motion.button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                .custom-calendar {
                    width: 100%;
                    background: #1a1a1a;
                    border: none;
                    border-radius: 8px;
                    padding: 1rem;
                }

                .custom-calendar .react-calendar__tile {
                    color: white;
                    padding: 1rem;
                }

                .custom-calendar .react-calendar__tile:enabled:hover,
                .custom-calendar .react-calendar__tile:enabled:focus {
                    background: #FFD700;
                    color: black;
                }

                .custom-calendar .react-calendar__tile--active {
                    background: #FFD700;
                    color: black;
                }

                .custom-calendar .react-calendar__navigation button {
                    color: white;
                }

                .custom-calendar .react-calendar__navigation button:enabled:hover,
                .custom-calendar .react-calendar__navigation button:enabled:focus {
                    background: #FFD700;
                    color: black;
                }
            `}</style>
        </div>
    );
}
