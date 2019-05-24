export const imports = {
  'create-react-app.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "create-react-app" */ 'create-react-app.mdx'
    ),
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'start.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "start" */ 'start.mdx'),
  'typescript.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "typescript" */ 'typescript.mdx'
    ),
  'components/general/Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-general-button" */ 'components/general/Button.mdx'
    ),
  'components/general/Icon.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-general-icon" */ 'components/general/Icon.mdx'
    ),
}
