import React, { useState } from "react";
import { saveAs } from "file-saver";
import XLSX from "xlsx";
// ... (other imports)

const AdminleadsForm = () => {
  // ... (existing code)

  const [excelData, setExcelData] = useState([]);
  const [excelFile, setExcelFile] = useState(null);

  // Function to export form data to Excel
  const exportToExcel = () => {
    const dataToExport = [/* ... Format your data array here ... */];
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Leads");
    const blob = XLSX.write(wb, { bookType: "xlsx", type: "blob" });
    saveAs(blob, "leads.xlsx");
  };

  // Function to handle Excel file upload
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(jsonData);
        setExcelFile(file);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // Function to send leads from Excel
  const sendLeadsFromExcel = () => {
    // Implement sending leads to selected vendors based on excelData
    // You can use a similar logic as your handlesubmit function here
  };

  // ... (existing code)

  return (
    <div id="admin-page-id">
      {/* ... (existing code) */}

      {/* Export to Excel Button */}
      <button onClick={exportToExcel}>Export to Excel</button>

      {/* Import from Excel */}
      <input type="file" accept=".xlsx" onChange={handleExcelUpload} />
      {excelData.length > 0 && (
        <div>
          <p>Data from Excel:</p>
          <pre>{JSON.stringify(excelData, null, 2)}</pre>
          <button onClick={sendLeadsFromExcel}>Send Leads from Excel</button>
        </div>
      )}

      {/* ... (existing code) */}
    </div>
  );
};

export default AdminleadsForm;
