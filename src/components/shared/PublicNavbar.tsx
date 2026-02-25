import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getCookie } from "@/services/auth/tokenHandlers";
import Link from "next/link";
import Image from "next/image";

import AISearchDialog from "./AISSearchDialog";
import NavbarAuthButtons from "./NavbarAuthButtons";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const PublicNavbar = async () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/consultation", label: "Consultation" },
    { href: "/health-plans", label: "Health Plans" },
    { href: "/doctors", label: "Doctors" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const accessToken = await getCookie("accessToken");
  const userInfo = accessToken ? await getUserInfo() : null;
  const dashboardRoute = userInfo
    ? getDefaultDashboardRoute(userInfo.role)
    : "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050B1A] text-white backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Doctorate Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-white">Doctorate</span>
        </Link>

        {/* Desktop Navigation (ACTIVE LOGIC HERE) */}
        <NavLinks navItems={navItems} />

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <AISearchDialog />
          <NavbarAuthButtons
            initialHasToken={!!accessToken}
            initialUserInfo={userInfo}
            initialDashboardRoute={dashboardRoute}
          />
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          navItems={navItems}
          hasAccessToken={!!accessToken}
          userInfo={userInfo}
          dashboardRoute={dashboardRoute}
        />
      </nav>
    </header>
  );
};

export default PublicNavbar;








// import { getDefaultDashboardRoute } from "@/lib/auth-utils";
// import { getUserInfo } from "@/services/auth/getUserInfo";
// import { getCookie } from "@/services/auth/tokenHandlers";
// import Link from "next/link";
// import AISearchDialog from "./AISSearchDialog";

// import NavbarAuthButtons from "./NavbarAuthButtons";
// import Image from "next/image";
// import MobileMenu from "./MobileMenu";

// const PublicNavbar = async () => {
//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/consultation", label: "Consultation" },
//     { href: "/health-plans", label: "Health Plans" },
//     { href: "/consultation", label: "Doctors" },
//     { href: "/aboutUs", label: "About Us" },
//     { href: "/blogs", label: "Blog" },
//     { href: "/contact", label: "Contact" }
//   ];

//   const accessToken = await getCookie("accessToken");
//   const userInfo = accessToken ? await getUserInfo() : null;
//   const dashboardRoute = userInfo
//     ? getDefaultDashboardRoute(userInfo.role)
//     : "/";

//   return (
//     <header className="sticky top-0 z-50 w-full  bg-[#050B1A] text-white backdrop-blur ">
//       <nav className="container mx-auto  flex h-16 items-center justify-between px-4">
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logo.png"
//             alt="Doctorate Logo"
//             width={40}
//             height={40}
//             className="h-10 w-10"
//           />
//           <span className="text-xl font-bold text-white">Doctorate</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex md:items-center md:space-x-6">
//           {navItems.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="text-sm font-medium text-white transition-colors hover:text-blue-600 active:text-blue-600"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Right side actions */}
//         <div className="hidden md:flex items-center space-x-2">
//           <AISearchDialog />
//           <NavbarAuthButtons
//             initialHasToken={!!accessToken}
//             initialUserInfo={userInfo}
//             initialDashboardRoute={dashboardRoute}
//           />
//         </div>

//         <MobileMenu
//           navItems={navItems}
//           hasAccessToken={!!accessToken}
//           userInfo={userInfo}
//           dashboardRoute={dashboardRoute}
//         />
//       </nav>
//     </header>
//   );
// };

// export default PublicNavbar;













// import { getDefaultDashboardRoute } from "@/lib/auth-utils";
// import { getUserInfo } from "@/services/auth/getUserInfo";
// import { getCookie } from "@/services/auth/tokenHandlers";
// import Link from "next/link";
// import AISearchDialog from "./AISSearchDialog";
// import MobileMenu from "./MobileMenu";
// import NavbarAuthButtons from "./NavbarAuthButtons";
// import Image from "next/image";

// const PublicNavbar = async () => {
//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/consultation", label: "Consultation" },
//     { href: "/health-plans", label: "Health Plans" },
//     { href: "/about", label: "About Us" },
//     { href: "/doctors", label: "Doctors" },
//     { href: "/blog", label: "Blog" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const accessToken = await getCookie("accessToken");
//   const userInfo = accessToken ? await getUserInfo() : null;
//   const dashboardRoute = userInfo
//     ? getDefaultDashboardRoute(userInfo.role)
//     : "/";

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-blue-950 text-white backdrop-blur  dark:bg-background/95">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <div>
//           <Image src="/logo.png" alt="Logo" width={40} height={40} />
//         </div>
//         <div>
//           <Link href="/" className="flex items-center space-x-2">
//           <span className="text-xl font-bold text-primary">Doctorate</span>
//         </Link>
//         </div>

//         <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
//           {navItems.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               prefetch={true}
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

// <div className="hidden md:flex items-center space-x-2">
//   <AISearchDialog />
//   <NavbarAuthButtons
//     initialHasToken={!!accessToken}
//     initialUserInfo={userInfo}
//     initialDashboardRoute={dashboardRoute}
//   />
// </div>

//         {/* Mobile Menu */}
// <MobileMenu
//   navItems={navItems}
//   hasAccessToken={!!accessToken}
//   userInfo={userInfo}
//   dashboardRoute={dashboardRoute}
// />
//       </div>
//     </header>
//   );
// };

// export default PublicNavbar;
