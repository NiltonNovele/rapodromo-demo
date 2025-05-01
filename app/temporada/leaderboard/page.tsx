import {
  FaTrophy,
  FaMedal,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function LeaderboardPage() {
  return (
    <main>
      <section className="py-8 px-6 max-w-7xl mx-auto text-white">
        <h3 className="text-3xl font-bold text-center mb-8 text-yellow-500">
          Caminho até a Final – Temporada 2024
        </h3>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-5 gap-4 min-w-[800px] text-xs text-center">
            {/* Round of 16 */}
            <div className="space-y-4">
              <h4 className="text-yellow-500 font-semibold mb-4">
                Oitavas de Final
              </h4>
              {[
                "Naruto vs K1",
                "DreX vs FL4ME",
                "Yung Skillz vs J-Cool",
                "Venom vs Lex",
                "Rho vs El B",
                "Masta K vs ProLirik",
                "Nova G vs T-Fire",
                "Blaze vs X-Kid",
              ].map((matchup, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-3 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <p className="text-lg font-semibold">{matchup}</p>
                  <div className="text-xs text-gray-400 mt-1">
                    O confronto decisivo começa aqui
                  </div>
                  <div className="flex justify-between mt-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <FaTimesCircle className="text-red-500 text-sm" />
                  </div>
                </div>
              ))}
            </div>

            {/* Quarter-finals */}
            <div className="mt-12 space-y-12">
              <h4 className="text-yellow-500 font-semibold mb-4">
                Quartas de Final
              </h4>
              {[
                "Naruto vs DreX",
                "Yung Skillz vs Venom",
                "Rho vs Masta K",
                "Nova G vs Blaze",
              ].map((matchup, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-3 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <p className="text-lg font-semibold">{matchup}</p>
                  <div className="text-xs text-gray-400 mt-1">
                    Quem irá avançar para as semifinais?
                  </div>
                  <div className="flex justify-between mt-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <FaTimesCircle className="text-red-500 text-sm" />
                  </div>
                </div>
              ))}
            </div>

            {/* Semi-finals */}
            <div className="mt-16 space-y-16">
              <h4 className="text-yellow-500 font-semibold mb-4">Semifinais</h4>
              {["Naruto vs Yung Skillz", "Rho vs Nova G"].map(
                (matchup, index) => (
                  <div
                    key={index}
                    className="bg-gray-600 p-3 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    <p className="text-lg font-semibold">{matchup}</p>
                    <div className="text-xs text-gray-400 mt-1">
                      A luta para chegar à grande final!
                    </div>
                    <div className="flex justify-between mt-2">
                      <FaCheckCircle className="text-green-500 text-sm" />
                      <FaTimesCircle className="text-red-500 text-sm" />
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Final */}
            <div className="mt-32">
              <h4 className="text-yellow-500 font-semibold mb-4">Final</h4>
              <div className="bg-red-700 p-4 rounded-lg font-bold text-white text-xl flex items-center justify-between">
                <p className="mb-2">Naruto 🏆 vs Nova G</p>
                <FaTrophy className="text-3xl text-yellow-500" />
              </div>
              <div className="text-xs text-gray-300 mt-1">
                A grande decisão da temporada!
              </div>
            </div>

            {/* Champion Highlight */}
            <div className="flex flex-col items-center justify-center mt-32 space-y-3">
              <img
                src="/gladiadores/naruto.jpg"
                alt="Naruto"
                className="w-24 h-24 rounded-full border-4 border-yellow-600 object-cover"
              />
              <h5 className="text-xl font-bold text-yellow-500">Naruto</h5>
              <p className="text-gray-400 text-base text-center">
                MVP da Temporada - O guerreiro imbatível
              </p>
              <div className="flex items-center space-x-3">
                <FaMedal className="text-yellow-400 text-2xl" />
                <p className="text-gray-500">Campeão imbatível da temporada!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
