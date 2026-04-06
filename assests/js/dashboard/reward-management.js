const rewardsData = [
    {
        id: 1,
        name: "Stone House EGift Card",
        img: "../images/egift-card-1.png", 
        type: "Fixed", 
        sync: "mm/dd/yyyy", 
        status: "enable"
    },
    {   
        id: 2,
        name: "Starbucks EGift Card",
        img: "../images/egift-card-2.png",
        type: "Varaible",
        sync: "mm/dd/yyyy",
        status: "disable"
    },
    {
        id: 3,
        name: "booho egift card",
        img: "../images/egift-card-9.png", 
        type: "Fixed",
        sync: "mm/dd/yyyy",
        status: "enable"
    },
    {
        id: 4,
        name: "argos egift card",
        img: "../images/egift-card-8.png", 
        type: "Fixed",
        sync: "mm/dd/yyyy",
        status: "disable"
    },
    {
        id: 5,
        name: "euro star",
        img: "../images/egift-card-5.png", 
        type: "Fixed",
        sync: "mm/dd/yyyy",
        status: "enable"
    }
];

function syncCatalog() {
    const syncBtn = document.getElementById('syncBtn');
    const originalText = syncBtn.innerHTML;
    
    syncBtn.disabled = true;
    syncBtn.innerHTML = `<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Syncing...`;

    setTimeout(() => {
        let currentStored = JSON.parse(localStorage.getItem("rewardsData")) || [];

        let updatedCount = 0;
        rewardsData.forEach(masterItem => {
            const exists = currentStored.some(item => item.id === masterItem.id);
            if (!exists) {
                currentStored.push(masterItem);
                updatedCount++;
            }
        });

        currentStored.sort((a, b) => a.id - b.id);

        localStorage.setItem("rewardsData", JSON.stringify(currentStored));
        renderTable();

        syncBtn.disabled = false;
        syncBtn.innerHTML = originalText;

        if(updatedCount > 0) {
            alert(`${updatedCount} missing products restored to catalog!`);
        } else {
            alert("Catalog is already up to date.");
        }
    }, 800);
}


function renderTable() {
    const rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];
    const tableBody = document.getElementById('reward-table-body');

    if (rewards.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center py-10 text-gray-400">No rewards found. Click Sync Catalog to restore.</td></tr>`;
        return;
    }

    tableBody.innerHTML = rewards.map(item => `
        <tr class="hover:bg-gray-50 transition">
            <td class="px-6 py-4">${item.id}</td>
            <td class="px-6 py-4">
                <img src="${item.img}" class="w-22 h-14 rounded-md object-cover shadow-sm"/>
            </td>
            <td class="px-6 py-4 font-medium">${item.name}</td>
            <td class="px-6 py-4">${item.type}</td>
            <td class="px-6 py-4 text-gray-500">${item.sync}</td>
            <td class="px-6 py-4">
                <select onchange="updateStatus(${item.id}, this)"
                    class="block w-full text-[13px] rounded-md py-1.5 cursor-pointer
                    ${item.status === 'enable'
                        ? 'text-[#21BB60] bg-[#21BB6033] border border-[#21BB60]'
                        : 'text-[#F15046] bg-[#F1504633] border border-[#F15046]'
                    }">
                    <option value="enable" ${item.status === 'enable' ? 'selected' : ''}>Enabled</option>
                    <option value="disable" ${item.status === 'disable' ? 'selected' : ''}>Disabled</option>
                </select>
            </td>
            <td class="px-6 py-4 text-center">
                <button onclick="viewDetails(${item.id})" class="p-2 bg-[#0077B61A] hover:bg-[#0077B633] rounded-lg transition">
                    <img src="../images/icon-awesome-eye-open.svg" alt="view">
                </button>
            </td>
        </tr>
    `).join('');
}

function updateStatus(id, selectElement) {
    const newStatus = selectElement.value;
    let rewards = JSON.parse(localStorage.getItem("rewardsData"));
    rewards = rewards.map(item => {
        if (item.id === id) item.status = newStatus;
        return item;
    });
    localStorage.setItem("rewardsData", JSON.stringify(rewards));
    renderTable();
}

function viewDetails(id) {
    const rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];
    const selected = rewards.find(item => item.id === id);
    localStorage.setItem("rewardDetails", JSON.stringify(selected));
    window.location.href = "reward-details.html";
}

if (!localStorage.getItem("rewardsData")) {
    localStorage.setItem("rewardsData", JSON.stringify(rewardsData));
}

renderTable();