/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState, useCallback } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  const fetchUser = useCallback(async ()=> {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error(`Bad server response: ${response.status}`);
      }
      const info = await response.json();
      return info;
  },[userId])

  useEffect(() => {
    (async () => {
      try {
        const user = await fetchUser();
        setUser(user);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchUser]);


  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
