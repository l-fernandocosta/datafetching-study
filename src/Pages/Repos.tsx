import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import useHook from '../hooks/useHook'


export interface ReposProps {
  full_name: string,
  description: string,
}

export  function Repos() {
  // const [repos, setRepos] = useState<ReposProps[]>([]);

  // The common way to data fetchings
  //  useEffect( () => {
  //    fetch('http://api.github.com/users/l-fernandocosta/repos')
  //   .then(response => response.json())
  //   .then((data) => setRepos(data));
  // }, [])


  // using Hooks
  // const { data: repos, isLoading, } = useHook('http://api.github.com/users/l-fernandocosta/repos');


  //using React Query 
  const {data : repos, isLoading} = useQuery<ReposProps[]>('repos', async () => {
    const response = await axios.get('http://api.github.com/users/l-fernandocosta/repos')
    return response.data;
  }, {
    staleTime: 60 * 1000 // 1 minute 
  })

  

  if (isLoading) {
    return (
      <h1>Loading data...</h1>
    )
  } {
    return (
      <div>
      <ul>
        {repos?.map((repo : ReposProps) => (
          <li key={repo.full_name}>
            <Link to= {`/repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        ) )}
      </ul>
    </div>
    )

  }

}