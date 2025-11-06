import { FaTrash } from "react-icons/fa";



export default function Note({ notes, handleDelete }) {
  
  return (
    <section className="my-5">
       {notes.map((note) => (
         <div key={note.id} className="border-l-5  text-black  rounded-md bg-white p-3 mb-5 space-y-2"
           style={{
             borderLeftColor:
               note.priority === 'High'
                ? "red"
                : note.priority === 'Medium'
                ? 'yellow' 
                : 'green'
           }}
         >
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Title: {note.title}</h2>
              <div className="flex items-center gap-3">
                <button onClick={() => handleDelete(note.id)} className="text-red-500">
                  <FaTrash  />
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
