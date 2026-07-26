import Link from "next/link";
import Image from "next/image";
import {
Search,
ArrowRight,
Truck,
ShieldCheck,
Ship
} from "lucide-react";

export default function Hero(){

return(

<section className="bg-gradient-to-r from-orange-500 via-orange-500 to-green-600">

<div className="container">

<div className="grid min-h-[620px] items-center gap-10 lg:grid-cols-2">

<div className="text-white">

<span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
Marketplace B2B • Côte d'Ivoire
</span>

<h1 className="mt-8 text-5xl font-black leading-tight">
Achetez plus.
<br/>
Payez moins.
</h1>

<p className="mt-8 max-w-2xl text-xl leading-9 text-orange-50">
Des milliers de produits, fournisseurs vérifiés,
importation directe depuis la Chine,
livraison rapide et solutions B2B
sur une seule plateforme.
</p>

<div className="mt-10 rounded-2xl bg-white p-3 shadow-2xl">

<div className="flex flex-col gap-3 lg:flex-row">

<div className="relative flex-1">

<Search
size={22}
className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
/>

<input
type="text"
placeholder="Rechercher un produit, une marque ou un fournisseur..."
className="h-16 w-full rounded-xl border border-gray-200 pl-14 pr-5 text-gray-900 outline-none focus:border-orange-500"
/>

</div>

<button className="rounded-xl bg-orange-600 px-10 font-semibold text-white hover:bg-orange-700">
Rechercher
</button>

</div>

</div>

<div className="mt-10 flex flex-wrap gap-4">

<Link
href="/produits"
className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 hover:bg-orange-50"
>

Commencer les achats

</Link>

<Link
href="/vendeur"
className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-orange-600"
>

Devenir vendeur

</Link>

</div>

<div className="mt-10 grid grid-cols-3 gap-6">

<div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

<Truck className="mb-4"/>

<p className="font-semibold">
Livraison nationale
</p>

</div>

<div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

<Ship className="mb-4"/>

<p className="font-semibold">
Import Chine
</p>

</div>

<div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

<ShieldCheck className="mb-4"/>

<p className="font-semibold">
Fournisseurs vérifiés
</p>

</div>

</div>

</div>

<div className="flex justify-center">

<Image
src="/images/merci-bokku-logo.png"
alt="Merci Bokku"
width={520}
height={520}
priority
className="w-[420px] drop-shadow-2xl"
/>

</div>

</div>

</div>

</section>

);

}
