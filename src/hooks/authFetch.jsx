import { useState, useEffect } from 'react';
import { useAuthContext } from '../AuthContext';

export default function useAuth(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setLogged, token } = useAuthContext();

  useEffect(() => {
    if (!token) {
      setLogged(false);
      window.location.href = '/login';

      return;
    }

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          localStorage.removeItem('accessToken');
          setLogged(false);
          window.location.href = '/login';

          return;
        }

        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [token, url]);

  return { data, loading, error };
}
