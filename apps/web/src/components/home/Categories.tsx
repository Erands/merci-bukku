"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Utensils,
  Hotel,
  HeartPulse,
  Hammer,
  Tractor,
  Laptop,
  Sofa,
  Sparkles,
} from "lucide-react";

import { getCategories } from "@/services/categories";

const icons: Record<string, any> = {
  Briefcase,
  GraduationCap,
  Utensils,
  Hotel,
  HeartPulse,
  Hammer,
  Tractor,
  Laptop,
  Sofa,
  Sparkles,
};

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <h2 className="text-4xl font-black">
            Catégories
          </h2>

          <p className="mt-3 text-gray-600">
            Explorez les principales catégories professionnelles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {categories.map((category) => {

            const Icon = icons[category.icon] || Briefcase;

            return (

              <Link
                href={`/categories/${category.slug}`}
                key={category.id}
                className="rounded-3xl bg-white p-7 shadow transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={30} />
                </div>

                <h3 className="font-bold text-lg">
                  {category.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>

              </Link>

            );
          })}

        </div>

      </div>
    </section>
  );
}
