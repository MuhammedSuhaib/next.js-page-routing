"use client";
import Link from "next/link";
export default function TeamPage() {
  async function handleAdd() {
    const num1 = prompt("Enter Num 1");
    const num2 = prompt("Enter Num 2");
    const res = await fetch("http://localhost:8000/api/?a=" + num1 + "&b=" + num2);
    const data = await res.json();
    alert(data.result);
  }
  return (
    <>
      <nav>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
        <br />
      </nav>
      <h1 style={{ color: "aquamarine" }}> Team Page </h1>
      <br />

      <div style={{ textAlign: "center" }}>
        <h2>Meet Our Team</h2>
        <br />
        <p>
          We have a dedicated team of professionals working towards excellence.
        </p>
      </div>
      <br />
      <button onClick={handleAdd}>Add Two Numbers</button>
    </>
  );
}
