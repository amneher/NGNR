import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer flex p-10 bg-secondary dark:bg-neutral text-secondary-content dark:text-neutral-content inset-x-0 bottom-0 place-content-center"
      aria-label="footer-container"
    >
      <aside aria-label="footer-branding">
        <div className="fill-secondary-content dark:fill-neutral-content" aria-label="footer-logo">
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
        </div>
        <p>
          NGNR . US
          <br />
          All I know is but a fistful of straw.
        </p>
      </aside>
      <nav aria-label="footer-services">
        <header className="footer-title">Services</header>
        <Link href="#" className="link link-hover">
          Development
        </Link>
        <Link href="#" className="link link-hover">
          Translation
        </Link>
        <Link href="#" className="link link-hover">
          Writing
        </Link>
      </nav>
      <nav aria-label="footer-contact">
        <header className="footer-title">Contact</header>
        <Link
          href="https://github.com/amneher"
          target="_blank"
          className="link link-hover"
        >
          GitHub
        </Link>
        <Link
          href="https://www.instagram.com/amneher/"
          target="_blank"
          className="link link-hover"
        >
          Instagram
        </Link>
        <Link
          href="https://www.youtube.com/channel/UClGrHe-nV8zHX7VCWyK4AVg"
          target="_blank"
          className="link link-hover"
        >
          YouTube
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
