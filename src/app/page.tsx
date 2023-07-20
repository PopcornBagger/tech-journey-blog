import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = 'https://unsplash.com/photos/NgDapgpAiTE';
const imageKey = imageUrl.split('/').at(-1);

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
          &quot;Stand tall, wear a crown, and be sweet on the inside&quot; 
          </p>
          <div className={'my-4'}>
            <i>
            When life gives you lemons, sell them and buy a pineapple.
{' '}
              <button className={'btn btn-primary'}>
                <Link href={'https://www.foodrepublic.com/img/gallery/take-the-sting-out-of-pineapple-with-a-salt-water-soak/intro-1684948369.jpg'}>
                  <span className={'text-primary-content'}>
                    here
                  </span>
                </Link>
              </button>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={`https://source.unsplash.com/${imageKey}`} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Recipes</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
