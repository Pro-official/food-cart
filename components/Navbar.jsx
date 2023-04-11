import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "BLOGS",
    href: "/blogs",
  },
  {
    name: "VIDEOS",
    href: "/videos",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "SIGN UP",
    href: "/signin",
  },
];

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    // <div className={styles.container}>
    //   <div className={styles.item}>
    //     <div className={styles.callButton}>
    //       <Image src="/img/telephone.png" alt="" width="32" height="32" />
    //     </div>
    //     <div className={styles.texts}>
    //       <div className={styles.text}>ORDER NOW!</div>
    //       <div className={styles.text}>012 345 678</div>
    //     </div>
    //   </div>
    //   <div className={styles.item}>
    //     <ul className={styles.list}>
    //       <Link href="/" passHref>
    //         <li className={styles.listItem}>Homepage</li>
    //       </Link>
    //       <li className={styles.listItem}>Products</li>
    //       <li className={styles.listItem}>Menu</li>
    //       <Image src="/img/logo.png" alt="" width="160px" height="69px" />
    //       <li className={styles.listItem}>Events</li>
    //       <li className={styles.listItem}>Blog</li>
    //       <li className={styles.listItem}>Contact</li>
    //     </ul>
    //   </div>
    //   <Link href="/cart" passHref>
    //     <div className={styles.item}>
    //       <div className={styles.cart}>
    //         <Image src="/img/cart.png" alt="" width="30px" height="30px" />
    //         <div className={styles.counter}>{quantity}</div>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
    // <div className="navbar bg-transparent max-w-5xl mx-auto p-4">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <Image
    //         src="https://cdn.cmsfly.com/63ee134969c752004dc4ac3f/frame-1000007267-UOzbnn.png"
    //         alt="hero food banner"
    //         width={160}
    //         height={50}
    //       />
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <a>Home</a>
    //         </li>
    //         <li>
    //           <a>About</a>
    //         </li>
    //         <li>
    //           <a>Menu</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <a>Home</a>
    //       </li>
    //       <li>
    //         <a>Item 3</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Get started</a>
    //   </div>
    // </div>
    <>
      <Popover className="absolute top-0 w-full lg:max-w-6xl mx-auto py-10 flex items-center justify-between">
        <Link href="/" passHref>
          <Image
            src="https://cdn.cmsfly.com/63ee134969c752004dc4ac3f/frame-1000007267-UOzbnn.png"
            alt="hero food banner"
            width={160}
            height={54}
          />
        </Link>

        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Link href="/">
            <a className="text-white font-links font-bold mt-3 mr-2 hover:text-[#FFC90F] hover:underline focus:text-black underline-offset-4">
              HOME
            </a>
          </Link>
          <Link href="/about">
            <a className="text-white font-links font-bold mt-3 mr-2 hover:text-[#FFC90F] hover:underline underline-offset-4">
              ABOUT
            </a>
          </Link>
          <Link href="/about">
            <a className="text-white font-links font-bold mt-3 mr-2 hover:text-[#FFC90F] hover:underline underline-offset-4">
              MENU
            </a>
          </Link>
          <Link href="/signin" passHref>
            <button className="btn gap-2 font-bold text-[#505050] bg-[#FFC90F]">
              Cart
              <div className="badge bg-white border-0 text-[#505050]">
                +{quantity}
              </div>
            </button>
          </Link>
        </Popover.Group>
        <div className="mr-2 my-2 md:hidden">
          <Popover.Button>
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6 ml-auto" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <h1 className="text-4xl font-black font-title ">
                        DevNotes
                      </h1>
                      <p className="leading-none ml-2 text-sm font-title font-bold">
                        The Blog
                        <br />
                        For Developers
                      </p>
                    </div>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link key={item.name} href="/">
                        <a className="text-white font-title font-bold mr-4 hover:text-[#FFC90F]">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Navbar;
