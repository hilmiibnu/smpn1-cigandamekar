export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">
          SMPN 1 Cigandamekar
        </h1>

        <div className="space-x-4">
          <a href="/">Dashboard</a>
          <a href="/students">Siswa</a>
          <a href="/teachers">Guru</a>
          <a href="/attendance">Absensi</a>
        </div>
      </div>
    </nav>
  )
}
