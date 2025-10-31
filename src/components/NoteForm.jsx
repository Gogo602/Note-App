import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";
import { toast } from "react-toastify";


export default function NoteForm({ setNotes }) {
  const [ isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState({
      title: '',
      priority: 'High',
      category: 'Work',
      description: ''
  });
  

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const handleAdd = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID()
    const newNote ={
      id: id,
      ...formData,
      createdAt: Date.now(),
      lastUpdated: Date.now()
    }

   setNotes((prevNotes) => {
      const updatedNotes = [newNote, ...prevNotes];

      // Update local storage 
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });

    
    setFormData({
      title: "",
      priority: "High",
      category: "Work",
      description: "",
    });
    setIsFormVisible(false)
    toast.success("Note added successfully")
  }

  const handleToggle = () => {
    setIsFormVisible((prev) => !prev)
  }

  return (
    <div>
      <button onClick={handleToggle} className="text-center bg-[#1c0333]/40 p-2 rounded-md w-full font-bold transition hover:bg-[#1c0333]/20 cursor-pointer">
        {isFormVisible ? "Hide Form" : "Add Note"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleAdd}>
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required={true}
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              {value: 'High', label: 'High'},
              {value: 'Medium', label: 'Medium'},
              {value: 'Low', label: 'Low'}
            ]}
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              {value: 'Work', label: 'Work'},
              {value: 'Personal', label: 'Personal'},
              {value: 'Ideas', label: 'Ideas'}
            ]}
          />

          <TextArea 
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required={true}
          />
          
          <button 
            type="submit"
            className="w-full text-center font-bold py-2 rounded-md bg-[#1c0333] curdor-pointer hover:bg-[#1c0333]/70"
          > 
            Add Note
          </button>
        </form>
      )}
    </div>
  )
}
