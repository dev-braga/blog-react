import { use, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectRoute({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/users/register', {
        credentials: 'include'
    })
    .then(res => setAuth(res.ok))
    .catch(() => setAuth(false));

    }, []);
      
    if(auth === null) {
        return <p>Carregando...</p>;
    
    return auth ? children : <Navigate to="/login" />;
 }
}
export default ProtectRoute;