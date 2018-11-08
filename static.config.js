import fetchData from './src/prismic/fetch';
import React from 'React';
import { JssProvider, SheetsRegistry } from 'react-jss';

const FACEBOOK_TAGS = [
  { name: 'url', value: 'http://barbecueband.cz/' },
  { name: 'type', value: 'profile' },
  { name: 'title', value: 'Barbecue bluegrass band from Czech republic' },
  { name: 'description', value: 'Barbecue, the bluegrass band, was founded in 2002 in the heart of Europe in the Czech Republic. A large part of their repertoire, alongside the traditional and modern bluegrass, features its own songs. The performance of the Barbecue group emanates positive energy and good humour. As the band members say themselves: "We have fun at the stage and we pass it onto our audience."' },
  { name: 'image', value: 'http://barbecueband.cz/images/album.png' },
];

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

        <title>Barbecue bluegrass band from Czech republic</title>
        <link rel="icon" type="image/png" href="http://barbecueband.cz/images/logo.png" />

        {FACEBOOK_TAGS.map(({ name, value }) =>
          <meta key={name} property={`og:${name}`} content={value} />
        )}

        <style
          type="text/css"
          id="server-side-styles"
          dangerouslySetInnerHTML={{
            __html: renderMeta.styleSheets && renderMeta.styleSheets.toString(),
          }}
        />
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
        <link rel="canonical" href="http://barbecueband.cz/" />

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
