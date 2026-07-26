"use client";

import Image from "next/image";
import Link from "next/link";
import {
Search,
ShoppingCart,
User,
Menu,
Globe,
Heart,
ChevronDown
} from "lucide-react";

export default function Header(){

return(

<header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

<div className="container">

<div className="flex h-20 items-center gap-8">

<Link
href="/"
className="shrink-0"
>

<Image
src="/images/merci-bokku-logo.png"
alt="Merci Bokku"
width={170}
height={60}
priority
className="h-12 w-auto object-contain"
/>

</Link>

<div className="hidden xl:flex flex-1">

<div className="relative w-full">

<Search
size={22}
className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
/>

<input
type="search"
placeholder="Rechercher des produits, fournisseurs, marques ou services..."
className="h-12 w-full rounded-full border border-gray-300 bg-gray-50 pl-14 pr-6 text-[15px] outline-none transition focus:border-orange-500 focus:bg-white"
/>

</div>

</div>

<nav className="hidden 2xl:flex items-center gap-8 text-[15px] font-semibold">

<Link href="/produits" className="text-gray-700 hover:text-orange-600">
Produits
</Link>

<Link href="/categories" className="text-gray-700 hover:text-orange-600">
Catégories
</Link>

<Link href="/entreprises" className="text-gray-700 hover:text-orange-600">
Entreprises
</Link>

<Link href="/chine" className="text-gray-700 hover:text-orange-600">
Importer de Chine
</Link>

<Link href="/livraison" className="text-gray-700 hover:text-orange-600">
Livraison
</Link>

<Link href="/contact" className="text-gray-700 hover:text-orange-600">
Contact
</Link>

</nav>

<div className="flex items-center gap-5">

<button className="hidden lg:flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-orange-500">

<Globe size={18}/>

Français

<ChevronDown size={16}/>

</button>

<Link href="/favoris">

<Heart
className="text-gray-700 hover:text-orange-600"
size={22}
/>

</Link>

<Link href="/panier">

<ShoppingCart
className="text-gray-700 hover:text-orange-600"
size={22}
/>

</Link>

<Link href="/connexion">

<User
className="text-gray-700 hover:text-orange-600"
size={22}
/>

</Link>

<Link
href="/vendeur"
className="hidden lg:flex rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
>

Vendre

</Link>

<button className="2xl:hidden">

<Menu size={26}/>

</button>

</div>

</div>

</div>

</header>

);

}
