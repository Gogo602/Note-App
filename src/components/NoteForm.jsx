import { useState } from "react";


export default function NoteForm() {
  const [title, setTitle] = useState("");
  console.log(title)

  return (
    <div>
      <form>
        <div className="">
          <label htmlFor="title" className="mb-2 font-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="px-3 py-1 w-full outline-0 border border-white rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}
