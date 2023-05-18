import cn from "clsx";

export default function Nav() {
  return (
    <nav
      className={cn("border-b border-gray-200 py-5 relative z-20 bg-white", {
        boxShadow: "0 0 15px 0 rgb(0 0 0 / 10%)",
      })}
    >
      <div
        className={cn("flex items-center lg:px-6 px-8 mx-auto max-w-7xl px-14")}
      >
        <div className="flex flex-row items-center">
          <span>
            <img
              src="./public/favicon256.png"
              width="32"
              height="32"
                >
              <rect width="100%" height="100%" rx="16" fill="#000"></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <ul className="flex items-center content-center">
            <li className="ml-2 text-gray-200">
              <a href="/">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                ></svg>
              </a>
            </li>
            <li className="font-medium" style={{ letterSpacing: ".01px" }}>
              <a href="/">Acme Products</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-end hidden md:flex">
          <nav className="flex-row inline-flex items-center">
            <span className="ml-2 h-full flex items-center cursor-not-allowed text-accents-5">
              <a style={{ margin: "0 .5em" }} href="/">
                Starter
              </a>
              <a style={{ margin: "0 .5em" }} className="mx-1" href="#">
                Emage-Website
              </a>
              <a style={{ margin: "0 .5em" }} className="mx-2" href="/popular">
                Sample
              </a>
              <a style={{ margin: "0 .5em" }} className="mx-3" href="#">
                Docs
              </a>
            </span>
            <span className="ml-2 h-full flex items-center cursor-not-allowed text-accents-5"></span>
          </nav>
        </div>
      </div>
    </nav>
  );
}
