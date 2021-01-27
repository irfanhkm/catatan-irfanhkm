module.exports = {
  title: 'Catatan Irfanhkm',
  tagline: 'Catatan Irfanhkm',
  url: 'https://catatan.irfanhkm.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'irfanhkm', // Usually your GitHub org/user name.
  projectName: 'catatan-irfanhkm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Catatan Irfanhkm',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          blogTitle: 'Catatan Irfanhkm',
          blogDescription: 'Public notes nya irfanhkm',
          blogSidebarTitle: 'Catatan terkini',
          showReadingTime: true,
          path: './blog',
          routeBasePath: '/', 
          
        },
      },
    ],
  ],
};
