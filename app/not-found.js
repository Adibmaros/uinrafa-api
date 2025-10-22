import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="text-center max-w-md">
        {/* 404 Number with gradient */}
        <div className="mb-8">
          <h1 className="text-9xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">404</h1>
        </div>

        {/* Icon or Illustration */}
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan atau dihapus.</p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Atau coba halaman lain:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/api/fakultas" className="text-blue-600 hover:text-blue-700 hover:underline">
              API Fakultas
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/api/prodi" className="text-blue-600 hover:text-blue-700 hover:underline">
              API Prodi
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/api/fakultas-prodi" className="text-blue-600 hover:text-blue-700 hover:underline">
              API Fakultas & Prodi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
