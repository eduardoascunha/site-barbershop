import React from "react";
import { CalendarDays, Phone, Mail, Clock } from "lucide-react";
import "./Agenda.css";

const Agenda = () => {
  return (
    <section id="agenda" className="agenda-container">
      <div className="agenda-content">
        <h2 className="agenda-title">Agenda</h2>
        <div className="agenda-list">
          <div className="agenda-item">
            <div className="agenda-info">
              <Clock className="agenda-icon" />
              <span className="agenda-label">Horário</span>
            </div>
            <span className="agenda-value">00:00 - 23:00</span>
          </div>
          <div className="agenda-item">
            <div className="agenda-info">
              <Phone className="agenda-icon" />
              <span className="agenda-label">Telefone</span>
            </div>
            <span className="agenda-value">XXXXXXXXXX</span>
          </div>
          <div className="agenda-item">
            <div className="agenda-info">
              <Mail className="agenda-icon" />
              <span className="agenda-label">Email</span>
            </div>
            <span className="agenda-value">email@email.com</span>
          </div>
          <div className="agenda-item">
            <div className="agenda-info">
              <CalendarDays className="agenda-icon" />
              <span className="agenda-label">Marcação</span>
            </div>
            <a href="#" className="agenda-link">
              Agende pelo Google Calendário
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;