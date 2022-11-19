import { Contenedor } from "../context/ContenedorTareas";
import { useContext } from "react";
function MostrarList({ tarea, BorrarTarea }) {
  const valor = useContext(Contenedor);
  console.log(valor);
  return (
    <div className="bg-cyan-900 text-white p-4 rounded-md mt-5">
      <h1 className="text-2xl font-serif capitalize">{tarea.title}</h1>
      <p className="text-gray-400">{tarea.description}</p>
      <button
        className="bg-zinc-800 px-2 py-1 rounded-sm mt-5 hover:bg-slate-600 "
        onClick={() => BorrarTarea(tarea.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default MostrarList;
