/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "photos.app.goo.gl",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "photos.google.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "drscdn.500px.org",
                port: "",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
