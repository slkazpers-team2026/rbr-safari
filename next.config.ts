/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // 1. මේක අනිවාර්යයි (Static Site එකක් බවට පත් කරයි)
  images: {
    unoptimized: true, // 2. GitHub Pages වල Image Optimization වැඩ කරන්නේ නෑ
  },
};

export default nextConfig;