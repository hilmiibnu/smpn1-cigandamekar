export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-blue-700">
          SMPN 1 Cigandamekar
        </h1>

        <p className="mt-4 text-gray-600">
          Sistem Absensi dan Nilai Siswa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-blue-600 text-white p-6 rounded-xl">
            <h2 className="text-xl font-semibold">Total Siswa</h2>
            <p className="text-3xl mt-2">350</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl">
            <h2 className="text-xl font-semibold">Kehadiran Hari Ini</h2>
            <p className="text-3xl mt-2">320</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-xl">
            <h2 className="text-xl font-semibold">Total Guru</h2>
            <p className="text-3xl mt-2">25</p>
          </div>
        </div>
      </div>
    </main>
  )
}