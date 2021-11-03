import Head from 'next/head'
import Image from 'next/image'
import terraverdesalse from '../public/work/terraverde-salse.jpg'
import lafestuca from '../public/work/festuca/uno.jpg'

const page = () => (
  <div>
    <Head>
      <title>Sarah Bonavia - Work</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
        Work{'&'}Experiences
      </h1>

      <nav>
        <ul>
          <li>All</li>
          <li>Corporate</li>
          <li>Packaging</li>
          <li>Events</li>
          <li>Social Work</li>
        </ul>
      </nav>
      <section className="p-4 bg-gray-200">
        <Image src={terraverdesalse} alt="terra verde salse" ></Image>
        <h2 className="text-xl text-red-800">
          Terra Verde
          <small className="block text-gray-700">Biologica tradizione dal 1982</small>
        </h2>
        <p>Blah blah</p>
      </section>
      <section>
        <Image src={lafestuca} alt="yogurt la festuca" ></Image>
        <h2>
          La Festuca
          <small>Biologica tradizione ticinese</small>
        </h2>
        <p>altro</p>
      </section>
  
    </main>
  </div>
)

export default page
