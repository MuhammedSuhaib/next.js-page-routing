import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <nav>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </nav>
      <h1 style={{ color: "aquamarine" }}>Contact Page </h1>
    </>
  );
}
