export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow">
      <div className="flex justify-between">
        <h1 className="font-bold">SMPN 1 Cigandamekar</h1>
        <div className="space-x-4">
          <a href="/">Dashboard</a>
          <a href="/students">Siswa</a>
          <a href="/teachers">Guru</a>
        </div>
      </div>
    </nav>
  )
}