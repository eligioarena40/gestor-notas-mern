import NoteForm from "../components/NoteForm.jsx";
import axios from "axios" ;
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

console.log(import.meta.env.VITE_API_URL)
const CreateNotePage = () => {
  const navigate = useNavigate();
  
  const handleCreate = async (note) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/api/notas`, note) 
        .then(res => {
          if(res.status != 201) {
            throw new Error("Error al crear una nota");
          }

          toast.success("¡Nota creada con éxito", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "colored",
          });
          navigate("/");
        });
    } catch (error) {
      console.error("Error al crear la nota:", error);
      toast.error("No se pudo actualizar la nota");
    }
  }
  return (
    <div>
      <NoteForm onSubmit={handleCreate} initialDate={{title: "", description: ""}}/>
    </div>
  )
}

export default CreateNotePage