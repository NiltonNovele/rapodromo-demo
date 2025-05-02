import Image from "next/image";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Logo" width={50} height={30} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Criar Conta</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label className="block mb-1">Telefone</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-500 text-black font-bold rounded transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
