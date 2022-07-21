import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Trending GIFs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2&Inter&display=swap" rel="stylesheet" />
      </Head>
      <header className="header">
          <h1>TOP GIFs of The Day</h1>
      </header>
      <main className="body">{children}</main>
      <footer className="footer">
          <p>©2022 Designed and Developed by Christine Lee</p>
      </footer>
    </div>
  )
}
