import Link from "next/link";




const Home = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()


        return (
                <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Titles</h1>
      <ul className="list-disc pl-5">
        {data.map((blog) => (
          <li key={blog.id}>
          

            <Link href={`/blogs/${blog.id}`}>
              <p className="text-blue-500 hover:underline">{blog.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;