import React, { useState } from "react";
import "./Agenda.css";

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="agenda-container">
      <h1 className="agenda-title">Agende Seu Horário</h1>
      <p className="agenda-text">Escolha a data e horário desejados para seu corte de cabelo.</p>
      
      <label className="agenda-label">Selecione uma data:</label>
      <input 
        type="date" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
        className="agenda-input"
      />
      
      <label className="agenda-label">Selecione um horário:</label>
      <input 
        type="time" 
        value={selectedTime} 
        onChange={(e) => setSelectedTime(e.target.value)} 
        className="agenda-input"
      />
      
      <button className="agenda-button">Reservar Agora</button>
    </div>
  );
};

export default Agenda;
