/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(undefined);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  useEffect(() => {
    if (isLoading === undefined) {
      setIsLoading(true);
      (async () => {
        try {
          const list = await readItems();
          setItems(list);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  },[isLoading]);

  if (isLoading || isLoading === undefined) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
