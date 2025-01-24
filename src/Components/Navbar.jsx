
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white max-w-full w-screen shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl font-bold lg:text-3xl tracking-wide">
              <span className="text-yellow-400">Blog</span> App
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm lg:text-base font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link
            href={isAuthenticated() ? "/profile" : "/login"}
            className="hover:text-yellow-400 transition"
          >
            Profile
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {await isAuthenticated() ? (
            <LogoutLink>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition shadow-md">
                Sign Out
              </button>
            </LogoutLink>
          ) : (
            <>
              <LoginLink postLoginRedirectURL="/dashboard">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition shadow-md">
                  Sign In
                </button>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/dashboard">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition shadow-md">
                  Sign Up
                </button>
              </RegisterLink>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-white text-black rounded-box w-52"
            >
              <li>
                <Link href="/" className="hover:bg-gray-100 px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={isAuthenticated() ? "/profile" : "/login"}
                  className="hover:bg-gray-100 px-4 py-2"
                >
                  Profile
                </Link>
              </li>
              <li>
                {await isAuthenticated() ? (
                  <LogoutLink>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      Sign Out
                    </button>
                  </LogoutLink>
                ) : (
                  <>
                    <LoginLink postLoginRedirectURL="/dashboard">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                        Sign In
                      </button>
                    </LoginLink>
                    <RegisterLink postLoginRedirectURL="/dashboard">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                        Sign Up
                      </button>
                    </RegisterLink>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
