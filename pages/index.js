import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Main application page</h1>
            <h3>Merchants:</h3>
            <p><Link href={'/flight-template/ETHIHAD'}><a>ETHIHAD</a></Link></p>
            <p><Link href={'/default-template/LIMA'}><a>LIMA</a></Link></p>
            <p><Link href={'/about'}><a>About page</a></Link></p>
            <p></p>
        </div>
  )
}
