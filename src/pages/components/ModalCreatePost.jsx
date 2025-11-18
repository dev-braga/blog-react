import { useState } from "react";

function ModalCreatePost({ open, onClose, onSubmit }) {

  const [titulo, setTitulo] = useState("")
  const [conteudo, setConteudo] = useState("")

  if (!open) return null;

  async function handlePost(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ titulo, conteudo }),
      });

      if (!response) {
        console.log("Erro na resposta")
      }

      const data = response.json()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="
      fixed inset-0 z-50 flex items-center justify-center
      backdrop-blur-sm bg-black/40
      animate-fadeIn
    ">
      {/* WINDOW */}
      <div className="
        bg-gray-900 border border-gray-800 rounded-2xl shadow-xl
        w-full max-w-lg p-8
        animate-scaleIn
      ">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Criar Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="space-y-5"
        >
          <div>
            <label className="text-gray-300 text-sm">Título</label>
            <input
              type="text"
              className="
                w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700
                text-white placeholder-gray-500 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="Digite o título..."
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Conteúdo</label>
            <textarea
              className="
                w-full mt-1 p-3 h-32 rounded-lg bg-gray-800 border border-gray-700
                text-white placeholder-gray-500 resize-none
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="Escreva seu conteúdo..."
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="
              w-full bg-blue-600 hover:bg-blue-700 transition
              text-white font-semibold py-3 rounded-lg
              active:scale-95
            "
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalCreatePost;