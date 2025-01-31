import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return <div>Topics Page: {params.id}</div>;
}
