
import React from 'react'



const blogDetails = async ({params}) => {
        const{ id} = params
        console.log(id)
        
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        console.log(data)
  return (
    <div className='flex items-center mx-auto container'>
        <div className="card bg-primary text-primary-content w-96">
  <div className="card-body text-center">
    <h2 className="card-title">{data.title}</h2>
    <p className='text-start py-4'>{data.body}</p>
    <div className="card-actions justify-end">
      <button className="btn">Read More....</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default blogDetails