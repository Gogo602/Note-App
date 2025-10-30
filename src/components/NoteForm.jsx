import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";


export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("")

  const handleAdd = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID()
    const newNote ={
      id: id,
      priority,
      category,
      description,
      createdAt: Date.now(),
      lastUpdated: Date.now()
    }

    const getNoteString = localStorage.getItem("notes")
    const getNotes =  getNoteString ? JSON.parse(getNoteString) : [];
    
    getNotes.push(newNote)
    localStorage.setItem("notes", JSON.stringify(getNotes))

  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <TextInput
          label="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
        />
        <SelectInput
          label="Priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          options={[
            {value: 'High', label: 'High'},
            {value: 'Medium', label: 'Medium'},
            {value: 'Low', label: 'Low'}
          ]}
        />
         <SelectInput
          label="Category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            {value: 'Work', label: 'Work'},
            {value: 'Personal', label: 'Personal'},
            {value: 'Ideas', label: 'Ideas'}
          ]}
        />

        <TextArea 
          labl="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required={true}
        />
         
        <button 
          type="submit"
          className="w-full text-center font-bold py-2 rounded-md bg-[#1c0333] curdor-pointer hover:bg-[#1c0333]/70"
        >
          Add Note
        </button>
      </form>
    </div>
  )
}
