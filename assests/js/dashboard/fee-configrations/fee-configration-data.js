const modal = document.getElementById('previewModal');
const successModal = document.getElementById('successModal');
const pointInput = document.getElementById('pointInput');

let feeHistory = [
    { id: "01", percentage: "10%", validation: "10 To 150 Euro", date: "04/07/2026", status: "Active" },
    { id: "02", percentage: "02%", validation: "50 To 150 Euro", date: "04/01/2026", status: "In Active" },
    { id: "03", percentage: "04%", validation: "10 To 140 Euro", date: "mm/dd/yyyy", status: "In Active" },
    { id: "04", percentage: "03%", validation: "10 To 110 Euro", date: "mm/dd/yyyy", status: "In Active" },
    { id: "05", percentage: "05%", validation: "10 To 120 Euro", date: "mm/dd/yyyy", status: "In Active" }
];

function toggleModal() {
    modal.classList.toggle('hidden');
}

function closeSuccessModal() {
    successModal.classList.add('hidden');
}

function saveFeeChanges() {
    const feeValue = document.getElementById('feeInput').value;
    const validationValue = document.getElementById('validationInput').value;
    const today = new Date().toLocaleDateString('en-US');

    feeHistory.forEach(item => item.status = "In Active");

    const newEntry = {
        id: (feeHistory.length + 1).toString().padStart(2, '0'),
        percentage: feeValue,
        validation: validationValue,
        date: today,
        status: "Active"
    };

    feeHistory.unshift(newEntry);
    renderTable(feeHistory);

    successModal.classList.remove('hidden');
}


function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = data.map(item => {
        const isActive = item.status === "Active";
        const statusClasses = isActive 
            ? "bg-[#21BB6033] text-[#21BB60] border-[#21BB60]" 
            : "bg-[#F1504633] text-[#F15046] border-[#F15046]";
        const dotClasses = isActive ? "bg-[#21BB60]" : "bg-[#F15046]";

        return `
            <tr class="bg-[#FFFFFF] border border-[#B09A7026] shadow-sm rounded-lg">
                <td class="px-6 py-4 rounded-l-lg border-y border-l font-regular text-[15px] text-[#000000]">${item.id}</td>
                <td class="px-6 py-4 border-y font-regular text-[15px] text-[#000000]">${item.percentage}</td>
                <td class="px-6 py-4 border-y font-regular text-[15px] text-[#000000]">${item.validation}</td>
                <td class="px-6 py-4 border-y font-regular text-[15px] text-[#000000]">${item.date}</td>
                <td class="px-6 py-4 rounded-r-lg border-y border-r">
                    <span class="${statusClasses} px-5 py-1 rounded-md text-[14px] flex items-center w-fit border">
                        <span class="w-1.5 h-1.5 ${dotClasses} rounded-full mr-2"></span> ${item.status}
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
        item.validation.toLowerCase().includes(term) ||
        item.status.toLowerCase().includes(term)
    );
    renderTable(filtered);
});


function updatePoints(amount) {
    let current = parseInt(pointInput.value);
    if(current + amount >= 0) pointInput.value = current + amount;
}

function setPoints(val) {
    pointInput.value = val;
}


window.onclick = function(event) {
    if (event.target == modal) toggleModal();
    if (event.target == successModal) closeSuccessModal();
}

renderTable(feeHistory);