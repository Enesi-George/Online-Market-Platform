import { Dropdown } from "flowbite-react";
import { MdPhoneIphone } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { PiTelevision } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../index.css";

export function CategoriesMenu() {
  const menuItems = [
    { label: "Phones", icon: MdPhoneIphone, to: "/category/phones" },
    { label: "Vehicles", icon: FaCar, to: "/category/vehicles" },
    { label: "Televisions", icon: PiTelevision, to: "/category/Television" },
    { label: "Spare Parts", icon: BsTools, to: "/category/spare-parts" },
  ];

  return (
    <Dropdown
      label="All Categories"
      className="md:justify-start my-0"
      style={{
        backgroundColor: "#EF5350",
        borderRadius: "0px",
        margin: "0px",
        padding: "5px",
        outline: "none",
        boxShadow: "none",
        transition: "background-color 0.3s ease-in-out", // Add transition for a smooth effect
        cursor: "pointer",
      }}
      hoverStyle={{ backgroundColor: "#D32F2F" }} // Add hover style
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          bonnie@flowbite.com
        </span>
      </Dropdown.Header>

      {/* Using map to dynamically generate Dropdown Items */}
      {menuItems.map((menuItem, index) => (
        <Link key={index} to={menuItem.to}>
          <Dropdown.Item icon={menuItem.icon}>{menuItem.label}</Dropdown.Item>
        </Link>
      ))}
    </Dropdown>
  );
}
