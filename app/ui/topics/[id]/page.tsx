import { resolve } from "path";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>Topics Page: {params.id}</div>;
}
