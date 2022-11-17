/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  devDocsSidebar: [
    'dev-docs/intro',
    'dev-docs/quick-start',
    'dev-docs/faq',
    'dev-docs/usage-information',
    {
      type: 'category',
      label: '⚙️ Setup & Deployment',
      items: [
        {
          type: 'category',
          label: 'Installation',
          link: {
            /**
            * Use the 2 lines below to make sure that
            * "Installation" in the TOC is a clickable link
            * pointing to a page (i.e., type: 'doc') whose link target
            * is defined as the 'id' property.
            */
            type: 'doc',
            id: 'dev-docs/installation',
          },
          items: [
            'dev-docs/installation/cli',
            'dev-docs/installation/docker',
          ]
        },
        {
          type: 'category',
          label: 'Configuration',
          link: {
            /**
            * Use the 2 lines below to make sure that
            * "Installation" in the TOC is a clickable link
            * pointing to a page (i.e., type: 'doc') whose link target
            * is defined as the 'id' property.
            */
            type: 'doc',
            id: 'dev-docs/configurations',
          },
          items: [
            // 'dev-docs/configurations/database',
            // 'dev-docs/configurations/server',
            // 'dev-docs/configurations/admin-panel',
            // 'dev-docs/configurations/middlewares',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '🔧 Development',
      items: [
        'dev-docs/admin-panel-customization',
        {
          type: 'category',
          label: 'Back-end customization',
          link: {
            type: 'doc',
            id: 'dev-docs/backend-customization',
          },
          items: [
            'dev-docs/backend-customization/controllers',
            'dev-docs/backend-customization/middlewares',
          ]
        },
        'dev-docs/typescript'
      ]
    },
    {
      type: 'category',
      label: '💻 APIs',
      items: [
        {
          type: 'category',
          label: 'REST API',
          link: {
            type: 'doc',
            id: 'dev-docs/api/rest',
          },
          items: [
            'dev-docs/api/rest/parameters',
            'dev-docs/api/rest/populate-select',
            'dev-docs/api/rest/filters-locale-publication',
            'dev-docs/api/rest/sort-pagination',
          ]
        },
        'dev-docs/api/plugins/admin-panel-api',
      ]
    }
  ],
  userDocsSidebar: [
    'user-docs/intro',
    {
      type: 'category',
      label: 'Content-type Builder',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/content-type-builder'
        }
      ]
    }
  ],
};

module.exports = sidebars;
