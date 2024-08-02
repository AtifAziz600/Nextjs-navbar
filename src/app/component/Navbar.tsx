"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/imgae/logo.svg";
import { FiMenu, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import todoImage from "@/assets/imgae/icon-todo.svg";
import calendarImage from "@/assets/imgae/icon-calendar.svg";
import remindersImage from "@/assets/imgae/icon-reminders.svg";
import planningImage from "@/assets/imgae/icon-planning.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AiOutlineClose, AiOutlineMore, AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    iconImage?: string;
  };

  const navItems: NavItem[] = [
    {
      label: "Features",
      link: "#",
      children: [
        {
          label: "Todo list",
          link: "#",
          iconImage: todoImage,
        },
        {
          label: "Calendar",
          link: "#",
          iconImage: calendarImage,
        },
        {
          label: "Reminders",
          link: "#",
          iconImage: remindersImage,
        },
        {
          label: "Planning",
          link: "#",
          iconImage: planningImage,
        },
      ],
    },
    {
      label: "Company",
      link: "#",
      children: [
        {
          label: "History",
          link: "#",
        },
        {
          label: "Our Team",
          link: "#",
        },
        {
          label: "Blog",
          link: "#",
        },
      ],
    },
    {
      label: "Careers",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm text-black">
      {/* LEFT SIDE */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* LOGO */}
        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-4xl block md:hidden"
        />
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <Image src={logo} alt="logo" className="hidden md:block" />
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90 hidden sm:block md:block">
          Select your delivery location
        </button>
      </section>

      {/* CENTER SIDE */}
      <section className="flex items-center flex-1 mx-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search your products"
            className="w-full px-10 py-2 rounded-md text-black placeholder-gray-500"
          />
          
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="flex items-center gap-4">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90 hidden sm:block md:block">
          Download App Now
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90 hidden md:block">
          বাংলা
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90 hidden md:block">
          Sign in / Sign up
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90 md:hidden">
          <AiOutlineUser className="text-xl" />
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90 md:hidden">
          <AiOutlineMore className="text-xl" />
        </button>
      </section>
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    iconImage?: string;
  };

  const navItems: NavItem[] = [
    {
      label: "Features",
      link: "#",
      children: [
        {
          label: "Todo list",
          link: "#",
          iconImage: todoImage,
        },
        {
          label: "Calendar",
          link: "#",
          iconImage: calendarImage,
        },
        {
          label: "Reminders",
          link: "#",
          iconImage: remindersImage,
        },
        {
          label: "Planning",
          link: "#",
          iconImage: planningImage,
        },
      ],
    },
    {
      label: "Company",
      link: "#",
      children: [
        {
          label: "History",
          link: "#",
        },
        {
          label: "Our Team",
          link: "#",
        },
        {
          label: "Blog",
          link: "#",
        },
      ],
    },
    {
      label: "Careers",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
  ];

  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((data, index) => (
            <SingleNavItems
              key={index}
              label={data.label}
              iconImage={data.iconImage}
              link={data.link}
            >
              {data.children}
            </SingleNavItems>
          ))}
        </div>
        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>
          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItems(data:any) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }
  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={data.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{data.label}</span>
        {data.children && (
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>
      {/*dropdown */}
      {isItemOpen && data.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex ">
          {data.children.map((ch:any, i:any) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-start py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
