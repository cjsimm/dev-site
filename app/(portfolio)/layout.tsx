import Image from "next/image";
import styles from './page.module.css';

export default function RootLayout({children,}: {children: React.ReactNode}) {
  
  
  return (
    <html lang="en">
      <body className={styles.body}>
        <header>
          <div className={styles.logo}>
            <Image 
              priority
              src={"/logo.svg"}
              className={styles.logo}
              height={100}
              width={100}
              alt="C"
            />   
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}