import { useState, useEffect } from 'react';
import { useAuthContext } from '../AuthContext';

export default function useAuth(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setLogged } = useAuthContext();

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!token) {
      setLogged(false);
      window.location.href = '/login'; // Redirect if no token

      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          localStorage.removeItem('accessToken');
          setLogged(false);
          window.location.href = '/login'; // Redirect if unauthorized

          return;
        }

        const jsonData = await response.json(); // Récupère les données JSON
        setData(jsonData); // Stocke les données récupérées
      } catch (error) {
        setError(error); // Gère les erreurs
      } finally {
        setLoading(false); // Met fin à l'état de chargement
      }
    };

    fetchData(); // Appelle la fonction fetch
  }, [token, url]); // Dépendances pour l'effet

  return { data, loading, error }; // Retourne les données, l'état de chargement et les erreurs
}
