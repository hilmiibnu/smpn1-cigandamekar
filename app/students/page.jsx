import { supabase } from "@/lib/supabase";

export default async function StudentsPage() {
  const { data: students } = await supabase
    .from("students")
    .select("*");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Data Siswa
      </h1>

      <table className="w-full border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">NIS</th>
            <th className="p-2">Nama</th>
            <th className="p-2">Kelas</th>
          </tr>
        </thead>

        <tbody>
          {students?.map((siswa) => (
            <tr key={siswa.id}>
              <td className="border p-2">{siswa.nis}</td>
              <td className="border p-2">{siswa.name}</td>
              <td className="border p-2">{siswa.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
