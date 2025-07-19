import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      <p className="text-sm mb-4 text-stone-400 italic">
        You can add tasks to your project here.
      </p>
      {tasks.length > 0 && 
       <ul className="list-none p-0">
        {tasks.map((task) => (
          <li key={task.id} className="my-2">
            <div className="flex items-center justify-between">
              <span className="text-stone-600">{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-600 hover:text-stone-950"
              >
                Clear
              </button>
            </div>
          </li>
        ))}
       </ul>}
    </section>
  );
}
