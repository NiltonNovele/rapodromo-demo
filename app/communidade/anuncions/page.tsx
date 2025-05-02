export default function AnunciosPage() {
  const anuncios = [
    {
      titulo: "Grande Final Confirmada!",
      data: "01/05/2025",
      descricao:
        "A final do Rapódromo acontecerá no dia 25 de Maio às 18:00 na Av. Julius Nyerere. Preparem-se!",
    },
    {
      titulo: "Regras Atualizadas",
      data: "28/04/2025",
      descricao:
        "Atualizamos as regras para a fase final. Leitura obrigatória para todos os gladiadores.",
    },
    {
      titulo: "Nova Parceria com TVM",
      data: "25/04/2025",
      descricao:
        "A TVM vai transmitir a grande final ao vivo! Obrigado a todos pelo apoio contínuo.",
    },
  ];

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-red-600">
        Anúncios Oficiais
      </h1>

      <div className="space-y-6">
        {anuncios.map((anuncio, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">{anuncio.titulo}</h2>
              <span className="text-sm text-zinc-400">{anuncio.data}</span>
            </div>
            <p className="text-zinc-300">{anuncio.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
