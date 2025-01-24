const Footer = () => {
        return (
          <div>
            <footer className="footer footer-center bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white p-4">
              <aside>
                <p>
                  Copyright © {new Date().getFullYear()} - All rights reserved by Blog
                  App Ltd
                </p>
              </aside>
            </footer>
          </div>
        );
      };
      
      export default Footer;
      