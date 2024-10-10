import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <nav>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </nav>
      <h1 style={{ color: "aquamarine" }}>About Page </h1>
      <br />
      <Link
        style={{ color: "#6cb3ec", textDecoration: "underline" }}
        href="/About/Team">
        Our Team
      </Link>
    </>
  );
}
