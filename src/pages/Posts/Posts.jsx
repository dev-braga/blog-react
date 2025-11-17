import { useEffect, useState } from "react"
import ImgDefault from '../../assets/avatar-default.svg'
import Header from "../components/Header";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allPosts, setAllPosts] = useState([])
    const userLogged = JSON.parse(localStorage.getItem("item"));

    useEffect(()=> {
        async function loadPosts() {
            try{
                const response = await fetch("http://localhost:8080/posts",{
                    headers: {
                    'Content-Type': 'application/json',
                },
                    credentials: "include"
                });
                const data = await response.json();
                setPosts(data);
                setAllPosts(data)
            }catch(e){
                console.log("Erro ao carregar", e);
            }finally{
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    function logout(){
        localStorage.removeItem("token")
        window.location.href = "/"
    }

    function handleFilterChange(filter){
        let sorted = [...allPosts];

        if(filter === "asc"){
            sorted.sort((a, b) => a.titulo.localeCompare(b.titulo));
        }
        if(filter === "desc"){
            sorted.sort((a, b) => b.titulo.localeCompare(a.titulo));
        }
        if(filter === "meus"){
            sorted = allPosts.filter((post) => post.autor.nome === userLogged)
        }

        setPosts(sorted);
    }

    return(
        <div className="bg-gray-900 py-24 sm:py-32">

            <Header
                onLogout={logout}
                onFilterChange={handleFilterChange}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">From the blog</h2>
                    <p className="mt-2 text-lg/8 text-gray-300">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-400">
                                    {post.dataPost}
                                </time>
                                <a

                                    className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                                >
                                    {post.titulo}
                                </a>
                            </div>
                            <div className="group relative grow">
                                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                                    <a href={post.titulo}>
                                        <span className="absolute inset-0" />
                                        {post.titulo}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.conteudo}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                             <img 
                                alt="" 
                                src={ImgDefault} 
                                onError={(e) => {
                                    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zH7r9fOKAeDTtkK1eMnOdbF_xLD0X6uwGw&s"
                                }}
                                className="size-10 rounded-full bg-gray-100" />
                               
                                <div className="text-sm/6">
                                    <p className="font-semibold text-white">
                                        
                                    </p>
                                    <p className="text-gray-400">{post.autor.nome}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Posts;