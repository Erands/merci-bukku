const products = [
  {
    name: "Ramette Papier A4",
    price: "4 500 FCFA",
  },
  {
    name: "Chaise de Bureau",
    price: "38 000 FCFA",
  },
  {
    name: "Carton de Stylos",
    price: "12 000 FCFA",
  },
  {
    name: "Ordinateur Portable",
    price: "365 000 FCFA",
  },
  {
    name: "Table de Réunion",
    price: "145 000 FCFA",
  },
  {
    name: "Imprimante HP",
    price: "95 000 FCFA",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-bold">
            Produits Vedettes
          </h2>

          <button className="rounded-xl bg-orange-600 px-6 py-3 text-white">
            Voir tout
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl border bg-white shadow transition hover:shadow-xl"
            >

              <div className="h-64 bg-gray-200"></div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-3 text-2xl font-bold text-orange-600">
                  {product.price}
                </p>

                <button className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white">
                  Ajouter au panier
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
