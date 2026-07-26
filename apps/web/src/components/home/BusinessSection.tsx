import {
Hotel,
GraduationCap,
Store,
Building2
} from "lucide-react";

const data=[
{
title:"Hôtels & Restaurants",
desc:"Équipez votre établissement avec des produits professionnels.",
icon:Hotel
},
{
title:"Écoles & Universités",
desc:"Toutes les fournitures scolaires en un seul endroit.",
icon:GraduationCap
},
{
title:"Entreprises",
desc:"Achats de bureau avec livraison rapide.",
icon:Building2
},
{
title:"Commerçants",
desc:"Développez vos ventes grâce à Merci Bokku.",
icon:Store
},
];

export default function BusinessSection(){

return(

<section className="bg-white py-16">

<div className="container">

<div className="mb-10 text-center">

<h2 className="text-5xl font-black text-gray-900">
Une plateforme conçue pour les professionnels
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
Merci Bokku accompagne les entreprises, commerçants,
écoles, hôtels et administrations.
</p>

</div>

<div className="grid gap-8 md:grid-cols-2">

{data.map((item)=>{

const Icon=item.icon;

return(

<div
key={item.title}
className="rounded-3xl border border-gray-200 bg-slate-50 p-8 transition hover:border-orange-500 hover:shadow-lg"
>

<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">

<Icon size={30}/>

</div>

<h3 className="text-2xl font-bold">

{item.title}

</h3>

<p className="mt-4 leading-8 text-gray-600">

{item.desc}

</p>

</div>

);

})}

</div>

</div>

</section>

);

}
