import { useEffect, useState } from "react";

export default function useHook<T = unknown>(url: string){
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setLoading] = useState(true);
 

  useEffect( () => {
    fetch(url)
   .then(response => response.json())
   .then((data) => {
     setData(data);
     setLoading(false);
   })
   
 }, [])
  
  return {data, isLoading}
}; 