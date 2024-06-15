import useProduct from "../hooks/useProduct"
// sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 300px) 40vw"
const ProductGrid = () => {
  const {data, isLoading, error} = useProduct();

  if (isLoading) return <p>Loading</p>
  if (error) return <p>Error fetching product</p>

  
  return (
    <div className="md:w-[75%] w-[100%] pt-32 bg-cyan-100 p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center">
      {data?.map((item) => (
        <div key={item.id}>
          <div className="w-52 h-96 bg-gray-300">
            <div className="w-52 h-56 bg-white flex items-center justify-center">
              <img src={item.image} className="w-32 h-auto" />
            </div>
            <div className="p-1">
              <p>{item.title}</p>
              <p className="text-gray-500">{item.category}</p>
              <p className="font-bold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid