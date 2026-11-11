import { useEffect, useState } from "react";
import CardNote from "../components/CardNote";
import ConfirmModal from "../components/ConfirmModal"; // 👈 Importas el modal
import axios from "axios";
import formatData from "../utils/formatDate";
import { toast } from "react-toastify";

const apiURL = import.meta.env.VITE_API_URL;

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/notas`);
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const confirmDelete = async () => {
    if (!noteToDelete) return;

    try {
      await axios.delete(`${apiURL}/api/notas/${noteToDelete}`);
      setNotes(notes.filter((note) => note._id !== noteToDelete));

      toast.success("¡Nota eliminada con éxito!", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
      toast.error("No se pudo eliminar la nota", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setNoteToDelete(null);
    }
  };

  if (loading) return <span>Cargando...</span>;

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {notes.map((note) => (
          <CardNote
            key={note._id}
            title={note.title}
            description={note.description}
            id={note._id}
            date={formatData(note.createdAt)}
            onDelete={(id) => setNoteToDelete(id)}
          />
        ))}
      </div>

      {/* Uso limpio del componente separado */}
      <ConfirmModal
        isOpen={Boolean(noteToDelete)}
        title="Eliminar nota"
        message="¿Estás seguro de que deseas eliminar esta nota? Esta acción no se puede deshacer."
        onConfirm={confirmDelete}
        onCancel={() => setNoteToDelete(null)}
      />
    </>
  );
};

export default HomePage;
