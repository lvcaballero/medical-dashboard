import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const data = await db.query("SELECT * FROM testcategories ORDER BY name ASC");
  const categories = data.rows;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Test Categories</h1>
      <table className="min-w-full border border-gray-300 shadow-md">
        <thead className="bg-green-50">
          <tr>
            <th className="border p-3 text-left">Category</th>
            <th className="border p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat: any) => ( // Added : any here
            <tr key={cat.id} className="hover:bg-gray-50 italic">
              <td className="border p-3 font-bold text-green-900">{cat.name}</td>
              <td className="border p-3">{cat.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}