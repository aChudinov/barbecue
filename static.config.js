import fetchData from './src/prismic/fetch';
import React from 'React';
import { JssProvider, SheetsRegistry } from 'react-jss';

export default {
  renderToHtml: (render, Comp, meta) => {
    const sheets = new SheetsRegistry();
    const html = render(
      <JssProvider registry={sheets}>
        <Comp />
      </JssProvider>
    );

    meta.styleSheets = sheets;

    return html;
  },

  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html>
      <Head>
        <meta charSet="utf8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
        <style
          type="text/css"
          id="server-side-styles"
          dangerouslySetInnerHTML={{
            __html: renderMeta.styleSheets && renderMeta.styleSheets.toString(),
          }}
        />
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127110671-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "UA-127110671-1");
            `,
          }}
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  getRoutes: async() => {
    const concerts = await fetchData();

    return [
      {
        path: '/',
        component: 'src/containers/Home/index',
        getData: () => ({ concerts, language: 'cz' }),
      },
      {
        path: '/en',
        component: 'src/containers/Home/index',
        getData: () => ({ concerts, language: 'en' }),
      },
      {
        is404: true,
        component: 'src/containers/NotFound/index',
      },
    ];
  },
};
