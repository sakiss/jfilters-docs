const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JFilters extension Documentation - Setup, settings and troubleshooting for Joomla\'s JFilters',
  tagline: 'The filtering solution for Joomla 4 and 5',
  url: 'https://docs.blue-coder.com',
  baseUrl: '/jfilters/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bluecoderr', // Usually your GitHub org/user name.
  projectName: 'jfilters-docs', // Usually your repo name.
  themeConfig: {
    // Declare some <meta> tags
    metadata: [
      {name: 'keywords', content: 'JFilters, Joomla filters, custom fields'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:image', content: 'img/og_image.png'},
      {name: 'og:image', content: 'img/og_image.png'},
    ],
    algolia: {
      // The application ID provided by Algolia
      appId: '7AAPON99QH',
      // Public API key: it is safe to commit it
      apiKey: '247f07e0cb78642e4cdd84be0d51d3e5',
      indexName: 'blue-coder',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: path for search page that enabled by default ('false' to disable it)
      searchPagePath: 'search',
    },
    image: 'img/og_image.png',
    navbar: {
      title: 'JFilters Documentation',
      logo: {
        alt: 'JFiltersLogo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://docs.blue-coder.com',
          label: 'Docs',
          position: 'right',
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
              href: 'https://www.facebook.com/thebluecoder',
            },
            {
              label: 'X',
              href: 'https://x.com/thebluecoder',
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
