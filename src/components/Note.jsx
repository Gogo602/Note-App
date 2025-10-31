

export default function Note({notes}) {

  return (
    <section className="my-5">
       {notes.map((note) => (
        <div key={note.id} className="border-l-5 border-[#1c0333] text-black  rounded-md bg-white p-3 mb-5 space-y-2">
            <h2 className="font-bold">Title: {note.title}</h2>
            <p>Priority: {note.priority}</p>
            <p>Category: {note.category}</p>
            <p>Description: {note.description}</p>
        </div>
       ))}
    </section>
  )
}
