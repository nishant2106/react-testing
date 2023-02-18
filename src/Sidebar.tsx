import React from "react";

const Person = ({ items }: { items: { name: string; href: string }[] }) => (
  <div role={"contentinfo"}>
    {items.map((item) => (
      <div key={item.href}>
        <a role={"navigation"} href={item.href}>
          {item.name}
        </a>
      </div>
    ))}
  </div>
);

export default Person;
