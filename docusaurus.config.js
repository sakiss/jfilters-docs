const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JFilters Documentation',
  tagline: 'The filtering solution for Joomla 4',
  url: 'https://docs.blue-coder.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bluecoderr', // Usually your GitHub org/user name.
  projectName: 'jfilters-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/og_image.png',
    navbar: {
      title: 'JFilters Documentation',
      logo: {
        alt: 'JFiltersLogo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/bluecoderr/jfilters-docs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/bluecoder.software',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/thebluecoder',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blue-coder.com.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog:false,
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/bluecoderr/jfilters-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
