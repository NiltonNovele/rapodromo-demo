export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section with dynamic image */}
      <section
        className="relative bg-cover bg-center py-32 px-8 text-center"
        style={{ backgroundImage: "url('/gladiadores/naruto.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 p-8 rounded-xl max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-red-600 mb-4">
            Campeão da Temporada 2024
          </h1>
          <h2 className="text-3xl font-bold text-white mb-2">Naruto</h2>
          <p className="text-gray-300 mb-6">
            Dominou a temporada com 22 vitórias em 25 batalhas. MVP absoluto da
            arena.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/temporada/leaderboard"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Ver Leaderboard
            </a>
            <a
              href="/temporada/resumos"
              className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              Ver Resumos
            </a>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Caminho até a Final – Temporada 2024
        </h3>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-5 gap-4 min-w-[1000px] text-sm text-center">
            {/* Round of 16 */}
            <div className="space-y-8">
              <h4 className="text-red-500 font-semibold mb-4">Oitavas</h4>
              <div className="bg-gray-800 p-2 rounded">Naruto vs K1</div>
              <div className="bg-gray-800 p-2 rounded">DreX vs FL4ME</div>
              <div className="bg-gray-800 p-2 rounded">
                Yung Skillz vs J-Cool
              </div>
              <div className="bg-gray-800 p-2 rounded">Venom vs Lex</div>
              <div className="bg-gray-800 p-2 rounded">Rho vs El B</div>
              <div className="bg-gray-800 p-2 rounded">Masta K vs ProLirik</div>
              <div className="bg-gray-800 p-2 rounded">Nova G vs T-Fire</div>
              <div className="bg-gray-800 p-2 rounded">Blaze vs X-Kid</div>
            </div>

            {/* Quarter-finals */}
            <div className="mt-16 space-y-16">
              <h4 className="text-red-500 font-semibold mb-4">Quartos</h4>
              <div className="bg-gray-700 p-2 rounded">Naruto vs DreX</div>
              <div className="bg-gray-700 p-2 rounded">
                Yung Skillz vs Venom
              </div>
              <div className="bg-gray-700 p-2 rounded">Rho vs Masta K</div>
              <div className="bg-gray-700 p-2 rounded">Nova G vs Blaze</div>
            </div>

            {/* Semi-finals */}
            <div className="mt-32 space-y-32">
              <h4 className="text-red-500 font-semibold mb-4">Semifinais</h4>
              <div className="bg-gray-600 p-2 rounded">
                Naruto vs Yung Skillz
              </div>
              <div className="bg-gray-600 p-2 rounded">Rho vs Nova G</div>
            </div>

            {/* Final */}
            <div className="mt-64">
              <h4 className="text-red-500 font-semibold mb-4">Final</h4>
              <div className="bg-red-700 p-3 rounded font-bold">
                Naruto 🏆 vs Nova G
              </div>
            </div>

            {/* Champion Highlight */}
            <div className="flex flex-col items-center justify-center mt-64 space-y-2">
              <img
                src="/gladiadores/naruto.jpg"
                alt="Naruto"
                className="w-24 h-24 rounded-full border-4 border-red-600 object-cover"
              />
              <h5 className="text-xl font-bold text-red-500">Naruto</h5>
              <p className="text-gray-400 text-sm text-center">
                MVP da Temporada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Próximos Eventos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Card */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
            <img
              src="/eventos/evento1.jpg"
              alt="Evento 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold text-red-500 mb-2">
                Moz vs Tuga
              </h4>
              <p className="text-gray-400 text-sm mb-2">
                15 de Junho - Campo do Aeroporto
              </p>
              <p className="text-gray-300 text-sm">
                Um evento underground reunindo novos talentos e veteranos da
                cena. Entrada gratuita.
              </p>
            </div>
          </div>

          {/* Event Card */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
            <img
              src="/eventos/evento2.jpg"
              alt="Evento 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold text-red-500 mb-2">
                Arena X - Eliminatórias
              </h4>
              <p className="text-gray-400 text-sm mb-2">
                22 de Julho - Arena Maputo
              </p>
              <p className="text-gray-300 text-sm">
                As eliminatórias da nova temporada. Ingressos disponíveis
                online.
              </p>
            </div>
          </div>

          {/* Event Card */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
            <img
              src="/eventos/evento3.jpg"
              alt="Evento 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold text-red-500 mb-2">
                Cypher dos Deuses
              </h4>
              <p className="text-gray-400 text-sm mb-2">
                12 de Agosto - Estúdio Central
              </p>
              <p className="text-gray-300 text-sm">
                Uma sessão exclusiva com os melhores gladiadores da elite.
                Transmissão ao vivo garantida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
