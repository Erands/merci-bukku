"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { getProducts } from "@/services/products";

export default function FeaturedProducts() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-center justify-between">

          <div>
            <h2 className="text-4xl font-black">
              Produits populaires
            </h2>

            <p className="mt-3 text-gray-600">
              Les meilleures offres disponibles aujourd'hui.
            </p>
          </div>

          <Link
            href="/produits"
            className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white"
          >
            Voir tout
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (

            <article
              key={product.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-64 items-center justify-center bg-gray-50">

                <Image
                  src="/images/merci-bokku-logo.png"
                  alt={product.name}
                  width={140}
                  height={140}
                  className="object-contain"
                />

              </div>

              <div className="p-7">

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>

                <p className="mt-5 text-3xl font-black text-orange-600">
                  {Number(product.price).toLocaleString("fr-FR")} FCFA
                </p>

                <button
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
                >
                  <ShoppingCart size={20} />
                  Ajouter au panier
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
