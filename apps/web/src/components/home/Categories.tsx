const categories = [
  "Fournitures de Bureau",
  "Fournitures Scolaires",
  "Restaurants",
  "Hôtels",
  "Santé",
  "Construction",
  "Agriculture",
  "Beauté",
  "Électronique",
  "Mobilier",
  "Emballages",
  "Industrie"
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Catégories Populaires
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl bg-white p-8 text-center shadow transition hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="font-semibold">
                {category}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
