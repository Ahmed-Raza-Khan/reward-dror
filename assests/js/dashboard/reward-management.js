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

const tableBody = document.getElementById('reward-table-body');

tableBody.innerHTML = rewardsData.map(item => `
    <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 text-[#000000] text-[15px] font-regular">${item.id}</td>
        <td class="px-6 py-4">
            <div class="w-22 h-14 rounded-md flex items-center justify-center">
                <img src="${item.img}" class="w-22 h-14 rounded rounded-md"/>
            </div>
        </td>
        <td class="px-6 py-4 text-[#000000] text-[15px] font-regular">${item.name}</td>
        <td class="px-6 py-4 text-[#000000] text-[15px] font-regular">${item.type}</td>
        <td class="px-6 py-4 text-[#000000] text-[15px] font-regular">${item.sync}</td>
        <td class="px-6 py-4">
            <div class="relative inline-block text-left w-32">
                <select class="block w-full text-[13px] rounded-md py-1.5 pl-3 pr-8 font-medium focus:outline-none ${item.status === 'enable' ? 'text-[#21BB60] bg-[#21BB6033] border border-[#21BB60]' : 'text-[#F15046] bg-[#F1504633] border border-[#F15046]'}">
                    <option class="bg-[#21BB6033] text-[#21BB60] text-[13px] font-medium" value="enable" ${item.status === 'enable' ? 'selected' : ''}>Enabled</option>
                    <option class="bg-[#F1504633] text-[#F15046] text-[13px] font-medium" value="disable" ${item.status === 'disable' ? 'selected' : ''}>Disabled</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-500">
                    <i class="fas fa-chevron-down text-[12px]"></i>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 text-center">
            <button class="p-2 bg-[#0077B61A] text-sky-500 rounded-lg hover:bg-sky-100 transition-colors">
                <a href="../dashboard/reward-details.html">
                    <img src="../images/icon-awesome-eye-open.svg" alt="RewardDror Logo">
                </a>
            </button>
        </td>
    </tr>
`).join('');