import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Main application page</h1>
            <h3>Merchants:</h3>
            <p><Link href={'/template_1/ETHIHAD'}><a>ETHIHAD, template 1</a></Link></p>
            <p><Link href={'/template_2/LIMA'}><a>LIMA, template 2</a></Link></p>
            <p><Link href={'/template_1/UNKNOWN_MERCHANT'}><a>Unregistered merchant, template 1</a></Link></p>
            <p><Link href={'/template_2/UNKNOWN_MERCHANT_2'}><a>Unregistered merchant, template 2</a></Link></p>
            <p><Link href={'/about'}><a>About page</a></Link></p>
            <p></p>
        </div>
  )
}
