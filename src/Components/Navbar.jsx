import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const Navbar = async () => {
  const session = getKindeServerSession();

  // Check if user is authenticated
  const isAuthenticated = await session.isAuthenticated();
  const user = isAuthenticated ? await session.getUser() : null;

  return (
    <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto flex flex-row items-center justify-between py-3 px-2 lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl font-semibold lg:font-bold lg:text-3xl">
              <span className="text-yellow-400">Blog</span> App
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="w-full ml-2 lg:w-auto flex flex-row items-center justify-center lg:items-center gap-2 lg:gap-8 mt-4 lg:mt-0">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link
            href={isAuthenticated ? "/profile" : "/login"}
            className="hover:text-yellow-400 transition"
          >
            Profile
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="w-full lg:w-auto flex flex-row items-start lg:items-center gap-2 lg:gap-6 mt-4 lg:mt-0">
          {isAuthenticated ? (
            <LogoutLink postLogoutRedirectURL={process.env.NEXT_PUBLIC_BASE_URL}>
              <button className="btn-xs lg:btn-base px-2 py-1 lg:px-4 lg:py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition shadow-md w-full lg:w-auto">
                Sign Out
              </button>
            </LogoutLink>
          ) : (
            <>
              <LoginLink postLoginRedirectURL="/dashboard">
                <button className="btn-xs lg:btn-base px-2 py-1 lg:px-4 lg:py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition shadow-md w-full lg:w-auto">
                  Sign In
                </button>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/dashboard">
                <button className="btn-xs lg:btn-base px-2 py-1 lg:px-4 lg:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition shadow-md w-full lg:w-auto">
                  Sign Up
                </button>
              </RegisterLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
