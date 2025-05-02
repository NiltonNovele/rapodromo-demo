import Image from "next/image";

export default function ShopPage() {
  const produtos = [
    {
      nome: "Camisete Rapódromo Preta",
      preco: "MZN 800.00",
      imagem: "/sheta.png",
      descricao:
        "Camisete oficial do Rapódromo em preto clássico. Tecido 100% algodão.",
    },
    {
      nome: "Camisete Rapódromo Branca",
      preco: "MZN 800.00",
      imagem: "/sheta.png",
      descricao: "Edição limitada branca com estampa exclusiva do Rapódromo.",
    },
    {
      nome: "Camisete Rapódromo Vermelha",
      preco: "MZN 800.00",
      imagem: "/sheta.png",
      descricao: "Camisete vibrante com o logo oficial. Mostra teu apoio!",
    },
  ];

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-red-600">Loja Oficial</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-2xl shadow-lg flex flex-col"
          >
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-xl bg-black mb-4"
            />

            <h2 className="text-2xl font-semibold mb-2">{produto.nome}</h2>
            <p className="text-zinc-400 mb-4">{produto.descricao}</p>

            <div className="flex items-center gap-4 mb-4">
              <label htmlFor={`quantity-${index}`} className="text-lg">
                Qtd:
              </label>
              <input
                id={`quantity-${index}`}
                type="number"
                min="1"
                max="10"
                defaultValue="1"
                className="w-20 p-2 text-center rounded-lg bg-zinc-700 border border-zinc-500"
              />
            </div>

            <div className="text-xl font-semibold mb-4 text-green-400">
              {produto.preco}
            </div>

            <button className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition mt-auto">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      {/* Instruções de Envio */}
      <div className="mt-16 bg-zinc-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Informações de Envio</h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          - Após o pagamento, a camisete será enviada para sua morada em até 5
          dias úteis. <br />
          - Certifique-se de inserir seu número de telefone e morada
          corretamente no checkout. <br />
          - Entregamos em todo o país com parceiros locais de logística. <br />-
          Qualquer problema? Contacte-nos via WhatsApp ou email indicado no
          rodapé do site.
        </p>
      </div>
    </main>
  );
}
