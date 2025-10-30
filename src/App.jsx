import NoteForm from "./components/NoteForm";


export default function App() {
  return (
    <section className='max-w-lg mx-auto  text-white px-2'>
        <div className="mt-10 p-4 bg-[#3d0274] rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-4">Notes</h2>
            <div>
              <NoteForm />
            </div>
        </div>
    </section>
  )
}
