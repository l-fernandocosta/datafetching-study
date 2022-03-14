import { useEffect, useState } from 'react'
import useHook from './hooks/useHook'


interface ReposProps {
  full_name: string,
  description: string,
}

export default function App() {
  // const [repos, setRepos] = useState<ReposProps[]>([]);

  // The common way to data fetchings
  //  useEffect( () => {
  //    fetch('http://api.github.com/users/l-fernandocosta/repos')
  //   .then(response => response.json())
  //   .then((data) => setRepos(data));
  // }, [])

  const { data: repos, isLoading } = useHook('http://api.github.com/users/l-fernandocosta/repos');

  if (isLoading) {
    return (
      <h1>Loading data...</h1>
    )
  } {
    return (
      <div>
      <ul>
        {repos?.map((repo : any) => (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        ) )}
      </ul>
    </div>
    )

  }

}