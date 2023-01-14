import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <div className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <Image src='/favicon/mstile-150x150.png' height={45} width={45} alt={title} />
            <h4 className="ml-2 text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-6xl">            
              {title}
            </h4>
          </div>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
        </header>
      )

    case 2:
      return (
        <header>
          <div className="flex flex-col items-center md:flex-row">
            <Image src='/favicon/mstile-150x150.png' height={45} width={45} alt={title} />
            <h4 className="ml-2 mt-20 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
              <Link href="/" className="hover:underline">
                {title}
              </Link>
            </h4>
          </div>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
