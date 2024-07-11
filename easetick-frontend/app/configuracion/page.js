'use client'
import Titulo from "@/components/Titulo/Titulo";
import { useEffect } from "react";
import useTitle from "@/hooks/useTitle";

export default function estadistica() {
    const { setTitulo } = useTitle()

    useEffect(() => {
        setTitulo("Configuracion")
    }, [])

  return (
    <div>
      <Titulo titulo={"Tu configuracion"} subtitulo={"Administrá tu cuenta"} />
    </div>
  );
}
