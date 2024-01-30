/* import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
}; */

import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/demo">Go to demo page</Link>
    </>
  );
}
