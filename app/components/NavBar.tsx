'use client'

import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";
import SearchBox from "@/app/components/SearchBox";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Session } from "next-auth";

const NavBar = ({session}: {session: Session | null}) => {
  const path = usePathname();

  // move these in the future...
  var links = [
    {
      "name": "Posts",
      "href": "/articles",
      "label": "posts"
    },
    {
      "name": "Galleries",
      "href": "/galleries",
      "label": "galleries"
    },
    {
      "name": "My CV",
      "href": "/resume/current",
      "label": "cv"
    },
    {
      "name": "Resources",
      "href": "/resources",
      "label": "resources"
    }
  ]
  if (process.env.NODE_ENV !== "production" || session) {
    links.push({
      "name": "Admin",
      "href": "/admin",
      "label": "admin"
    })
  }

  return (
    <div className="navbar bg-primary dark:bg-neutral text-primary-content dark:text-neutral-content md:flex gap-2 rounded-box" aria-label="navbar-container">
      <div className="navbar-start" aria-label="navbar-start">
        <Link aria-label="homeIcon" href="/" className="max-md:hidden fill-primary-content dark:fill-neutral-content ml-2">
          <svg
            width="60"
            height="60"
            viewBox="0 -410 2580 1500"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(2.654321,0,0,-2.654321,-230.92593,1554.3519)">
              <path
                id="alpha"
                d="M 788,916 L 958,916 L 855,453 C 835,365 821.33333,311 814,291 C 840.66667,168.33333 879.33333,107 930,107 C 990,107 1021,148.33333 1023,231 L 1059,231 C 1057,153.66667 1042.8333,91.166667 1016.5,43.5 C 990.16667,-4.1666667 955.66667,-28 913,-28 C 877.66667,-28 851.33333,-13.666667 834,15 C 816.66667,43.666667 798,102.33333 778,191 C 708.66667,45 595.33333,-28 438,-28 C 330.66667,-28 245.33333,13.833333 182,97.5 C 118.66667,181.16667 87,301 87,457 C 87,610.33333 121.66667,729.66667 191,815 C 260.33333,900.33333 343.66667,943 441,943 C 509.66667,943 566,918.66667 610,870 C 654,821.33333 693,742 727,632 L 788,916 z M 700,524 C 668.66667,631.33333 633.66667,715.16667 595,775.5 C 556.33333,835.83333 510,866 456,866 C 334,866 273,723.33333 273,438 C 273,167.33333 331.33333,32 448,32 C 549.33333,32 624.33333,151.33333 673,390 L 700,524 z "
              />
            </g>
          </svg>
        </Link>
        <h2 className="mb-2 ml-6 text-2xl font-mono space-x-4 max-md:hidden">NGNR</h2>
        <div className="dropdown dropdown-start md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar m-2"
          >
            <div className="w-14 rounded-full p-2 fill-primary-content dark:fill-neutral-content">
              <svg
                width="30"
                height="30"
                viewBox="0 -410 2580 1500"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(2.654321,0,0,-2.654321,-230.92593,1554.3519)">
                  <path
                    id="alpha"
                    d="M 788,916 L 958,916 L 855,453 C 835,365 821.33333,311 814,291 C 840.66667,168.33333 879.33333,107 930,107 C 990,107 1021,148.33333 1023,231 L 1059,231 C 1057,153.66667 1042.8333,91.166667 1016.5,43.5 C 990.16667,-4.1666667 955.66667,-28 913,-28 C 877.66667,-28 851.33333,-13.666667 834,15 C 816.66667,43.666667 798,102.33333 778,191 C 708.66667,45 595.33333,-28 438,-28 C 330.66667,-28 245.33333,13.833333 182,97.5 C 118.66667,181.16667 87,301 87,457 C 87,610.33333 121.66667,729.66667 191,815 C 260.33333,900.33333 343.66667,943 441,943 C 509.66667,943 566,918.66667 610,870 C 654,821.33333 693,742 727,632 L 788,916 z M 700,524 C 668.66667,631.33333 633.66667,715.16667 595,775.5 C 556.33333,835.83333 510,866 456,866 C 334,866 273,723.33333 273,438 C 273,167.33333 331.33333,32 448,32 C 549.33333,32 624.33333,151.33333 673,390 L 700,524 z "
                  />
                </g>
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-accent text-accent-content dark:bg-neutral dark:text-neutral-content rounded-box w-52"
          >
            <li>
              <Link href="/" aria-label="dropdown-home">Home</Link>
            </li>
            <li>
              <Link href="/articles" aria-label="dropdown-posts">Posts</Link>
            </li>
            <li>
              <Link href="/resume/current" aria-label="dropdown-cv">My CV</Link>
            </li>
            <li>
              <Link href="/resources" aria-label="dropdown-resources">Resources</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex" aria-label="navbar-center">
        <ul className="menu md:menu-horizontal md:px-2 max-md:hidden">
          {links.map(link => {
            return (
              <li key={link.label}>
            <Link href={link.href} aria-label={link.label}>
              <h2 className={clsx(`m-2 text-1xl font-semibold`,
                {
                  'underline underline-offset-8 text-primary-content dark:text-base-200': path === link.href,
                }, )}>{link.name}</h2>
            </Link>
          </li>
            )
          })}
        </ul>
      </div>
      <div className="navbar-end" aria-label="navbar-end">
        <div className="form-control mr-2">
          <ErrorBoundary fallback={<div className="relative flex flex-1 flex-shrink-0"></div>}>
            <SearchBox placeholder="Search"/>
          </ErrorBoundary>
        </div>
        {/* I'll reactivate this if/when I decide to implement user accounts.
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="A Profile Photo" src="https://avatars.githubusercontent.com/u/5522819?v=4" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-600 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a href="/">Admin</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
