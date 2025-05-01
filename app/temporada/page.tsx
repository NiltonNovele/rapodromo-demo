import { FaTrophy, FaPlay, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function TemporadaPage() {
  const gladiators = [
    {
      name: "Yung Blud",
      wins: 5,
      losses: 2,
      draws: 1,
      battles: 8,
      image: "/path-to-gladiator1.jpg",
      temporadaWinner: true,
    },
    {
      name: "Nilton",
      wins: 4,
      losses: 3,
      draws: 1,
      battles: 8,
      image: "/path-to-gladiator2.jpg",
      temporadaWinner: false,
    },
    {
      name: "Naruto Piurso",
      wins: 6,
      losses: 1,
      draws: 1,
      battles: 8,
      image: "/path-to-gladiator3.jpg",
      temporadaWinner: true,
    },
  ];

  return (
    <main className="p-8 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white">
      <h1 className="text-5xl font-bold text-center mb-8 tracking-wide">
        Temporada 2024
      </h1>
      <p className="text-center mb-12 text-lg md:text-xl font-light">
        Acompanhe o desempenho dos gladiadores na temporada atual.
      </p>

      {/* Gladiator Stats List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gladiators.map((gladiator, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            {/* Gladiator Image */}
            <div
              className="w-full h-56 bg-cover bg-center rounded-xl mb-6"
              style={{ backgroundImage: `url(${gladiator.image})` }}
            ></div>

            {/* Gladiator Info */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold">{gladiator.name}</h2>

              {/* Stats Progress Bars */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="w-1/3 relative">
                  <div
                    className="h-2 bg-red-600 rounded-full mb-2"
                    style={{ width: `${(gladiator.battles / 10) * 100}%` }}
                  ></div>
                  <p className="text-sm text-gray-300">Batalhas</p>
                </div>
                <div className="w-1/3 relative">
                  <div
                    className="h-2 bg-green-700 rounded-full mb-2"
                    style={{ width: `${(gladiator.wins / 10) * 100}%` }}
                  ></div>
                  <p className="text-sm text-gray-300">Vitórias</p>
                </div>
                <div className="w-1/3 relative">
                  <div
                    className="h-2 bg-yellow-600 rounded-full mb-2"
                    style={{ width: `${(gladiator.losses / 10) * 100}%` }}
                  ></div>
                  <p className="text-sm text-gray-300">Derrotas</p>
                </div>
              </div>

              {/* Draws */}
              <div className="text-lg text-gray-300 mb-4">
                <p>Empates: {gladiator.draws}</p>
              </div>

              {/* Winner Badge */}
              {gladiator.temporadaWinner && (
                <div className="absolute top-4 right-4 bg-green-400 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
                  <FaTrophy />
                  <span>Vencedor</span>
                </div>
              )}

              {/* Status Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center text-green-400">
                  <FaCheckCircle className="text-2xl mr-2" />
                  <p>{gladiator.wins} Vitórias</p>
                </div>
                <div className="flex items-center text-yellow-400">
                  <FaPlay className="text-2xl mr-2" />
                  <p>{gladiator.battles} Batalhas</p>
                </div>
                <div className="flex items-center text-red-400">
                  <FaTimesCircle className="text-2xl mr-2" />
                  <p>{gladiator.losses} Derrotas</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Leaderboard Button */}
      <div className="text-center mt-12">
        <a
          href="/temporada/leaderboard"
          className="bg-black text-white py-3 px-8 rounded-full text-xl font-semibold shadow-2xl hover:bg-zinc-800 transition"
        >
          Ver Leaderboard 2024
        </a>
      </div>
    </main>
  );
}
