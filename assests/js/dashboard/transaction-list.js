const transactions = [
    { id: "01", tId: "US#0001", method: "User", amount: "120", date: "mm/dd/yyyy", status: "Approved", pId: "110001" },
    { id: "02", tId: "US#0087", method: "Business", amount: "120", date: "mm/dd/yyyy", status: "Rejected", pId: "110001" },
    { id: "03", tId: "US#1541", method: "User", amount: "120", date: "mm/dd/yyyy", status: "Approved", pId: "14541" },
    { id: "04", tId: "US#4874", method: "Business", amount: "110", date: "mm/dd/yyyy", status: "Rejected", pId: "144874" },
    { id: "05", tId: "US#0064", method: "User", amount: "220", date: "mm/dd/yyyy", status: "Pending", pId: "140064" }
];

const statusStyles = {
    'Approved': 'bg-green-50 text-green-500 border-green-100',
    'Rejected': 'bg-red-50 text-red-400 border-red-100',
    'Pending': 'bg-yellow-50 text-yellow-500 border-yellow-100'
};

const tableBody = document.getElementById('transaction-body');

transactions.forEach(item => {
    const row = document.createElement('tr');
    row.className = "bg-white border border-gray-100 rounded-lg group hover:shadow-md transition-shadow";
    
    row.innerHTML = `
        <td class="px-4 py-4 text-sm text-gray-600 font-medium">${item.id}</td>
        <td class="px-4 py-4 text-sm text-gray-600">${item.tId}</td>
        <td class="px-4 py-4 text-sm text-gray-600">${item.method}</td>
        <td class="px-4 py-4 text-sm text-gray-600">${item.amount}</td>
        <td class="px-4 py-4 text-sm text-gray-400">${item.date}</td>
        <td class="px-4 py-4 text-center">
            <span class="px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles[item.status]}">
                ${item.status}
            </span>
        </td>
        <td class="px-4 py-4 text-sm text-gray-600">${item.pId}</td>
        <td class="px-4 py-4 text-center">
            <button class="text-blue-400 hover:text-blue-600">
                <i class="fa-regular fa-eye"></i>
            </button>
        </td>
    `;
    tableBody.appendChild(row);
});