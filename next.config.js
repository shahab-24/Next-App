/** @type {import('next').NextConfig} */
const nextConfig = {
        env: {
          KINDE_SITE_URL: process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000",
          KINDE_POST_LOGOUT_REDIRECT_URL: process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000",
          KINDE_POST_LOGIN_REDIRECT_URL: process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}/dashboard`
            : "http://localhost:3000/dashboard",
        },
        images: {
          remotePatterns: [
            {
              protocol: "https",
              hostname: "**", // Accept all domains
            },
          ],
        },
      };
      
      module.exports = nextConfig;
      