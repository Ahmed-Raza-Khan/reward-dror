const businessData = [
    { id: "01", name: "Abc Comapny", email: "abc@gmail.com", status: "Active", apiKey: "Active", created: "mm/dd/yyyy", lastActivity: "mm/dd/yyyy" },
    { id: "02", name: "Def Comapny", email: "abc@gmail.com", status: "In Active", apiKey: "Suspended", created: "mm/dd/yyyy", lastActivity: "mm/dd/yyyy" },
    { id: "03", name: "Ghi Comapny", email: "abc@gmail.com", status: "Active", apiKey: "Active", created: "mm/dd/yyyy", lastActivity: "mm/dd/yyyy" },
    { id: "04", name: "Xyz Comapny", email: "abc@gmail.com", status: "In Active", apiKey: "Revoked", created: "mm/dd/yyyy", lastActivity: "mm/dd/yyyy" },
    { id: "05", name: "Abc Comapny", email: "abc@gmail.com", status: "Active", apiKey: "Active", created: "mm/dd/yyyy", lastActivity: "mm/dd/yyyy" }
];

function renderBusinessTable(data) {
    const tbody = document.getElementById('businessTableBody');
    tbody.innerHTML = data.map(item => {
        const isActive = item.status === "Active";
        
        return `
            <tr class="bg-white border border-[#B09A7026] shadow-sm rounded-lg">
                <td class="px-6 py-4 text-[15px] text-[#000000] font-regular rounded-l-lg border-y border-l">${item.id}</td>
                <td class="px-6 py-4 text-[15px] text-[#000000] font-regular border-y">${item.name}</td>
                <td class="px-6 py-4 text-[15px] text-[#000000] font-regular border-y">${item.email}</td>
                <td class="px-6 py-4 border-y">
                    <span class="flex items-center gap-2 px-3.5 py-1 rounded-md text-[14px] font-regular w-content border ${isActive ? 'bg-[#21BB6033] text-[#21BB60] border-[#21BB60]' : 'bg-[#F1504633] text-[#F15046] border-[#F15046]'}">
                        <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#21BB60]' : 'bg-[#F15046]'}"></span>
                        ${item.status}
                    </span>
                </td>
                <td class="px-6 py-4 text-[15px] text-[#000000] font-regular border-y">${item.apiKey}</td>
                <td class="px-6 py-4 text-[15px] text-[#000000] font-regular border-y">${item.created}</td>
                <td class="px-6 py-4 text-[15px] text-[#000000] font-regular border-y">${item.lastActivity}</td>
                <td class="px-6 py-4 rounded-r-lg border-y border-r">
                    <button onclick="businessDetails(${item.id})" class="p-2 bg-[#E2F7FF] rounded-md text-[#0077B6] hover:text-white transition">
                        <img src="/assests/images/icon-awesome-eye-open.svg" alt="view">
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function businessDetails(id) {
    const rewards = JSON.parse(localStorage.getItem("businessData")) || [];
    const selected = rewards.find(item => item.id === id);
    localStorage.setItem("businessDetails", JSON.stringify(selected));
    window.location.href = "business-account-detail.html";
}

if (!localStorage.getItem("businessData")) {
    localStorage.setItem("businessData", JSON.stringify(businessData));
}

document.getElementById('businessSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = businessData.filter(b => b.name.toLowerCase().includes(term) || b.email.toLowerCase().includes(term));
    renderBusinessTable(filtered);
});

renderBusinessTable(businessData);