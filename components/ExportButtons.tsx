"use client";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function ExportButtons({ data }: { data: any[] }) {
  
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Medical Tests");
    XLSX.writeFile(workbook, "MedicalTests.xlsx");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Medical Test Report", 14, 10);
    
    autoTable(doc, {
      head: [['Name', 'Category', 'Unit', 'Min', 'Max']],
      body: data.map(item => [
        item.name, item.category_name, item.uom_name, item.normalmin, item.normalmax
      ]),
    });
    
    doc.save("MedicalTests.pdf");
  };

  return (
    <div className="space-x-4">
      <button onClick={downloadExcel} className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700">
        Export Excel
      </button>
      <button onClick={downloadPDF} className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700">
        Print PDF (A4)
      </button>
    </div>
  );
}