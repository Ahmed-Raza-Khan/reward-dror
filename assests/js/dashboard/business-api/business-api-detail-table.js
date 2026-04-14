
const statsData = [
    { label: "Total Api Calls", value: "12450", color: "text-[#0754A0]", style: "text-[27px]" },
    { label: "Successful Requests", value: "12,200", color: "text-[#0754A0]", style: "text-[27px]" },
    { label: "Failed Request", value: "50", color: "text-[#DB4E53]", style: "text-[27px]" },
    { label: "Latest Api Call", value: "2025-12-15 14:35:21", color: "text-[#333333]" }
];

const statsContainer = document.getElementById('stats-container');
statsContainer.innerHTML = statsData.map(stat => `
    <div class="bg-[#FFFFFF] p-6 rounded-md border border-[#E3E5EA] shadow-sm">
        <p class="text-[#666666] text-[21px] font-semibold mb-2">${stat.label}</p>
        <p class="${stat.color} ${stat.style} text-[20px] font-semibold">${stat.value}</p>
    </div>
`).join('');

const usageData = [
    { sno: "01", date: "mm/dd/yyyy", unlockId: "UNL-1234", details: "Device Unlock - User 123" },
    { sno: "02", date: "mm/dd/yyyy", unlockId: "UNL-14", details: "Device Unlock - User 123" },
    { sno: "03", date: "mm/dd/yyyy", unlockId: "UNL-2454", details: "Device Unlock - User 123" },
    { sno: "04", date: "mm/dd/yyyy", unlockId: "UNL-544", details: "Device Unlock - User 123" }
];

const usageTable = document.getElementById('usage-table-body');
usageTable.innerHTML = usageData.map(row => `
    <tr class="border-b border-[#B09A7026] hover:bg-gray-50 fee-configration-main-tick-fee">
        <td class="px-6 py-4 text-[15px] text-[#000000]">${row.sno}</td>
        <td class="px-6 py-4 text-[15px] text-[#000000]">${row.date}</td>
        <td class="px-6 py-4 text-[15px] text-[#0077B6] cursor-pointer">${row.unlockId}</td>
        <td class="px-6 py-4 text-[15px] text-[#000000]">${row.details}</td>
    </tr>
`).join('');

const logData = [
    { sno: "01", time: "2025-12-15 14:35:21", activity: "Api Key Regenerated", color: "text-[#0077B6]" },
    { sno: "02", time: "2025-12-15 14:35:21", activity: "Account Suspended", color: "text-[#0077B6]" },
    { sno: "03", time: "2025-12-15 14:35:21", activity: "Failed Request - Error 403", color: "text-[#0077B6]" }
];

const logTable = document.getElementById('log-table-body');
logTable.innerHTML = logData.map(row => `
    <tr class="border-b border-[#B09A7026] hover:bg-gray-50 fee-configration-main-tick-fee text-[15px]">
        <td class="px-6 py-4">${row.sno}</td>
        <td class="px-6 py-4">${row.time}</td>
        <td class="px-6 py-4 ${row.color} cursor-pointer">${row.activity}</td>
    </tr>
`).join('');

function closeModal() {
    document.getElementById('successModal').classList.add('hidden');
}