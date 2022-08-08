import React from "react";
import "../Styles/Home.css";
import Stationery from "../images/stationery.jpg";
import Product from "./Product";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.png";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Stationery} alt="" />
        <div className="home_row">
          <Product
            id="101"
            title="The Complete Book of Drawing Techniques: A Professional Guide"
            image={p1}
            price={210.99}
            rating="★★★★★"
          />
          <Product
            id="102"
            title="Angel Bear 35 Pieces Professional Drawing Pencils Kit for Artist"
            image={p2}
            price={999.99}
            rating="★★★★"
          />
          <Product
            id="103"
            title="Winsor & Newton Water Colour The Compact Set 14 Half Pans with Brush"
            image={p3}
            price={2930.99}
            rating="★★★★★"
          />
        </div>
        <div className="home_row">
          <Product
            id="104"
            title="Brustro Twin Tip Alcohol Based Marker Set of 24 (A) in Elegant Marker Wallet"
            image={p4}
            price={1999.99}
            rating="★★★★"
          />
          <Product
            id="105"
            title="Camlin Full Toolkit - Paint Brushes Roller and Knife for Acrylic Paints, Oil, Modern Art Painting etc (Set of 20)"
            image={p5}
            price={499.99}
            rating="★★★"
          />
        </div>
        <div className="home_row">
          <Product
            id="106"
            title="ARTEZA MEGA COMBO PACK : Watercolor Paint (Set of 60), Professional Colored Pencils (Set of 72) and Real Brush Pens (Set of 96)"
            image={p6}
            price={22639}
            rating="★★★★★"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
