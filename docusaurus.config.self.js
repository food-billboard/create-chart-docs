// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '可视化大屏文档',
  tagline: '数据可视化的操作和开发文档',
  url: 'https://food-billboard.github.io/',
  baseUrl: '/api/backend/create-chart-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: '数据可视化大屏文档',
        logo: {
          alt: '数据可视化大屏文档',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            // 有版本
            docId: '介绍',
            position: 'left',
            label: '操作文档',
          },
          {to: '/blog', label: '开发文档', position: 'left'},
          {
            label: '版本', 
            position: 'right',
            to: '/version'
          },
          {
            href: 'https://github.com/food-billboard/create-chart',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '操作文档',
                to: '/docs/介绍',
              },
              {
                label: '开发文档',
                to: '/blog',
              },
            ],
          },
          {
            title: '联系我',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/food-billboard',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                href: 'https://food-billboard.github.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 可视化大屏文档, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
      },
    }),
};

module.exports = config;
