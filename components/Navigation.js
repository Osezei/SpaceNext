import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/Destination">Destination</Link>
          </li>
          <li>
            <Link href="/Crew">Crew</Link>
          </li>
          <li>
            <Link href="/Technology">Tech</Link>
          </li>
        </ul>
        <h1>Navigation</h1>
      </nav>
    </div>
  );
};

export default Navigation;
