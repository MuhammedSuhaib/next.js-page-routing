import Image from "next/image";
import styles from "./page.module.css";
import style from "./home.module.css";
import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
    <h1 className={styles.h1}>This is Home Page</h1>
    <br />
    <nav className={style.Link} >
      <div>
        {" "}
        <Link  href="/About">About</Link>
      </div>
      <div>
        {" "}
        <Link href="/Services">Services</Link>
      </div>{" "}
      <div>
        {" "}
        <Link href="/Contact">Contact</Link>
      </div>
    </nav>
    
    </>
  );
}

export default page;
