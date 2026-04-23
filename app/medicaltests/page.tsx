import { db } from "@/lib/db"; 
import ExportButtons from "@/components/ExportButtons";

// This function fulfills your SQL JOIN requirement
async function getMedicalTests() {
  const data = await db.query(`
    SELECT 
      mt.id,
      mt.name, 
      tc.name AS category_name, 
      u.name AS uom_name, 
      mt.normalmin, 
      mt.normalmax
    FROM medicaltests mt
    JOIN testcategories tc ON mt.idcategory = tc.id
    JOIN uom u ON mt.iduom = u.id
  `);
  return data.rows;
}

export default async function MedicalTestsPage() {
  const tests = await getMedicalTests();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Medical Tests Management</h1>
        <ExportButtons data={tests} />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 shadow-sm text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3">Test Name</th>
              <th className="border border-gray-300 p-3">Category</th>
              <th className="border border-gray-300 p-3">Unit</th>
              <th className="border border-gray-300 p-3">Min</th>
              <th className="border border-gray-300 p-3">Max</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test: any) => (
              <tr key={test.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">{test.name}</td>
                <td className="border border-gray-300 p-3">{test.category_name}</td>
                <td className="border border-gray-300 p-3">{test.uom_name}</td>
                <td className="border border-gray-300 p-3">{test.normalmin}</td>
                <td className="border border-gray-300 p-3">{test.normalmax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}