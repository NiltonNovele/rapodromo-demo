import { UserCircle } from "lucide-react";

export default function GrupoGladiadoresAdmins() {
  const mensagens = [
    {
      nome: "Allan (Admin)",
      texto: "Preparem-se para a próxima batalha. Conto com todos a tempo!",
    },
    {
      nome: "Duas Caras (Admin)",
      texto:
        "Lembrem-se: respeito acima de tudo. Vamos mostrar profissionalismo.",
    },
    {
      nome: "Blade MC",
      texto: "Recebido chefe. Já estou preparando os meus versos 🔥",
    },
    {
      nome: "Killa Flow",
      texto: "Estamos juntos. Esta final vai ser histórica!",
    },
    { nome: "Young Matador", texto: "Pronto para a guerra 🥷🏾" },
  ];

  return (
    <main className="p-6 bg-zinc-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        # Gladiadores e Admins
      </h1>
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
