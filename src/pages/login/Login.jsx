import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../assets/logo.svg'
import '../login/Login.css'
import InputText from '../components/InputText';
import InputButton from '../components/InputButton';
import AlertMsg from '../components/AlertMsg';


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        throw new Error('Erro no login');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem("user", JSON.stringify(data.nome))
      navigate('/posts');
      
    } catch (error) {
      alert('Falha no login. Verifique suas credenciais e tente novamente.');
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={Logo}
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Cadastre-se para começar a usar</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleLogin}>
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
                className='cursor-pointer flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                text_button={"Sign-in"}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
           <Link
            className="font-semibold text-indigo-200 hover:text-indigo-100"
            to="/register"
           >
            Não tem uma conta?
           </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Login
