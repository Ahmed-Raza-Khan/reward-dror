const feeHistory = [
    { id: "01", percentage: "10%", validation: "10 To 150 Euro", date: "mm/dd/yyyy", status: "Active" },
    { id: "02", percentage: "02%", validation: "50 To 150 Euro", date: "mm/dd/yyyy", status: "In Active" },
    { id: "03", percentage: "04%", validation: "10 To 140 Euro", date: "mm/dd/yyyy", status: "In Active" },
    { id: "04", percentage: "03%", validation: "10 To 110 Euro", date: "mm/dd/yyyy", status: "In Active" },
    { id: "05", percentage: "05%", validation: "10 To 120 Euro", date: "mm/dd/yyyy", status: "In Active" }
];

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = data.map(item => {
        const isActive = item.status === "Active";
        const statusClasses = isActive 
            ? "bg-[#21BB6033] text-[#21BB60] border-[#21BB60]" 
            : "bg-[#F1504633] text-[#F15046] border-[#F15046]";
        const dotClasses = isActive ? "bg-[#21BB60]" : "bg-[#F15046]";

        return `
            <tr class="bg-[#FFFFFF] border border-[#B09A7026] shadow-sm rounded-lg fee-configration-main-heading">
                <td class="px-6 py-4 rounded-l-lg border-y border-l font-regular text-[15px] text-[#000000]">${item.id}</td>
                <td class="px-6 py-4 border-y font-regular text-[15px] text-[#000000]">${item.percentage}</td>
                <td class="px-6 py-4 border-y font-regular text-[15px] text-[#000000]">${item.validation}</td>
                <td class="px-6 py-4 border-y font-regular text-[15px] text-[#000000]">${item.date}</td>
                <td class="px-6 py-4 rounded-r-lg border-y border-r">
                    <span class="${statusClasses} px-5 py-1 rounded-md text-[14px] flex items-center w-fit border">
                        <span class="w-1.5 h-1.5 ${dotClasses} rounded-full mr-2 capitalized"></span> ${item.status}
                    </span>
                </td>
            </tr>
        `;
    }).join('');
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = feeHistory.filter(item => 
        item.percentage.toLowerCase().includes(term) || 
        item.validation.toLowerCase().includes(term)
    );
    renderTable(filtered);
});

renderTable(feeHistory);
lucide.createIcons();