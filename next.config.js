/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wdongpblggyyqgjeynbx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // 👇 AGGIUNGI QUESTO
    qualities: [75, 85],
  },
};

module.exports = nextConfig;
