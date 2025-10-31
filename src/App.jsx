import { useState } from 'react'
import NoteForm from "./components/NoteForm";
import Note from './components/Note';


export default function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const getNote = localStorage.getItem("notes")
      return getNote ? JSON.parse(getNote) : [];
      
    } catch (error) {
      console.log(error)
    }
  })
  
  
  return (
    <section className='max-w-lg mx-auto  text-white px-2'>
        <div className="mt-10 p-4 bg-[#3d0274] rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-4">Notes</h2>
            <div>
              <NoteForm  setNotes={setNotes}/>
              <Note notes={notes}/>
            </div>
        </div>
    </section>
  )
}
