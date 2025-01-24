import React from 'react';

const blogDetails = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
          {data.title}
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {data.body}
        </p>

        <div className="flex justify-end">
          <button className="btn bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white hover:bg-gradient-to-l p-3 rounded-md shadow-md">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default blogDetails;
