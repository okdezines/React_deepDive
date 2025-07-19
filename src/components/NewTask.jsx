import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
      if (enteredTask.trim() === "") {
        // handle error, e.g., show a message to the user
        alert("Please enter a valid task.");
        return;
      }
    setEnteredTask("");
    onAdd(enteredTask);
    // Here you would typically also want to add the task to the project
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Tasks
      </button>
    </div>
  );
}
