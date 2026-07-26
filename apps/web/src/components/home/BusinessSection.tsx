const businesses = [
  {
    name: "Hôtels & Restaurants",
    description:
      "Équipez votre établissement avec des produits professionnels et bénéficiez de tarifs de gros.",
  },
  {
    name: "Écoles & Universités",
    description:
      "Commandez toutes vos fournitures scolaires et administratives en un seul endroit.",
  },
  {
    name: "Entreprises",
    description:
      "Optimisez vos achats de bureau avec des prix compétitifs et une livraison rapide.",
  },
  {
    name: "Commerçants",
    description:
      "Développez votre activité en vendant vos produits à des milliers d'acheteurs.",
  },
];

export default function BusinessSection() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Une plateforme conçue pour tous les professionnels
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Merci Bokku accompagne les entreprises, commerçants, écoles, hôtels,
            restaurants et organisations dans leurs achats, leurs ventes et leur
            croissance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {businesses.map((business) => (
            <div
              key={business.name}
              className="rounded-2xl bg-white p-8 shadow transition hover:shadow-xl"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {business.name}
              </h3>

              <p className="text-gray-600">
                {business.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
