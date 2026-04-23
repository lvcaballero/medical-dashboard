import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function UnitsPage() {
  const data = await db.query("SELECT * FROM uom ORDER BY name ASC");
  const units = data.rows;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-purple-700">Units of Measure</h1>
      <table className="min-w-full border border-gray-300 shadow-md">
        <thead className="bg-purple-50">
          <tr>
            <th className="border p-3 text-left">UOM</th>
            <th className="border p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit: any) => ( // Added : any here
            <tr key={unit.id} className="hover:bg-gray-50">
              <td className="border p-3 font-bold text-purple-900">{unit.name}</td>
              <td className="border p-3">{unit.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}