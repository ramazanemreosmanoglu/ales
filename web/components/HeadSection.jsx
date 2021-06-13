import Head from 'next/head'

export default function HeadSection(props) {
    return (<>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Demo Application of ales." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://bootswatch.com/5/lumen/bootstrap.min.css" />
      </Head>
    </>)
}