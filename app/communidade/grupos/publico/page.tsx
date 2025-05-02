import { UserCircle } from "lucide-react";

export default function GrupoPublico() {
  const mensagens = [
    {
      nome: "MaputoVibes",
      texto: "Vocês acham que a final devia ser no pavilhão do Maxaquene?",
    },
    {
      nome: "AnaKuduro",
      texto: "Preferia ver em live... vai ter transmissão?",
    },
    { nome: "RuiMp3", texto: "Rapódromo nunca desilude 🔥" },
    { nome: "Teca_Z", texto: "Vamos organizar caravana de Matola?" },
    { nome: "FanX", texto: "Bilhetes esgotam rápido. Corram!" },
  ];

  return (
    <main className="p-6 bg-zinc-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6"># Público</h1>
      <div className="space-y-4">
        {mensagens.map((msg, i) => (
          <div key={i} className="flex gap-4 items-start">
            <UserCircle className="w-8 h-8 text-zinc-400" />
            <div>
              <p className="font-semibold text-red-500">{msg.nome}</p>
              <p className="text-zinc-300">{msg.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
