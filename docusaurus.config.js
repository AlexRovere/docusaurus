// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevDocs | Alex ROVERE',
  tagline: 'Site personnel de prises de notes, documentation dev et suivi de projets.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alexrovere.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlexRovere', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: false,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/alex-docs/img/favicon.ico',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/alex-docs/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#ffffff',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/alex-docs/img/apple-touch-icon.png'
          }
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DEV DOCS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/AlexRovere/docusaurus',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://portfolio.agence-web-rovere.fr/#/',
            label: 'Mon Portfolio',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/category/documentation',
              },
              {
                label: 'Ressources',
                to: '/docs/category/ressources',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'About me',
                href: '/about',
              },
              {
                label: 'Contact',
                href: '/contact',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Profil GitHub',
                href: 'https://github.com/AlexRovere',
              },
              {
                label: 'Portfolio',
                href: 'https://portfolio.agence-web-rovere.fr/#/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alex ROVERE - Tous droits réservés. Construit grâce à Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
