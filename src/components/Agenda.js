import React from "react";
import { CalendarDays, Phone, Mail, Clock } from "lucide-react";
import "./Agenda.css";

const Agenda = () => {
  return (
    <section id="agenda" className="agenda-container">
      <div className="agenda-content single-card styled">
        <h2 className="agenda-title">Agende Já</h2>
        <p className="agenda-subtitle">Apenas trabalhamos sobre reservas</p>
        <div className="agenda-info-group">
        <div className="agenda-info">
            <CalendarDays className="agenda-icon" />
            <span className="agenda-label">BUK</span>
            <a 
              href="https://buk.pt/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="agenda-value"
            >
              Marcação via BUK
            </a>
          </div>
          <div className="agenda-info">
            <Phone className="agenda-icon" />
            <span className="agenda-label">TELEFONE</span>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="agenda-value">+351 912 345 678</a>
          </div>
          <div className="agenda-info">
            <Clock className="agenda-icon" />
            <span className="agenda-label">HORÁRIO</span>
            <span className="agenda-value">Terça a Sábado: 09h às 20h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
