import 'normalize.css'
import '../public/icon-font.min.css'
import '../public/fonts.css'
import type { AppProps } from 'next/app'

import {
  defaultTheme,
  ThemeProvider,
  Preflight
} from '@xstyled/styled-components'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  const theme = {
    ...defaultTheme,
    screens: {
      ...defaultTheme.screens,
      xxs: 375,
      xs: 480
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
