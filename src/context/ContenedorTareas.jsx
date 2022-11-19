import { createContext } from "react";

export const Contenedor = createContext();

export function ContenedorTareas(props) {
  let x = 20;
  return <Contenedor.Provider value={x}>{props.children}</Contenedor.Provider>;
}

export default ContenedorTareas;
