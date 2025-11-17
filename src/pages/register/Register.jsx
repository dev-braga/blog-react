import Logo from '../../assets/logo.svg'
import { useState } from "react";
import InputText from '../components/InputText';
import InputButton from '../components/InputButton';
import { Route, useNavigate, Link } from 'react-router-dom';

function Register() {

    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleCadastro(e) {
        e.preventDefault()
       
        try{
            const response = await fetch("http://localhost:8080/users/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({nome, email, senha})
            });

            if(!response){
                throw new Error("Não foi possível cadastrar")
            }
            // Dando certo
            const data = await response.json();
            localStorage.setItem("token", data.token)
            navigate('/')

        }catch(e){
            alert("Erro");         
        }

    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="meu logo"
                        src={Logo}
                        className="mx-auto h-20 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Fazer cadastro de usuário</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleCadastro}>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                Nome e sobrenome
                            </label>
                            <div className="mt-2">
                                <InputText
                                    id='name'
                                    name='name'
                                    type='text'
                                    placeholder='Ex: Peter Parker'
                                    autoComplete='name'
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                Endereço de email
                            </label>
                            <div className="mt-2">
                                <InputText
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='todoregister@email.com'
                                    autoComplete='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                                    Senha
                                </label>
                            </div>
                            <div className="mt-1">
                                <InputText
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='********'
                                    autoComplete="current-password"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <InputButton
                                onClick=''
                                className='flex w-full justify-center rounded-md cursor-pointer bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                                text_button={"Register"}
                            />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        <Link
                            className="font-semibold text-indigo-200 hover:text-indigo-100"
                            to="/"
                        >
                            Já tenho uma conta
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Register;