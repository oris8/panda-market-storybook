/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: "@svgr/webpack",
        options: {
          icon: true, // 기본 사이즈 1rem으로 설정
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false, // 사이즈 조절을 위해 ViewBox 사라지는 현상 제거
                  },
                },
              },
            ],
          },
        },
      },
    });

    return config;
  },
};

export default nextConfig;
