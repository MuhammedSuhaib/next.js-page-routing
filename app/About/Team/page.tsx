import React from "react";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
      <nav >
        <Link href="/">
          <button>Back to Home</button>
        </Link>
        <br />
      </nav>
      <h1 style={{ color: "aquamarine" }}> Team Page </h1>
      <br />
      
        
      
      <div style={{ textAlign: "center" }}>
      <h2 >Meet Our Team</h2>
      <br />
      <p>We have a dedicated team of professionals working towards excellence.</p>
    </div>
    
      
    
    </>
  );
}
