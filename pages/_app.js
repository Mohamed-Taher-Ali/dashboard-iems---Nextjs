import { ThemeProvider } from '@ui5/webcomponents-react';
import Layout from './Layout';

import '../styles/global.css';

export default function _app({Component, pageProps}){
  const { title, dropdown, subDropdown, ...props } = pageProps;
  
  return (
    <ThemeProvider>
      <Layout title={title} dropdown={dropdown} subDropdown={subDropdown}>
        <Component {...props} />
      </Layout>
    </ThemeProvider>
  )
}
