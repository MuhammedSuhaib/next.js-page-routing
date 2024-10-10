import React from "react";
import Link from "next/link";
export default function ServicesPage() {
  return (
    <>
      <nav>
        <Link href="/">
          <button>Back to Home</button>{" "}
          {/* Add a button to navigate back to the home page */}
        </Link>
      </nav>
      <h1 style={{ color: "aquamarine" }}>Services Page </h1>{" "}
      {/* i am using inline style here */}
    </>
  );
}
