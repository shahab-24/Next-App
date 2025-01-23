import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
        const {getUser, isAuthenticated} =  getKindeServerSession()
        

        if(!isAuthenticated()){
                redirect('/login')
        }
        const user = await getUser()
        return (
                <div>
                <h1>Welcome to Your Profile</h1>
                 <h2 className='text-3xl text-center font-bold text-cyan-500'> Hi, Mr. {user?.given_name} {user?.family_name}</h2> 
                 
                
        
                
                        
                </div>
        );
};

export default page;