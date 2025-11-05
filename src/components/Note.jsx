

export default function Note({ notes, handleDelete }) {
  
  
  return (
    <section className="my-5">
       {notes.map((note) => (
        <div key={note.id} className="border-l-5 border-[#1c0333] text-black  rounded-md bg-white p-3 mb-5 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Title: {note.title}</h2>
              <div className="flex items-center gap-3">
                <button>
                  Edit
                </button>
                <button onClick={() => handleDelete(note.id)} className="text-red-500">
                  Delete
                </button>
              </div>
            </div>
            <p>Priority: {note.priority}</p>
            <p>Category: {note.category}</p>
            <p>Description: {note.description}</p>
        </div>
       ))}
    </section>
  )
}
