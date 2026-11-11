import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import NoteForm from "../components/NoteForm";

const apiURL = import.meta.env.VITE_API_URL;

const EditNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  
  //carga los datos actuales de la nota al abrir la vista
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`${apiURL}/api/notas/${id}`);
        setNote({
          title: res.data.title,
          description: res.data.description,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error al traer la nota:", error);
      }
    };
    fetchNote();
  }, [id]);

  //envia los cambios actualizados al servido
  const handleUpdate = async (updateNote) => {
    try {
      const res = await axios.put(`${apiURL}/api/notas/${id}`, updateNote);
      if (res.status !== 200) {
        throw new Error("Error al actualizar la nota");
      }
    
      toast.success("¡Nota actualizada con éxito!", {
        position: "bottom-center",
        autoClose: 3000,
        thene: "colored",
      });
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar la nota:", error);
      toast.error("No se pudo actualizar la nota");
    }
  };

  if (loading) return <span>Cargando nota...</span>;

  return (
    <div>
      <NoteForm onSubmit={handleUpdate} initialDate={note} />
    </div>
  );
};

export default EditNotePage;
