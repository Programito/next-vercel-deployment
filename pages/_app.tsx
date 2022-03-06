import { NextPage } from 'next'
import { AppProps } from 'next/app';
// import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  // getLayout?: (page: ReactElement) => ReactNode;
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type ApppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: ApppPropsWithLayout ) {
  // para no utilizar multiples layout que complique el código se crea una función
  const getLayout = Component.getLayout || ((page) => page)
  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
