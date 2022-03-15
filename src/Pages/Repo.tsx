import { useParams } from "react-router-dom"
import { queryClient } from "../main";
import { ReposProps } from "./Repos";

export function Repo() {

  const params = useParams()
  const currentRepo = params['*'] as string;

  async function handleRefetch(){
    const previousRepos = queryClient.getQueryData<ReposProps[]>('repos')

    if(previousRepos) {
      const nextRepos = previousRepos.map(repo => {
        if(repo.full_name === currentRepo){
          return {...repo, description:'testando'}
        }else{
          return repo
        }
      })
      queryClient.setQueryData('repos', nextRepos)
    }
  }

  return (
    <div>
      <h1>Página {currentRepo}</h1>
      <button onClick={handleRefetch}>Alterar Descrição</button>
    </div>
  )
}