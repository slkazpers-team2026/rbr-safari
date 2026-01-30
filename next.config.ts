/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rbr-safari", // 1. මෙන්න මේ පේලිය අලුතෙන් එකතු කරන්න (උඹේ Repo එකේ නම)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
