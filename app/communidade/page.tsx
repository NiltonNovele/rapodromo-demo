import Link from "next/link";
import { Megaphone, Users, ShieldCheck, User, Globe2 } from "lucide-react";

export default function ComunidadePage() {
  const sections = [
    {
      title: "Anúncios Oficiais",
      href: "/communidade/anuncions",
      icon: Megaphone,
      description:
        "Comunicados da organização, regras, eventos e atualizações.",
    },
    {
      title: "Grupo Admin",
      href: "/communidade/grupos/gladiadores-admin",
      icon: ShieldCheck,
      description: "Canal privado para organizadores e moderadores.",
    },
    {
      title: "Gladiadores",
      href: "/communidade/grupos/gladiadores-publico",
      icon: Users,
      description: "Espaço de interação entre MCs participantes do Rapódromo.",
    },
    {
      title: "Público",
      href: "/communidade/grupos/publico",
      icon: Globe2,
      description: "Todos podem participar, comentar, opinar e sugerir.",
    },
    {
      title: "Perfil",
      href: "/communidade/perfil",
      icon: User,
      description: "Acesse e edite seus dados pessoais e preferências.",
    },
  ];

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-red-600">Comunidade</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Link
              key={index}
              href={section.href}
              className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:bg-zinc-700 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-600 p-3 rounded-full">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-zinc-400 text-sm">{section.description}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
