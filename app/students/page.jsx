import { supabase } from "@/lib/supabase";

export default async function StudentsPage() {
  const { data: students } = await supabase
    .from("students")
    .select("*");

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Data Siswa
        </h1>

        <table className="w-full border-collapse overflow-hidden rounded-xl">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-3 text-left">NIS</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Kelas</th>
            </tr>
          </thead>

          <tbody>
            {students?.map((siswa) => (
              <tr
                key={siswa.id}
                className="border-b"
              >
                <td className="p-3">
                  {siswa.nis}
                </td>

                <td className="p-3">
                  {siswa.name}
                </td>

                <td className="p-3">
                  {siswa.class}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
