export default function SelectedProject({project, onDelete}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
    
  return (
    <div className="w-2/3 px-8 py-16 bg-stone-100 text-stone-900 rounded-l-xl">
      <header className="flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <button className="text-stone-600 hover:text-stone-950"
          onClick={onDelete}>Delete</button>
        </div>
        <p className="mb-4 text-stone-400 ">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap border-b-black ">{project.description}</p>
      </header>
      TASKS
    </div>
  );
}
