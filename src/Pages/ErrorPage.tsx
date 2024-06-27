import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
        <h3 className="text-xl">Oop!</h3>
        <p>{isRouteErrorResponse(error) ? "Page not found" : "An unexpected error occured"}</p>
    </div>
  )
}

export default ErrorPage