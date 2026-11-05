/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 only serves allow-listed qualities. 50 is for the blurred background gradients.
    qualities: [50, 75],
  },
  async redirects() {
    return [
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/projects/:slug', destination: '/work/:slug', permanent: true },
      // Old per-service stubs, now one services page.
      { source: '/services/:slug', destination: '/services', permanent: true },
    ];
  },
};

export default nextConfig;
