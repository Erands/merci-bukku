import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="text-3xl font-bold text-orange-600">
          Merci Bokku
        </Link>

        <nav className="flex items-center gap-8 font-medium">

          <Link href="/produits">Produits</Link>

          <Link href="/categories">Catégories</Link>

          <Link href="/entreprises">Entreprises</Link>

          <Link href="/promotions">Promotions</Link>

          <Link href="/contact">Contact</Link>

        </nav>

      </div>
    </header>
  );
}
