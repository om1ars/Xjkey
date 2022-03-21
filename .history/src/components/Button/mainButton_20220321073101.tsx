import React from "react";

export default function MainButton({ title, disabled }: any) {
  return (
    <button className={mt-10 flex  items-center justify-center rounded  bg-buttonBg pl-4 pr-4 pt-2 pb-2 text-white transition-all hover:bg-buttonHover">
      {title}
    </button>
  );
}
