import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const products = [
  { name:"Ramette Papier A4", price:"4 500 FCFA" },
  { name:"Chaise de Bureau", price:"38 000 FCFA" },
  { name:"Carton de Stylos", price:"12 000 FCFA" },
  { name:"Ordinateur Portable", price:"365 000 FCFA" },
  { name:"Table de Réunion", price:"145 000 FCFA" },
  { name:"Imprimante HP", price:"95 000 FCFA" },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-16">

      <div className="container">

        <div className="mb-10 flex items-center justify-between">

          <h2 className="text-4xl font-black text-gray-900">
            Produits Vedettes
          </h2>

          <Link
            href="/produits"
            className="orange-btn px-6 py-3 text-sm font-semibold"
          >
            Voir tout
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product)=>(
            <article
              key={product.name}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-72 items-center justify-center bg-gray-100">

                <Image
                  src="/images/merci-bokku-logo.png"
                  alt={product.name}
                  width={180}
                  height={180}
                  className="opacity-20"
                />

              </div>

              <div className="p-7">

                <h3 className="font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-3xl font-black text-orange-600">
                  {product.price}
                </p>

                <button className="green-btn mt-6 w-full py-3 font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <ShoppingCart size={18}/>
                    Ajouter au panier
                  </span>
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}
