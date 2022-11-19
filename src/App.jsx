import Culo from "./components/Task";
import FormularioDeTarea from "./components/FormularioDeTarea";
import { tarea as data } from "./tareas";
import { useState, useEffect } from "react";
export const App = () => {
  const [tarea, setTarea] = useState([]);

  useEffect(() => {
    setTarea(data);
  }, []);

  const BorrarTarea = (tareaId) => {
    setTarea(tarea.filter((tarea) => tarea.id !== tareaId));
  };

  const nuevaTarea = (newTitle, newDrescription) => {
    setTarea([
      ...tarea,
      {
        id: tarea.length,
        title: newTitle,
        description: newDrescription,
      },
    ]);
    console.log(newTitle);
  };

  return (
    <main  >
      <div className="container mx-auto " >
        {" "}
        <FormularioDeTarea  nuevaTarea={nuevaTarea} />
        <Culo tarea={tarea} BorrarTarea={BorrarTarea} />
      </div>
    </main>
  );
};
