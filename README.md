📘 TechFlow Blog – Frontend (React)

Este é o frontend do TechFlow Blog, uma aplicação completa de posts com autenticação via sessão, criação, edição e exclusão de posts.
O projeto foi desenvolvido em React + TailwindCSS e se comunica com um backend em Spring Boot.

🚀 Funcionalidades

🔐 Login com sessão (cookies)

📝 Criar posts

✏ Editar posts

❌ Excluir posts

🔍 Filtro de posts (A–Z, Z–A, Meus posts)

👤 Identificação do autor de cada post

🌙 Interface moderna com TailwindCSS

📦 Requisitos para rodar o projeto
✔ Frontend

Node.js 16+

NPM 8+

Navegador atualizado

✔ Backend

O backend está disponível neste repositório:
👉 https://github.com/dev-braga/desafio-desenvolvedor-junior-3.git

Ele é responsável por:

Autenticação com HttpSession

CRUD de posts

Banco H2

🛠 Como rodar o Frontend
1️⃣ Clone o repositório
git clone https://github.com/dev-braga/SEU_REPOSITORIO_FRONTEND.git

2️⃣ Entre na pasta do projeto
cd nome-do-projeto

3️⃣ Instale as dependências
npm install

4️⃣ Inicie o projeto
npm run dev


O frontend vai rodar em:
👉 http://localhost:5173

🛠 Como rodar o Backend
1️⃣ Clone o backend
git clone https://github.com/dev-braga/desafio-desenvolvedor-junior-3.git

2️⃣ Abra no IntelliJ, Eclipse ou VS Code (com extensão Java)
3️⃣ Instale as dependências (Maven baixa tudo automaticamente)
4️⃣ Rode a aplicação

Por padrão, ela sobe em:
👉 http://localhost:8080

🔍 Console do H2 Database

👉 http://localhost:8080/h2-console

Login padrão já configurado no projeto.

🔗 Integração Frontend + Backend

O frontend se comunica com o backend usando:

http://localhost:8080


Cookies são enviados automaticamente via credentials: "include" no fetch.

Para que tudo funcione:

O backend deve estar rodando antes do frontend.

O navegador deve permitir cookies de localhost.

🎨 Tecnologias Utilizadas
Frontend

React

- Vite

- TailwindCSS

- Hooks (useState, useEffect)

- Fetch API (com cookies)

Backend

- Java 17

- Spring Boot

- Spring Web

- Spring Security (session)

- H2 Database

- JPA / Hibernate

<img width="1887" height="893" alt="image" src="https://github.com/user-attachments/assets/5b4c2c45-021b-4520-a6c3-ffd3531fd3b3" />
<img width="1825" height="909" alt="image" src="https://github.com/user-attachments/assets/a11725c4-a8e0-4189-8919-e34591cdc5f4" />
<img width="1905" height="918" alt="image" src="https://github.com/user-attachments/assets/87b5b70d-9607-4cfd-acfb-b73d44ecce00" />


Se quiser, eu gero imagens, adiciono GIFs ou deixo essa seção visual.

🤝 Contribuição

Contribuições são bem-vindas!
Faça um fork, abra um PR ou envie sugestões.

📄 Licença

Este projeto é livre para estudo.
