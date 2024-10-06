/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:"https",
                hostname:"github-readme-stats.vercel.app",
                port:"",
                pathname: "api/top-langs/?username=vishnuprasad2004&layout=compact&theme=dark"
            },
            {
                protocol:"https",
                hostname:"img.shields.io",
                port:"",
                pathname:"/badge/**"
            },
            {
                protocol: "https",
                hostname:"github.com",
                port:"",
                pathname:"/user-attachments/assets/**"
            }
        ]
    }
};

export default nextConfig;
