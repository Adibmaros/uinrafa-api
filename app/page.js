import React from "react";

const Page = () => {
  const baseUrl = "https://uinrafa-api.vercel.app";
  const githubUrl = "https://github.com/Adibmaros/uinrafa-api";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">API PUBLIC UIN Raden Fatah Palembang</h1>
          <p className="text-lg text-gray-600 leading-relaxed">Selamat datang di API UIN Raden Fatah Palembang. API ini menyediakan berbagai endpoint untuk mengakses data fakultas dan program studi. </p>
        </div>

        {/* Base URL Section */}
        <div className="mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Base URL
          </h2>
          <code className="block bg-white/95 backdrop-blur px-4 py-3 rounded-lg text-blue-700 font-mono text-sm md:text-base break-all shadow-inner">{baseUrl}</code>
        </div>

        {/* Endpoints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
            Endpoints Tersedia
          </h2>

          <div className="space-y-6">
            {/* Data Fakultas */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Data Fakultas</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">GET</span>
                  <code className="text-blue-600 font-mono text-sm break-all flex-1">{`${baseUrl}/api/fakultas`}</code>
                </div>
                <p className="text-gray-600 pl-14">Mendapatkan daftar seluruh fakultas di UIN Raden Fatah Palembang</p>
              </div>
            </div>

            {/* Data Program Studi */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Data Program Studi</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">GET</span>
                  <code className="text-blue-600 font-mono text-sm break-all flex-1">{`${baseUrl}/api/prodi`}</code>
                </div>
                <p className="text-gray-600 pl-14">Mendapatkan daftar seluruh program studi</p>
              </div>
            </div>

            {/* Data Fakultas & Program Studi */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Data Fakultas & Program Studi</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">GET</span>
                  <code className="text-blue-600 font-mono text-sm break-all flex-1">{`${baseUrl}/api/fakultas-prodi`}</code>
                </div>
                <p className="text-gray-600 pl-14">Mendapatkan daftar fakultas beserta program studinya</p>
              </div>
            </div>
          </div>
        </section>

        {/* Format Response Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
            Format Response
          </h2>
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-6 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">response.json</span>
            </div>
            <pre className="p-6 text-sm text-gray-100 overflow-x-auto">
              {`{
  "status": "success",
  "message": "Pesan sukses/error",
  "data": [ ... ] // Data response
}`}
            </pre>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
            Kontribusi
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <p className="text-gray-600 mb-4">Ingin berkontribusi untuk pengembangan API ini? Kunjungi repository GitHub kami:</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Repository
            </a>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© 2025 - Created with ❤️ by Adib Muhammad Maros</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
