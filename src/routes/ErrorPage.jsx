import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()
console.error(error)    

  return (
    <div>
      <h1>Ops!</h1>
      <p>Temos um problema.</p>
      <p>Página não encontrada.</p>
      {/* <p>{error.status}</p>
      <p>{error.data}</p> */}

    </div>
  )
}

export default ErrorPage
