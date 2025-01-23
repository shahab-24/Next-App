const nextConfig = {
        env: {
          KINDE_SITE_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
          KINDE_POST_LOGOUT_REDIRECT_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
          KINDE_POST_LOGIN_REDIRECT_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/home` : "http://localhost:3000/home",
        },
      };
      
      module.exports = nextConfig;
      