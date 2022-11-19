import MostrarList from "./MostrarList";
export function Task(props) {
  if (props.tarea.length === 0) {
    return (
      <h1 className="text-red-700 text-5xl font-bold text-center">
        no hay tareas aun
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-3">
      {" "}
      {props.tarea.map((tarea) => {
        return (
          <MostrarList
            key={tarea.id}
            tarea={tarea}
            BorrarTarea={props.BorrarTarea}
          />
        );
      })}
    </div>
  );
}

export default Task;
