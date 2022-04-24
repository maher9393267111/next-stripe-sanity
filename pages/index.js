import Head from 'next/head'
import React from "react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
export default function Home({products,bannerData}) {
  console.log(products,'products',bannerData,'bannerData');
  return (
    <div className={styles.container}>
      
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />

      <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />



    </div>
  )
}



export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
 

  return {
    props: { products, bannerData }
  }
}