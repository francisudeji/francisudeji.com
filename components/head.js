import Head from 'next/head'

function NextHead({ pageTitle }) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href='/static/favicon.ico' />
      <link rel='canonical' href='https://francisudeji.com' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='theme-color' content='#15202b' />
      <meta name='robots' content='index, follow' />

      <meta
        name='description'
        content='Francis Udeji | Full Stack JavaScript Developer'
      />

      <meta itemProp='name' content='Francis Udeji' />
      <meta
        itemProp='description'
        content='Francis Udeji | Full Stack JavaScript Developer'
      />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='francisudeji' />
      <meta
        name='twitter:description'
        content='Personal Website by Francis Udeji | Full Stack JavaScript Developer'
      />
      <meta name='twitter:site' content='@francisudeji' />

      <meta name='og:title' content='Francis Udeji' />
      <meta
        name='og:description'
        content='Francis Udeji | Full Stack JavaScript Developer'
      />
      <meta name='og:url' content='https://francisudeji.netlify.com' />
      <meta name='og:site_name' content='Francis Udeji' />
      <meta name='og:type' content='website' />

      {pageTitle ? (
        <title>{pageTitle}</title>
      ) : (
        <title>Francis Udeji | Full Stack JavaScript Developer</title>
      )}
    </Head>
  )
}

export default NextHead
