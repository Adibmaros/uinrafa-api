import React from "react";

const Page = () => {
  const baseUrl = "https://uinrafa-api.vercel.app";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">API UIN Raden Fatah Palembang</h1>
          <p className="text-lg text-gray-600 leading-relaxed">Selamat datang di API UIN Raden Fatah Palembang. API ini menyediakan berbagai endpoint untuk mengakses data fakultas dan program studi.</p>
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

        {/* Status Codes Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
            Status Codes
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-green-600">200</span>
              </div>
              <p className="text-gray-600">Sukses</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-yellow-600">404</span>
              </div>
              <p className="text-gray-600">Data tidak ditemukan</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-red-600">500</span>
              </div>
              <p className="text-gray-600">Server error</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© 2025 UIN Raden Fatah Palembang. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
