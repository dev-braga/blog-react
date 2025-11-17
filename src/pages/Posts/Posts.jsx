import { useEffect, useState } from "react";
import ImgDefault from "../../assets/avatar-default.svg";
import Header from "../components/Header";
import FabCreatePosts from "../components/FabCreatePost";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const userLogged = JSON.parse(localStorage.getItem("item"));

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch("http://localhost:8080/posts", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await response.json();
        setPosts(data);
        setAllPosts(data);
      } catch (e) {
        console.log("Erro ao carregar", e);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  function createPosts(){
    window.location.href = "/posts/create";
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  function handleFilterChange(filter) {
    let sorted = [...allPosts];

    if (filter === "asc") sorted.sort((a, b) => a.titulo.localeCompare(b.titulo));
    if (filter === "desc") sorted.sort((a, b) => b.titulo.localeCompare(a.titulo));
    if (filter === "meus") sorted = allPosts.filter((post) => post.autor.nome === userLogged);

    setPosts(sorted);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onFilterChange={handleFilterChange} onLogout={logout} />

      <FabCreatePosts onclick={createPosts} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 animate-fadeIn">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">Blog TechFlow</h2>
          <p className="text-gray-400 text-lg">
            Insights, guias e novidades sobre o mundo do desenvolvimento moderno.
          </p>

        </div>

        {loading ? (
          <div className="text-center text-gray-400 text-lg">Carregando posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">Nenhum post encontrado.</div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-gray-900/40 border border-gray-800 rounded-2xl p-6 flex flex-col hover:border-gray-700 hover:bg-gray-900/60 transition backdrop-blur-sm shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-x-3 text-xs text-gray-400 mb-3">
                  <time>{post.dataPost}</time>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-300 transition">
                  {post.titulo}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-6">
                  {post.conteudo}
                </p>

                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-800">
                  <img
                    alt="autor"
                    src={ImgDefault}
                    onError={(e) => {
                      e.target.src =
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zH7r9fOKAeDTtkK1eMnOdbF_xLD0X6uwGw&s";
                    }}
                    className="size-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">{post.autor.nome}</p>
                    <p className="text-xs text-gray-500">Autor</p>
                  </div>
                </div>
        
              </article>
              
            ))}
        
          </div>
        )}

      </section>
    </div>
  )
}

export default Posts;