import { useEffect, useState } from "react";

function ModalEditPost({ open, onClose, post, onUpdated}) {

    const [titulo, setTitulo] = useState("")
    const [conteudo, setConteudo] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (post) {
            setTitulo(post.titulo);
            setConteudo(post.conteudo);
        }
    }, [post])

    async function handleUpdate() {

        if(titulo.trim().length === 0){
            alert("Titulo vazio")
            return;
        }
        if(conteudo.trim().length === 0){
            alert("Conteudo vazio")
            return;
        }
        
        setLoading(true);

        try {
           const response = await fetch(`http://localhost:8080/posts/${post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ titulo, conteudo}),
            });

            if(!response){
                const err = response.text()
                console.log("Backend respondeu erro: ", err);
                return;
            }

            onUpdated()
            onClose()

        } catch (error) {
            alert("Erro ao atualizar o post")
            console.log(error)
        } finally {
            setLoading(false);
            
        }
    }

     if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-xl w-full max-w-lg border border-gray-700 shadow-xl">

                <h2 className="text-2xl font-semibold mb-4">Editar Post</h2>

                <label className="block text-sm mb-2">Título</label>
                <input
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <label className="block text-sm mt-4 mb-2">Conteúdo</label>
                <textarea
                    rows="5"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
                    value={conteudo}
                    onChange={(e) => setConteudo(e.target.value)}
                />

                <div className="flex justify-end gap-3 mt-6">
                    <button
                        className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900"
                        disabled={loading}
                        onClick={handleUpdate}
                    >
                        {loading ? "Salvando..." : "Salvar alterações"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ModalEditPost;