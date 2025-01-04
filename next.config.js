/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://i.postimg.cc/qqXxFqBP/flypyramid.png",
      "https://drive.google.com/file/d/1ovwrhoYWRu7Dt8qksVlJNxyxInnOS_Rf/view?usp=drive_link",
      "https://drive.google.com/file/d/1EJ1WtLe1fiEHvnpHUDojySAkAUnz-FZP/view?usp=drive_link",
      "*",
    ],
  },
};

module.exports = nextConfig;
