import React from "react";

const page = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API UIN Raden Fatah Palembang</h1>
      <p className="mb-8">Selamat datang di API UIN Raden Fatah Palembang. API ini menyediakan berbagai endpoint untuk mengakses data fakultas dan program studi.</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Endpoints Tersedia</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Data Fakultas</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-mono mb-2 text-blue-600">GET /api/fakultas</p>
                <p>Mendapatkan daftar seluruh fakultas di UIN Raden Fatah Palembang</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Data Program Studi</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono mb-2 text-blue-600">GET /api/prodi</p>
                  <p>Mendapatkan daftar seluruh program studi</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono mb-2 text-blue-600">GET /api/prodi?fakultas=nama_fakultas</p>
                  <p>Mendapatkan daftar program studi berdasarkan nama fakultas</p>
                  <p className="text-sm text-gray-600 mt-2">Contoh: /api/prodi?fakultas=Sains dan Teknologi</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Data Fakultas & Program Studi</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono mb-2 text-blue-600">GET /api/fakultas-prodi</p>
                  <p>Mendapatkan daftar fakultas beserta program studinya</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono mb-2 text-blue-600">GET /api/fakultas-prodi?kode=kode_fakultas</p>
                  <p>Mendapatkan data fakultas dan program studi berdasarkan kode fakultas</p>
                  <p className="text-sm text-gray-600 mt-2">Contoh: /api/fakultas-prodi?kode=FST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Format Response</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm">{`{
  "status": "success",
  "message": "Pesan sukses/error",
  "data": [ ... ] // Data response
}`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Status Codes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>200: Sukses</li>
            <li>404: Data tidak ditemukan</li>
            <li>500: Server error</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default page;
