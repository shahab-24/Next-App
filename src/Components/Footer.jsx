const Footer = () => {
        return (
          <div>
            <footer className="footer bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white p-6">
              <div className="container mx-auto flex flex-col items-center justify-center">
                <p className="text-center text-sm md:text-base">
                  Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
                  <span className="font-bold">
                 <span className="text-yellow-400">Blog</span>  App Ltd</span>
                </p>
              </div>
            </footer>
          </div>
        );
      };
      
      export default Footer;
      