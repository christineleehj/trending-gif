import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const breakpointColsObj = {
    default: 4,
    1600: 3,
    800: 2,
    500: 1
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=fZ1nz1qdLoyzsM2oURMfZaANYeElNoXw")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.data);
        }
      )
    window.addEventListener("scroll", toggleVisibility);
  }, [])

  const items = data.map(function (item) {
    return <a href={item.url} target="_blank"><img class="giphy-gif" src={item.images.downsized_medium.url} alt={item.title} /></a>
  });

  return (
    <Layout>
      <Masonry
        breakpointCols={breakpointColsObj}
        className="masonry-grid"
        columnClassName="masonry-grid__column"
      >
        {items}
      </Masonry>
      <div className="scroll-to-top">
        {isVisible &&
          <div onClick={scrollToTop}>
            <div class="arrow-up" title="scroll to top" />
          </div>}
      </div>
    </Layout>
  );
}