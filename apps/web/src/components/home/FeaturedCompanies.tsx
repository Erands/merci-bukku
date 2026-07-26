"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BadgeCheck, Building2, MapPin } from "lucide-react";

import { getCompanies } from "@/services/companies";

export default function FeaturedCompanies() {
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(() => {
    getCompanies().then(setCompanies);
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <h2 className="text-4xl font-black">
            Entreprises vérifiées
          </h2>

          <p className="mt-3 text-gray-600">
            Achetez auprès de fournisseurs de confiance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {companies.map((company) => (

            <Link
              key={company.id}
              href={`/entreprises/${company.slug}`}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <Building2 className="text-orange-600" size={36} />
              </div>

              <h3 className="mt-6 flex items-center gap-2 text-2xl font-bold">
                {company.name}
                {company.verified === 1 && (
                  <BadgeCheck className="text-green-600" size={22} />
                )}
              </h3>

              <p className="mt-3 text-gray-600">
                {company.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} />
                {company.city}
              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}
