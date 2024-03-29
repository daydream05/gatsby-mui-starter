/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

/* eslint-disable react/no-danger */

const React = require('react');
const { renderToString } = require('react-dom/server');
const { JssProvider } = require('react-jss');
const getPageContext = require('./src/utils/getPageContext').default;

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  // Get the context of the page to collected side effects.
  const pageContext = getPageContext();

  const bodyHTML = renderToString(
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      {React.cloneElement(bodyComponent, {
        pageContext,
      })}
    </JssProvider>,
  );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
    />,
  ]);
};