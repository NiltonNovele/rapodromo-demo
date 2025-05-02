import { UserCircle } from "lucide-react";

export default function GrupoGladiadoresPublico() {
  const mensagens = [
    { nome: "Blade MC", texto: "Quem está pronto para ver fogo no palco? 🔥" },
    { nome: "MC Luso", texto: "Vamos rebentar amanhã!" },
    { nome: "ClaudiaFan87", texto: "Vocês gladiadores são brabos demais!" },
    { nome: "JoaoRapper", texto: "Killa Flow é o meu favorito, sem dúvida." },
    { nome: "Young Matador", texto: "Amanhã vai ser poesia com pancada 🎤" },
  ];

  return (
    <main className="p-6 bg-zinc-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        # Gladiadores e Público
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
