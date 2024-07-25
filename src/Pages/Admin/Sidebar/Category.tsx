import { useReadCate } from '../../../lib/supabase/CRUD'

const Category = () => {
  const {data} = useReadCate();

  return (
    <div className='text-white p-5'>
      <h3 className='font-bold text-2xl'>Category</h3>
      <div className='p-5 flex gap-2'>
        {data?.map((i) => 
          <div className='bg-gray-300 rounded py-2 px-5 w-fit text-black uppercase'>
            <p>{i.category}</p>

          </div>
          
        )}
      </div>
    </div>
  )
}

export default Category