import { Link, useLocation, useParams } from "react-router-dom"
const Breadcrumb = () => {

    const location = useLocation();
    const {id} = useParams();
    const myPath = location.pathname.split('/');
    console.log(myPath)
    
  return (
    <div className="flex gap-2 ml-9 my-2 font-light text-xl ">
        <Link to={'/'} className="hover:underline underline-offset-8">Home</Link>
        {myPath.map((i) => (
            <>
            <Link to={i === 'products' ? '../products' : `${id}`} className="hover:underline underline-offset-8">{i}</Link>
            <span>/</span>
            </>
        )
        )}

       
    </div>
  )
}

export default Breadcrumb