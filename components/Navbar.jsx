import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const solutions = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "MENU",
    href: "/menu",
  },
  {
    name: "CART",
    href: "/cart",
  },
];

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <Popover className="absolute top-0 w-full lg:max-w-6xl mx-auto py-10 flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <Image
              src="https://cdn.cmsfly.com/63ee134969c752004dc4ac3f/frame-1000007267-UOzbnn.png"
              alt="hero food banner"
              width={160}
              height={54}
            />
          </a>
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
          <Link href="/cart" passHref>
            <button className="btn gap-2 font-bold text-[#505050] bg-[#FFC90F]">
              Cart
              <div className="badge bg-white border-0 text-[#505050]">
                {quantity}
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
                  <div></div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <nav className="grid gap-y-6">
                    {solutions.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="text-black font-bold hover:text-[#FFC90F]">
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
