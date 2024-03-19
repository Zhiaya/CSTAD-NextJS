
import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

const myLink = {
  active: {
      off: 'text-blue-50 font-extrabold',
  }
}
export default function NavBarComponents() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-1/367431236_279407468173094_4494881595893545404_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p4Evh09-DDQAX8n-bS1&_nc_ht=scontent.fpnh10-1.fna&edm=ADwHzz8EAAAA&oh=00_AfD79NfUGuyFb4tkq6GKguYTEQWiysHI6TdoDuQK3H3png&oe=65FBD846" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CSTAD</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
      <NavbarLink href="/enroll" className="text-lg text-blue-800 hover:text-primary lg:hover:text-white">
                        Enroll
                    </NavbarLink>
        <NavbarLink as={Link} href="">
          About
        </NavbarLink>
        <NavbarLink href="">Enroll</NavbarLink>
        <NavbarLink href="/ProductCard">Course</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
