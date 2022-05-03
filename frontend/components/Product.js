import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const ProductsList = () => {
  const products = useSelector(state => state.products)
  const renderedProducts = products.map(product => (
    <a className={styles.card}>
      <Link href={`/products/${product.id}`}>
        <article className="product-excerpt" key={product.id}>
          <h3>{product.title}</h3>
          <p className="product-content">{product.content.substring(0, 100)}</p>
        </article>
      </Link>
    </a>
  ))

  return (
    <>
      <div className={styles.grid}>
        {renderedProducts}
      </div>
    </>

  )
}

export default ProductsList