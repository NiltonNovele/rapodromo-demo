import { FaYoutube, FaTicketAlt, FaPlayCircle } from "react-icons/fa";

export default function BatalhasPage() {
  return (
    <main className="bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-8">
        Batalhas Recentes
      </h1>
      <p className="text-lg text-center mb-12">
        Confira as últimas batalhas do Rapódromo.
      </p>

      {/* Recent Battles Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group relative">
          <img
            src="https://i.ytimg.com/an_webp/W4KrhpQAJjY/mqdefault_6s.webp?du=3000&sqp=CKThz8AG&rs=AOn4CLDeabUWK30JqL4yF2E4ambGj-sR5w" // Random YouTube thumbnail
            alt="Batalha 1"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 right-4 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">
              Batalha 1 - Gladiador A vs Gladiador B
            </h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Uma batalha épica com reviravoltas surpreendentes. Assista agora!
            </p>
            <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                className="text-red-600 hover:underline"
              >
                <FaYoutube className="inline mr-2" />
                Ver no YouTube
              </a>
              <a
                href="/batalha-detalhes"
                className="text-red-600 hover:underline"
              >
                Detalhes
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group relative">
          <img
            src="https://i.ytimg.com/an_webp/goKz999BvSM/mqdefault_6s.webp?du=3000&sqp=CKHpz8AG&rs=AOn4CLBb9GumAOBRwXvBZGAJTmhgf25Qdg" // Random YouTube thumbnail
            alt="Batalha 2"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 right-4 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">
              Batalha 2 - Gladiador C vs Gladiador D
            </h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Uma batalha cheia de tensão e emoção. Não perca!
            </p>
            <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.youtube.com/watch?v=M7lc1UVf-VE"
                target="_blank"
                className="text-red-600 hover:underline"
              >
                <FaYoutube className="inline mr-2" />
                Ver no YouTube
              </a>
              <a
                href="/batalha-detalhes"
                className="text-red-600 hover:underline"
              >
                Detalhes
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group relative">
          <img
            src="https://i.ytimg.com/an_webp/QA7UnuTwZHo/mqdefault_6s.webp?du=3000&sqp=CPzcz8AG&rs=AOn4CLB0z-v0wgI7V0zCg419xwyJsjT1yQ" // Random YouTube thumbnail
            alt="Batalha 3"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 right-4 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">
              Batalha 3 - Gladiador E vs Gladiador F
            </h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Assista uma batalha cheia de estratégias e habilidades.
            </p>
            <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
                target="_blank"
                className="text-red-600 hover:underline"
              >
                <FaYoutube className="inline mr-2" />
                Ver no YouTube
              </a>
              <a
                href="/batalha-detalhes"
                className="text-red-600 hover:underline"
              >
                Detalhes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Battles Section */}
      <section className="bg-gray-800 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">
          Próximas Batalhas
        </h2>
        <div className="flex justify-between items-center mb-6">
          <div className="text-white text-lg">
            <p>
              Fique ligado para as próximas batalhas emocionantes do Rapódromo!
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="/comprar-bilhetes"
              className="bg-red-600 text-black px-6 py-2 rounded-lg hover:bg-red-500 transition-colors"
            >
              <FaTicketAlt className="inline mr-2" />
              Adquirir Bilhetes
            </a>
            <a
              href="/assistir-ao-vivo"
              className="bg-red-600 text-black px-6 py-2 rounded-lg hover:bg-red-500 transition-colors"
            >
              <FaPlayCircle className="inline mr-2" />
              Assistir ao Vivo
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Batalha 1 - Gladiador G vs Gladiador H
            </h3>
            <p className="mb-4">Data: 10 de Maio de 2025</p>
            <div className="flex justify-between">
              <a
                href="/comprar-bilhetes"
                className="text-red-600 hover:underline"
              >
                <FaTicketAlt className="inline mr-2" />
                Comprar Bilhetes
              </a>
              <a
                href="/assistir-ao-vivo"
                className="text-red-600 hover:underline"
              >
                <FaPlayCircle className="inline mr-2" />
                Assistir ao Vivo
              </a>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Batalha 2 - Gladiador I vs Gladiador J
            </h3>
            <p className="mb-4">Data: 12 de Maio de 2025</p>
            <div className="flex justify-between">
              <a
                href="/comprar-bilhetes"
                className="text-red-600 hover:underline"
              >
                <FaTicketAlt className="inline mr-2" />
                Comprar Bilhetes
              </a>
              <a
                href="/assistir-ao-vivo"
                className="text-red-600 hover:underline"
              >
                <FaPlayCircle className="inline mr-2" />
                Assistir ao Vivo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
