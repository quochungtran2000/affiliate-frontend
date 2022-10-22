import React from "react";
import { background, headerHeight, shadow, text } from "../../constants";

export default function Header() {
  const onHandleAppClick = () => {
    console.log("aaaa");
    document.getElementById("btn-open-sidebar")?.click();
  };
  return (
    <header
      className={`h-[${headerHeight}] sticky top-0 z-10 ${shadow} ${background} ${text}`}
    >
      {/* <div className="flex">
        <div className="flex-none">asdasda</div>
        <div className="flex-1"></div>
      </div> */}
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex w-full px-8 py-4">
          <div className="flex flex-none items-center mr-8">
            <label
              htmlFor="open-side-bar"
              className="flex justify-between items-center"
            >
              <span
                className="material-symbols-outlined"
                // onClick={onHandleAppClick}
              >
                apps
              </span>
            </label>

            <div className="ml-4 md:mr-8">ChiaSeMa</div>
          </div>
          <div className="flex-1 md:ml-16 flex justify-between">
            <span className="relative">
              <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-100"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-full py-2 pr-3 pl-10 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 border"
              />
            </span>

            {/* <form className="group relative">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Filter projects"
                placeholder="Filter projects..."
              />
            </form> */}

            <div className="flex items-center">
              <span className="dark:block hidden">
                <span
                  className="material-symbols-outlined mr-2"
                  onClick={() => {
                    document.documentElement.classList.remove("dark");
                  }}
                >
                  light_mode
                </span>
              </span>

              <span className="dark:hidden block">
                <span
                  className="material-symbols-outlined mr-2"
                  onClick={() => {
                    document.documentElement.classList.add("dark");
                  }}
                >
                  dark_mode
                </span>
              </span>

              <span className="material-symbols-outlined mr-2">
                notifications
              </span>

              <div className="relative flex-shrink-0">
                {/* <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span> */}
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt=""
                  className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
