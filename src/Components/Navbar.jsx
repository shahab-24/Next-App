import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";

const Navbar = async () => {
  const { getUser, isAuthenticated } = await getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <nav className="flex justify-between items-center container mx-auto pt-4">
      <div className="flex items-center">
      <Link href='/'>
      <h1 className="text-3xl font-bold text-center btn">MY nExt App</h1>
      </Link>
        
      </div>

      <div className="flex items-center gap-5">
      <Link href="/dashboard">
        <h1>
        Dashboard
        </h1>
      </Link>

        <div className="flex justify-between gap-x-5">
        {( await isAuthenticated()) ? (<>
                <LogoutLink>
            <buttton className="btn btn-outline text-center">Sign Out</buttton>
          </LogoutLink>
        </>) : (<>
                <div className="flex items-center gap-x-5">
         <LoginLink postLoginRedirectURL="/dashboard">
            <buttton className="btn btn-outline  p-2 text-center">Sign In</buttton>
          </LoginLink>

          <RegisterLink postLoginRedirectURL="/dashboard">
            <buttton className="btn btn-outline text-center">Sign Up</buttton>
          </RegisterLink>
         </div>

        </>)}



         
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
