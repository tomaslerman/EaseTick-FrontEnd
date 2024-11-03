'use client'
import { useEffect } from "react";
import useTitle from "@/hooks/useTitle";
import Titulo from "@/components/Titulo/Titulo";
import { ProtectedRoutes } from "@/app/utils/ProtectedRoutes";
import Perfil from "@/components/Perfil/Perfil";

export default function PerfilEmpleado() {
    const { setTitulo } = useTitle();
    
    useEffect(() => {
        setTitulo("Mi Perfil");
    }, [setTitulo]);

    return (
        <ProtectedRoutes allowedRoles={[2]}>
            <div>
                <Titulo titulo={"Mi Perfil"} subtitulo={"Gestione su información personal"} />
                <Perfil />
            </div>
        </ProtectedRoutes>
    );
}