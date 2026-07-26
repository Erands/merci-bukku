export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-green-600 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Tout commence ici.
        </h1>

        <p className="mt-8 max-w-2xl text-2xl">
          Achetez en gros, trouvez des fournisseurs et développez votre entreprise partout en Côte d'Ivoire.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600">
            Acheter maintenant
          </button>

          <button className="rounded-xl border border-white px-8 py-4">
            Devenir vendeur
          </button>
        </div>

      </div>
    </section>
  );
}
