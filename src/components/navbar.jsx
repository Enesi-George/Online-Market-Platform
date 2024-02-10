"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Brand } from "./brand";
import "../index.css";
import { CategoriesMenu } from "./categoriesMenu";
import { profileItems } from "./profileItem";

export function NavigationBar() {
  // Define your array of menu items
  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "#" },
    { name: "Services", to: "#" },
    { name: "Pricing", to: "#" },
    { name: "Contact Us", to: "#" },
  ];

  return (
    <>
      <Brand />
      <Navbar fluid className="bg-gray-800 text-white lg:px-44 py-0 ">
        <div className="flex md:order-2 p-0">
          {/* Your user dropdown remains unchanged */}
          <Dropdown
            arrowIcon={false}
            className="p-0"
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="p-0"
              />
            }
          >
            {/* Your user dropdown items remain unchanged */}
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            {profileItems.map((profileItem, index) => (
              <Dropdown.Item key={index} icon={profileItem.icon}>
                {profileItem.label}
              </Dropdown.Item>
            ))}
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="md:justify-start mx-0 my-auto py-0">
          <CategoriesMenu />

          {/* Use map to dynamically generate Navbar.Link components */}
          {menuItems.map((menuItem, index) => (
            <Navbar.Link
              key={index}
              href={menuItem.to}
              className=" custom-hover-red"
            >
              {menuItem.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
