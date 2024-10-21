'use client';

import React, { useState, useEffect } from 'react';
import Chat from '@/components/Chat/Chat';
import { useParams } from 'next/navigation';
import axios from 'axios';

const TicketPage = () => {
    const { id } = useParams();
    const [ticketInfo, setTicketInfo] = useState(null);

    useEffect(() => {
        const fetchTicketInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/tickets/${id}`);
                setTicketInfo(response.data);
            } catch (error) {
                console.error('Error al obtener información del ticket:', error);
            }
        };

        fetchTicketInfo();
    }, [id]);

    if (!ticketInfo) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <Chat 
                idTicket={id} 
                asunto={ticketInfo.asunto} 
                mensajeInicial={ticketInfo.mensaje}
                prioridad={ticketInfo.prioridad.nombre}
                tipo={ticketInfo.tipo.nombre}
            />
        </div>
    );
};

export default TicketPage;
