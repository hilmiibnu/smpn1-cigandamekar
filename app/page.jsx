import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Sistem Absensi dan Nilai
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h2>Total Siswa</h2>
            <p className="text-4xl font-bold mt-2">328</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg">
            <h2>Kehadiran Hari Ini</h2>
            <p className="text-4xl font-bold mt-2">287</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg">
            <h2>Total Guru</h2>
            <p className="text-4xl font-bold mt-2">28</p>
          </div>

        </div>
      </div>
    </main>
  )
}
