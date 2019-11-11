import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' style={{ scrollBehavior: 'smooth', height: '100%' }}>
        <Head>
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-145785346-1'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
							window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-145785346-1');
						`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
