'use client';
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBarCliente.module.css';
import { ProtectedRoutes } from '@/app/utils/ProtectedRoutes';
import { TokenContext } from '@/context/TokenContext'; // Importa tu contexto de Token

const navItems = [
  { href: "/FlowCliente/home", src: "/imagenes/home.png", alt: "Home", label: "Inicio" },
  { href: "/FlowCliente/ver-ticket", src: "/imagenes/ticket.png", alt: "Tickets", label: "Tickets" },
  { href: "/FlowCliente/mi-equipo", src: "/imagenes/cliente.png", alt: "Clientes", label: "Clientes" },
  { href: "/FlowCliente/estadistica", src: "/imagenes/estadistica.png", alt: "Estadisticas", label: "Estadísticas" },
  { href: "/FlowCliente/configuracion", src: "/imagenes/configuracion.png", alt: "Configuracion", label: "Configuración" },
];

const NavbarCliente = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { userRole } = useContext(TokenContext); // Obtén el rol del usuario desde el contexto

  // Si el usuario no es empleado (rol 2), no renderiza el navbar
  if (userRole !== 1) return null;

  return (
    <ProtectedRoutes allowedRoles={[1]}> {/* Solo empleados (rol 2) pueden ver esto */}
      <div className={styles.navBar}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={styles.navItem}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={item.href} className={styles.navLink}>
              <Image src={item.src} alt={item.alt} width={32} height={32} />
              {hoveredItem === index && <span className={styles.hoverText}>{item.label}</span>}
            </Link>
          </div>
        ))}
        <div className={`${styles.navItem} ${styles.logoItem}`}>
          <Image src="/imagenes/LogoVectorizadoGris_EaseTick.png" alt="LogoEaseTick" width={40} height={40} />
        </div>
      </div>
    </ProtectedRoutes>
  );
};

export default NavbarCliente;
