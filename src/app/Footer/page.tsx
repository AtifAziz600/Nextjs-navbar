import Image from "next/image";
import Link from "next/link";
import footerImage from "../../assets/imgae/logo.svg"; // Correct the path if necessary

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-green-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src={footerImage} className="h-8 me-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {/* Your text here */}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.29 16c7.547 0 11.675-6.144 11.675-11.474 0-.175 0-.35-.013-.524A8.23 8.23 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .326A10.01 10.01 0 0 0 0 10.163a9.994 9.994 0 0 0 14.693 8.595c.056-.01.112-.03.16-.054.15-.066.29-.153.422-.258.052-.04.108-.076.155-.12a.952.952 0 0 0 .123-.126c.033-.035.058-.076.087-.115.084-.1.167-.204.243-.31a10.118 10.118 0 0 0 1.871-6.004c0-5.405-4.481-9.794-10-9.994Zm4.958 7.276c-.113 2.545-1.895 5.844-4.68 5.844-1.216 0-2.249-.883-3.122-.883-.872 0-2.206.844-3.122.883-1.475.058-2.677-1.576-3.374-3.083C2.75 9.264 3.593 7.13 5.074 6.25c.862-.507 1.972-.752 3.247-.83 1.212-.076 2.362-.152 3.198-.635.232-.134.434-.292.616-.468a3.558 3.558 0 0 0-1.693-.402c-1.325 0-2.66.785-3.198 1.886-.13.261-.23.542-.265.838-.165-.058-.327-.127-.497-.174-1.33-.383-2.662-.204-3.57.52-.793.639-1.338 1.697-1.487 2.814-.153 1.171.309 2.398.814 3.436.207.41.427.826.744 1.164.277.288.643.547 1.056.501.374-.042.726-.302.99-.602.31-.353.601-.754.889-1.154.174-.238.34-.476.512-.712.115-.155.232-.311.35-.466.1-.132.196-.27.308-.385.075-.078.161-.148.27-.153.096-.004.195.057.263.116.397.351.586.876.743 1.377.196.621.355 1.255.522 1.883.031.117.062.234.092.35.086.339.176.677.291 1.004.017.048.036.095.054.143.042.108.096.213.165.31.126.189.321.305.521.351.066.015.133.019.2.01.37-.05.71-.287.933-.624.363-.557.656-1.169.89-1.798.14-.366.272-.736.387-1.11.14-.439.265-.882.388-1.325a.214.214 0 0 0 .005-.02c.12-.47.234-.94.36-1.409.047-.182.1-.364.165-.543.01-.028.025-.054.035-.082.146-.432.323-.856.55-1.268.227-.413.47-.82.708-1.225.044-.075.09-.15.14-.222.114-.162.242-.31.383-.44.14-.13.287-.248.453-.332.212-.104.448-.163.69-.152.272.013.541.14.735.338.117.12.22.26.308.407.086.145.166.293.25.44.174.311.332.628.477.947a10.087 10.087 0 0 1-1.14 10.556c-.243.308-.517.598-.81.867-.21.19-.422.38-.647.557-.125.095-.253.184-.382.275a9.982 9.982 0 0 1-3.904 1.661c-.027.004-.054.011-.08.018-.416.102-.836.186-1.259.239-.113.015-.226.025-.339.035-.03.002-.06.005-.09.007-.313.02-.63.034-.946.034Zm0 0c.045.01.09.018.137.022a.576.576 0 0 0-.124-.022h-.013Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
