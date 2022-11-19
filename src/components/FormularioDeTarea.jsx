import { useState } from "react";
function FormularioDeTarea({ nuevaTarea }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveForm = (e) => {
    e.preventDefault();

    nuevaTarea(title, description);
    setDescription("");
    setTitle("");
  };
  return (
    <div className="max-w-md mx-auto text-blue-50 mt-10">
      <form onSubmit={saveForm} className="bg-zinc-700 p-12 ">
        <h1 className="text-3xl font-serif text-slate-50 ">Crear Tarea</h1>
        <input
          className="bg-slate-500 p-3 w-full mb-3 placeholder-zinc-50"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Titulo De La Tarea"
          type="text"
          autoFocus
          required
        />
        <textarea
          className="bg-slate-500 p-3 w-full mb-3  placeholder-zinc-50"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="Ingrese Una Descripcion"
          type="text"
        ></textarea>

        <button className="bg-slate-500 p-3 w-full mb-3">Guardar</button>
      </form>
    </div>
  );
}

export default FormularioDeTarea;
