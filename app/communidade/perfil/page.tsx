import { UserCircle, Phone, Mail, Info } from "lucide-react";

export default function Perfil() {
  const usuario = {
    nome: "Young Matador",
    username: "@matador_official",
    telefone: "+258 84 123 4567",
    email: "matador@rapodromo.co.mz",
    bio: "Gladiador lírico. Vencedor da temporada 2. Em busca da coroa novamente.",
    cidade: "Maputo",
    membroDesde: "Março de 2023",
    avatarUrl: "", // opcional
  };

  return (
    <main className="p-6 bg-zinc-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Teu Perfil</h1>

      <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg max-w-xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <UserCircle className="w-16 h-16 text-zinc-400" />
          <div>
            <h2 className="text-2xl font-semibold">{usuario.nome}</h2>
            <p className="text-zinc-400">{usuario.username}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-zinc-400" />
            <p>{usuario.telefone}</p>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-zinc-400" />
            <p>{usuario.email}</p>
          </div>

          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-zinc-400" />
            <p className="text-zinc-300 italic">{usuario.bio}</p>
          </div>

          <p className="text-zinc-400">
            📍 Cidade: <span className="text-white">{usuario.cidade}</span>
          </p>
          <p className="text-zinc-400">
            🕒 Membro desde:{" "}
            <span className="text-white">{usuario.membroDesde}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
