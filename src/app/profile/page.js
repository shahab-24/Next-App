import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const page = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!isAuthenticated()) {
    redirect("/login");
  }
  const user = await getUser();

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10">
      {(isAuthenticated()) ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-4">
            Welcome to Your Profile, Mr.{" "}
            <span className="text-cyan-600 font-bold">
              {user?.given_name} {user?.family_name}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl font-medium text-gray-700 text-center mb-6">
            {user?.email}
          </p>

          <div className="flex justify-center mb-6">
            <Image
              src={user?.picture || "/default-avatar.png"} // Default image if no profile picture exists
              alt="User Profile"
              width={150}
              height={150}
              className="rounded-full object-cover border-4 border-cyan-600"
            />
          </div>
          
          <div className="text-center">
            <button className="btn bg-cyan-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-cyan-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-red-500 text-3xl">
          Hi, Mr... Please Sign in first to see your Profile
        </div>
      )}
    </div>
  );
};

export default page;
