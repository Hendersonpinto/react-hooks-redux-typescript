import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const {searchRepositories} = useActions()
  const {data, error, loading} = useTypedSelector((state)=> state.repositories)


  const inputHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTerm(e.target.value)
  }

  const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    searchRepositories(term)
  }



  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={inputHandler}/>
      <button>Search</button>
    </form>

    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map((name)=><div key={name}>{name}</div>)}
  </div>
}

export default RepositoriesList