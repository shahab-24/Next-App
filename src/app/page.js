import Link from "next/link";
import ClientLoginButton from "../components/ClientLoginButton";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-purple-600 mb-8">
        Blog Titles
      </h1>

      {/* Client Login Button */}
      <ClientLoginButton />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <Link href={`/blogs/${blog.id}`}>
              <p className="text-xl font-semibold text-purple-700 hover:text-fuchsia-600">
                {blog.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
