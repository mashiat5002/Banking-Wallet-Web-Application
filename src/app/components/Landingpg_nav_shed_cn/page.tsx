"use client"

import * as React from "react"
import { FaPiggyBank } from "react-icons/fa6";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dynamic Data Visualization",
    href: "",
    description:
      "The app enables users to view statistical charts in real-time with dynamic data updates.",
  },
  {
    title: "Customizable Chart Options",
    href: "/docs/primitives/hover-card",
    description:
      "Users can select from various chart types and adjust settings to personalize their views.",
  },
  {
    title: "User-Friendly Dashboard",
    href: "/docs/primitives/progress",
    description:
      "The intuitive interface allows easy navigation and seamless interaction across devices.",
  },
  {
    title: "Interactive Filters and Tools",
    href: "/docs/primitives/scroll-area",
    description: "Advanced filters and tools provide users with the ability to refine and analyze data effortlessly.",
  },
  {
    title: "Responsive and Accessible Design",
    href: "/docs/primitives/tabs",
    description:
      "The app is optimized for accessibility and supports multiple screen sizes for a great user experience..",
  },
  {
    title: "Real-Time Chart Updates",
    href: "/docs/primitives/tooltip",
    description:
      "Charts refresh instantly as new data is added or updated.",
  },
]

export function Landingpg_nav_shed_cn() {
  return (
    <NavigationMenu className="text-sm font-semibold ">
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="bg-transparent text-base">
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-black">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild className="bg-custom-green text-black">
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="h-full w-full  flex items-center justify-center">
                      <FaPiggyBank style={{fontSize:'40px', fill:'black'}}/>
                    </div>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Banking Wallet
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Connect banks, cards with Plaid, Dwolla—transfer, pay,
                      monitor, and manage finances effortlessly.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem  title="Introduction" className="bg-custom-green">
                Digital Gateway, Banking Bright, Cards and transfers, day or
                night. Details clear, with ease they flow, Effortless paths
                where finances grow..
              </ListItem>
              <ListItem  title="Registration" className="bg-custom-green">
                Register with your email
              </ListItem>
              <ListItem  title="Statistical Charts" className="bg-custom-green">
              Interactive Dashboard with multidimentional view of transaction summery
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-base">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-black ">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-custom-green ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
          
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
            {/* <NavigationMenuLink className={navigationMenuTriggerStyle()} > */}
            <NavigationMenuLink className="bg-transparent text-base cursor-pointer" >
              Documentation
            </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default Landingpg_nav_shed_cn