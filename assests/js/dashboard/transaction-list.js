const transactions = [
    { id: "01", tId: "US#0001", method: "User", amount: "120", date: "mm/dd/yyyy", status: "Approved", pId: "110001" },
    { id: "02", tId: "US#0087", method: "Business", amount: "120", date: "mm/dd/yyyy", status: "Rejected", pId: "110001" },
    { id: "03", tId: "US#1541", method: "User", amount: "120", date: "mm/dd/yyyy", status: "Approved", pId: "14541" },
    { id: "04", tId: "US#4874", method: "Business", amount: "110", date: "mm/dd/yyyy", status: "Rejected", pId: "144874" },
    { id: "05", tId: "US#0064", method: "User", amount: "220", date: "mm/dd/yyyy", status: "Pending", pId: "140064" }
];

const statusStyles = {
    'Approved': 'bg-[#21BB601A] text-[#21BB60] border-green-100',
    'Rejected': 'bg-[#FAD7E1] text-[#E7366B] border-red-100',
    'Pending': 'bg-[#F9D40026] text-[#F9D400] border-yellow-100'
};

const tableBody = document.getElementById('transaction-body');

transactions.forEach(item => {
    const row = document.createElement('tr');
    row.className = "bg-white border border-[#B09A7026] shadow-sm rounded-lg group hover:shadow-lg transition-shadow";
    
    row.innerHTML = `
        <td class="px-4 py-4 text-[15px] text-[#000000] font-regular">${item.id}</td>
        <td class="px-4 py-4 text-[15px] text-[#000000] font-regular">${item.tId}</td>
        <td class="px-4 py-4 text-[15px] text-[#000000] font-regular">${item.method}</td>
        <td class="px-4 py-4 text-[15px] text-[#000000] font-regular">${item.amount}</td>
        <td class="px-4 py-4 text-[15px] text-[#000000] font-regular">${item.date}</td>
        <td class="px-4 py-4 text-center">
            <span class="px-4 py-2 rounded-full text-[14px] font-medium border ${statusStyles[item.status]}">
                ${item.status}
            </span>
        </td>
        <td class="px-4 py-4 text-[15px] text-[#000000] font-regular">${item.pId}</td>
        <td class="px-6 py-4 text-center">
            <button onclick="viewDetails(${item.id})" class="p-2 bg-[#0077B61A] hover:bg-[#0077B633] rounded-lg transition">
                <img src="../images/icon-awesome-eye-open.svg" alt="view">
            </button>
        </td>
    `;
    tableBody.appendChild(row);
});