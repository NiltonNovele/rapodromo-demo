import Image from "next/image";
export default function BilhetesPage() {
  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-red-600">Comprar Bilhete</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Bilhete com imagem à esquerda */}
        <div className="flex-1 bg-zinc-800 p-6 rounded-2xl shadow-lg flex flex-col lg:flex-row gap-6">
          <Image
            src="/cover.png"
            alt="Rapódromo Live"
            width={500}
            height={300}
            className="w-full lg:w-64 h-64 object-cover rounded-xl bg-black"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">
              Rapódromo Final 2024
            </h2>
            <p className="text-zinc-400 mb-4">
              Sábado, 25 de Maio · 18:00 · Av. Julius Nyerere, Maputo
            </p>
            <p className="text-lg mb-6">
              Experiência única com os melhores MCs do Rapódromo ao vivo.
              Bilhetes limitados.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="quantity" className="text-lg">
                Qtd:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                max="10"
                defaultValue="1"
                className="w-20 p-2 text-center rounded-lg bg-zinc-700 border border-zinc-500"
              />
            </div>

            <div className="text-xl font-semibold mb-6">
              Preço: <span className="text-green-400">MZN 100.00</span>
            </div>

            <button className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

        {/* Carrinho e Instruções */}
        <div className="w-full lg:w-[400px] bg-zinc-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Carrinho</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-lg">Rapódromo Final 2024 (x1)</p>
              <p className="font-semibold">MZN100.00</p>
            </div>

            <div className="flex justify-between border-t border-zinc-600 pt-4 mb-4">
              <p className="text-lg">Total</p>
              <p className="text-xl font-bold text-green-400">MZN100.00</p>
            </div>

            <div className="mb-6">
              <p className="text-zinc-400 mb-2">Métodos de Pagamento</p>
              <div className="flex gap-4 items-center">
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded">
                  M-Pesa
                </span>
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded">
                  e-Mola
                </span>
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded">
                  Visa
                </span>
              </div>
            </div>

            <button className="bg-green-600 hover:bg-green-700 w-full py-3 rounded-full font-semibold text-lg transition">
              Finalizar Compra
            </button>
          </div>

          {/* Instruções */}
          <p className="text-xs text-zinc-400 mt-6 leading-relaxed">
            -Após o pagamento, você receberá o bilhete com código QR no seu
            email. <br />
            -Não partilhe este código com ninguém. <br />
            -Na entrada do evento, mostre o QR ao segurança que irá escanear e
            autorizar sua entrada. <br />
            -Cada código só pode ser usado uma vez. <br />
            -Alternativamente, será enviado um número de referência único via
            sms caso seu telefone não suporte QR code.
          </p>
        </div>
      </div>
    </main>
  );
}
