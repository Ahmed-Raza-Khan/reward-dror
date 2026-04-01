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

function viewDetails(id) {
    const rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];

    const selected = rewards.find(item => item.id === id);

    localStorage.setItem("rewardDetails", JSON.stringify(selected));

    window.location.href = "reward-details.html";
}

if (!localStorage.getItem("rewardsData")) {
    localStorage.setItem("rewardsData", JSON.stringify(rewardsData));
}

function updateStatus(id, selectElement) {

    const newStatus = selectElement.value;

    let rewards = JSON.parse(localStorage.getItem("rewardsData"));

    rewards = rewards.map(item => {
        if (item.id === id) {
            item.status = newStatus;
        }
        return item;
    });

    localStorage.setItem("rewardsData", JSON.stringify(rewards));

    selectElement.className = `
        block w-full text-[13px] rounded-md py-1.5
        ${newStatus === 'enable'
            ? 'text-[#21BB60] bg-[#21BB6033] border border-[#21BB60]'
            : 'text-[#F15046] bg-[#F1504633] border border-[#F15046]'
        }`;

    renderTable();
}

const storedRewards = JSON.parse(localStorage.getItem("rewardsData")) || [];

const tableBody = document.getElementById('reward-table-body');

function renderTable() {
    const rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];

    const tableBody = document.getElementById('reward-table-body');

    tableBody.innerHTML = rewards.map(item => `
        <tr class="hover:bg-gray-50 transition">
            <td class="px-6 py-4">${item.id}</td>
            
            <td class="px-6 py-4">
                <img src="${item.img}" class="w-22 h-14 rounded-md"/>
            </td>

            <td class="px-6 py-4">${item.name}</td>
            <td class="px-6 py-4">${item.type}</td>
            <td class="px-6 py-4">${item.sync}</td>

            <td class="px-6 py-4">
                <select onchange="updateStatus(${item.id}, this)"
                    class="block w-full text-[13px] rounded-md py-1.5
                    ${item.status === 'enable'
                        ? 'text-[#21BB60] bg-[#21BB6033] border border-[#21BB60]'
                        : 'text-[#F15046] bg-[#F1504633] border border-[#F15046]'
                    }">
                    
                    <option value="enable" ${item.status === 'enable' ? 'selected' : ''}>Enabled</option>
                    <option value="disable" ${item.status === 'disable' ? 'selected' : ''}>Disabled</option>
                </select>
            </td>

            <td class="px-6 py-4 text-center">
                <button onclick="viewDetails(${item.id})"
                    class="p-2 bg-[#0077B61A] rounded-lg">
                    <img src="../images/icon-awesome-eye-open.svg">
                </button>
            </td>
        </tr>
    `).join('');
}

renderTable();