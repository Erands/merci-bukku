import Link from "next/link";
import {
  Package,
  Store,
  GraduationCap,
  Briefcase,
  Ship,
  Truck,
  Building2,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    title: "Produits Merci Bokku",
    description: "Produits vendus directement par Merci Bokku.",
    href: "/produits",
    icon: Package,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Marchands",
    description: "Achetez auprès de fournisseurs vérifiés.",
    href: "/entreprises",
    icon: Store,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Fournitures scolaires",
    description: "Écoles, universités et administrations.",
    href: "/categories/scolaire",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Services",
    description: "Marketing, IT, branding et impression.",
    href: "/services",
    icon: Briefcase,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Importer de Chine",
    description: "Commande directe auprès des fabricants.",
    href: "/chine",
    icon: Ship,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Livraison",
    description: "Livraison partout en Côte d'Ivoire.",
    href: "/livraison",
    icon: Truck,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Grandes entreprises",
    description: "Achats en volume et solutions B2B.",
    href: "/entreprises",
    icon: Building2,
    color: "bg-slate-100 text-slate-700",
  },
  {
    title: "Fournisseurs vérifiés",
    description: "Des partenaires contrôlés par Merci Bokku.",
    href: "/entreprises",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function QuickAccess() {
  return (
    <section className="relative -mt-16 z-20 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold group-hover:text-orange-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
