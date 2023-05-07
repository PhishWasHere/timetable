import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Auth() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8080/checkSession',{withCredentials: true})
      .then(response => {
        if (response.data.status === 'success') {
          console.log("Authorized");
        } else {
          navigate('/login');
          console.log("Unauthorized");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [navigate]);
}