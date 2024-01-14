import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>12.02.2023 - </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
            <h1>Quisquam voluptatibus, quia, consequuntur, quod.</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quisquam voluptatibus, quia, consequuntur, quod voluptas quos 
          quibusdam voluptates quae doloribus natus fugit. 
          Quisquam voluptatibus, quia, consequuntur, quod voluptas 
          quos quibusdam voluptates quae doloribus natus fugit...
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card
