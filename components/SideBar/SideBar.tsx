import React, { useState } from "react";
import { background, headerHeight, transition } from "../../constants";
import { menu } from "../../constants/menu";

export default function SideBar() {
  const [open, setOpen] = useState<boolean>(true);
  const onClick = () => setOpen(!open);
  return (
    <div id="sidebar" className={`relative hidden md:flex  border-r border-gray-200 dark:border-gray-700 `}>
      <div
        className={`${transition} shrink-0 relative h-screen-purple ${
          open ? "w-56" : "w-14"
        }`}
      >
        <div className={`flex sticky top-[${headerHeight}]`}>
          <ul className="flex-1 pt-2 pb-4 space-y-1 text-sm w-full">
            {menu.map((element, index) => (
              <li className="rounded-sm p-4" key={index}>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <span className={element.classes}>{element.iconName}</span>
                  <span className={`ml-4 ${!open && "hidden"}`}>
                    {element.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <input
          type="checkbox"
          onClick={onClick}
          className="hidden"
          id="open-side-bar"
        />
      </div>
      <div
        className={`fixed bottom-0  ${background} z-10 ${
          open ? "hidden" : "block"
        }`}
      >
        <ul className="space-y-1 text-sm w-full border-r border-gray-200 dark:border-gray-700">
          <li className="rounded-sm p-4">
            <label
              htmlFor="open-side-bar"
              className="flex justify-between items-center"
            >
              <span className="material-symbols-outlined">add</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
