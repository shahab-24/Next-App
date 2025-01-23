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
  console.log(user);

  return (
    <nav className="flex justify-between items-center container mx-auto text-primary pt-4">
      <div className="flex items-center">
      <Link href='/'>
      <h1 className="text-3xl font-bold text-center btn">NExt App</h1>
      </Link>
        
      </div>

      <div className="flex items-center gap-5">
      <Link href="/">
        <h1 className="text-primary">
        Home
        </h1>
      </Link>
      <Link href={isAuthenticated() ? '/profile' : '/login'}>
        <h1 className="text-primary">
        Profile
        </h1>
      </Link>
      

        <div className="flex justify-between gap-x-5">
        {( await isAuthenticated()) ? (<>
                <LogoutLink>
            <button className="btn btn-outline text-center">Sign Out</button>
          </LogoutLink>
        </>) : (<>
                <div className="flex items-center gap-x-5">
         <LoginLink postLoginRedirectURL="/dashboard">
            <button className="btn btn-outline  p-2 text-center">Sign In</button>
          </LoginLink>

          <RegisterLink postLoginRedirectURL="/dashboard">
            <button className="btn btn-outline text-center">Sign Up</button>
          </RegisterLink>
         </div>

        </>)}



         
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
