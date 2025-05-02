import Image from "next/image";
import Plans from "@/components/Plans";
import About from "../../components/About";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-yellow-400 to-orange-500 text-black">
      <About />

      {/* Ver Loja */}
      <section className="px-6 py-16 text-center bg-white text-black">
        <h2 className="text-3xl font-bold mb-4 text-red-600">
          Vê a nossa Loja
        </h2>
        <p className="mb-6 text-lg text-zinc-700">
          Compra os teus produtos oficiais do Rapódromo e faz parte da familia!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {/* Product Card 1 */}
          <div className="bg-zinc-100 p-6 rounded-xl shadow-lg">
            <Image
              src="/sheta.png"
              alt="Produto 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Camiseta Rapódromo</h3>
            <p className="text-lg text-zinc-600 mb-4">MZN250.00</p>
            <a
              href="/shop"
              className="bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-red-700 transition"
            >
              Comprar
            </a>
          </div>

          {/* Product Card 2 */}
          <div className="bg-zinc-100 p-6 rounded-xl shadow-lg">
            <Image
              src="/sheta.png"
              alt="Produto 2"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Caneca Rapódromo</h3>
            <p className="text-lg text-zinc-600 mb-4">MZN150.00</p>
            <a
              href="/shop"
              className="bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-red-700 transition"
            >
              Comprar
            </a>
          </div>

          {/* Product Card 3 */}
          <div className="bg-zinc-100 p-6 rounded-xl shadow-lg">
            <Image
              src="/sheta.png"
              alt="Produto 3"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Boné Rapódromo</h3>
            <p className="text-lg text-zinc-600 mb-4">MZN200.00</p>
            <a
              href="/shop"
              className="bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-red-700 transition"
            >
              Comprar
            </a>
          </div>
        </div>

        <a
          href="/shop"
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-zinc-800 transition"
        >
          Ver Loja 🛍️
        </a>
      </section>

      <Plans />
      <Sponsors />
    </main>
  );
}
