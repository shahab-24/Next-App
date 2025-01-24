import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const HomePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-6">
          Welcome <span className="text-fuchsia-600">{user?.given_name} {user?.family_name}</span>!
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          You have successfully logged in. We're glad to have you onboard.
        </p>
        <div className="flex justify-center">
         <Link href='/profile'>
         <button className="btn bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-gradient-to-l transition-colors">
            Go to Your Profile
          </button>

         </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
