import Header from "../components/Header";

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

function CreatePosts() {
  return (
    <div>
      <Header onFilterChange={handleFilterChange} onLogout={logout} />
        <h1>teste</h1>
    </div>
  );
}

export default CreatePosts;