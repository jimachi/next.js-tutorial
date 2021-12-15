import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/profile.jpeg"
        height={144}
        width={144}
        alt="your name"
      />

    <style jsx>{`
      h1 {
        color: red;
      }
    `}
    </style>
    </>
  )
}