/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ngnr-media.s3.us-west-2.amazonaws.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "d33i64rsmyd7pn.cloudfront.net/",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "neherconsulting.imgix.net",
                port: "",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
