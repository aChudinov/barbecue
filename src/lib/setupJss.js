import jssGlobal from 'jss-global';
import jssNested from 'jss-nested';
import jssVendorPrefixes from 'jss-vendor-prefixer';
import { jss } from 'react-jss';

jss.use(
  jssGlobal(),
  jssNested(),
  jssVendorPrefixes(),
);
