'use client'
import Titulo from "@/components/Titulo/Titulo";
import TituloEmpleados from "@/components/TituloEmpleados/TituloEmpleados";
import ListadoEmpleados from "@/components/ListadoEmpleados/ListadoEmpleados";
import { useEffect } from "react";
import useTitle from "@/hooks/useTitle";
import { useTickets } from "@/hooks/useTickets";
export default function Empleados() {
    const { setTitulo } = useTitle()
    const {empleadosEmpresa } = useTickets({ id: 2 });
    useEffect(() => {
        setTitulo("Empleados")
    }, [])

  return (
    <div>
      <Titulo titulo={"Empleados"} subtitulo={"Empleados PRESIS"} />
      <TituloEmpleados />
      <ListadoEmpleados empleados={empleadosEmpresa} />
    </div>
  );
}
