const services = [
  {
    title: "Produits Merci Bokku",
    description:
      "Des milliers de fournitures de bureau, scolaires, restaurants, hôtels et commerces à prix de gros.",
    button: "Découvrir",
  },
  {
    title: "Produits des Marchands",
    description:
      "Achetez directement auprès de fournisseurs et commerçants vérifiés partout en Côte d'Ivoire.",
    button: "Voir les vendeurs",
  },
  {
    title: "Fournitures Scolaires",
    description:
      "Cahiers, stylos, papiers, cartables, imprimantes et tout le matériel scolaire.",
    button: "Acheter",
  },
  {
    title: "Services Professionnels",
    description:
      "Marketing, développement web, impression, graphisme, nettoyage, sécurité et bien plus.",
    button: "Explorer",
  },
  {
    title: "Commander de Chine",
    description:
      "Importez directement auprès des fabricants chinois avec l'accompagnement de Merci Bokku.",
    button: "Importer",
  },
  {
    title: "Livraison & Expédition",
    description:
      "Livraison rapide partout en Côte d'Ivoire avec suivi de vos commandes.",
    button: "En savoir plus",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Nos Services
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
          >
            <h3 className="mb-4 text-2xl font-bold">
              {service.title}
            </h3>

            <p className="mb-8 text-gray-600">
              {service.description}
            </p>

            <button className="rounded-xl bg-orange-600 px-6 py-3 text-white">
              {service.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
