const transactions = [
    {
        img: "../images/egift-card-1.png",
        reward: "Booho eGift Card",
        desc: "120",
        date: "February 14, 2026",
        time: "10:20 AM",
        status: "Approved",
        tranId: "110001",
        customer: "User",
        customerId: "Us#011"
    },
    {
        img: "../images/egift-card-2.png",
        reward: "starbucks eGift Card",
        desc: "140",
        date: "January 21, 2026",
        time: "11:20 AM",
        status: "Pending",
        tranId: "140064",
        customer: "Buisness",
        customerId: "Us#100"
    },
    {
        img: "../images/egift-card-6.png",
        reward: "Virgin eGift Card",
        desc: "160",
        date: "March 24, 2026",
        time: "09:20 AM",
        status: "Rejected",
        tranId: "140064",
        customer: "User",
        customerId: "Us#123"
    },
    {
        img: "../images/egift-card-7.png",
        reward: "Tour Gift eGift Card",
        desc: "150",
        date: "April 15, 2025",
        time: "10:43 AM",
        status: "Approved",
        tranId: "140064",
        customer: "User",
        customerId: "Us#154"
    },
    {
        img: "../images/egift-card-8.png",
        reward: "Argos eGift Card",
        desc: "120",
        date: "May 13, 2025",
        time: "08:46 AM",
        status: "Approved",
        tranId: "140064",
        customer: "Buisness",
        customerId: "Us#120"
    }
];

const tableBody = document.getElementById('transaction-table-body');

const getStatusStyles = (status) => {
    switch(status) {
        case 'Approved': return 'bg-[#21BB601A] text-[#21BB60]';
        case 'Pending': return 'bg-[#F9D4001A] text-[#F9D400]';
        case 'Rejected': return 'bg-[#FAD7E1] text-[#E7366B]';
        default: return 'bg-gray-50 text-gray-500';
    }
};

transactions.forEach(item => {
    const statusClass = getStatusStyles(item.status);
    const row = `
        <tr class="hover:bg-gray-50 transition-colors">

            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <img src="${item.img}" class="w-22 h-14 rounded rounded-md" />
                    <div>
                        <div class="font-medium text-[#060707] text-[14px]">${item.reward}</div>
                        <div class="text-[13px] text-[#4A5A6BBF] font-regular">${item.desc}</div>
                    </div>
                </div>
            </td>

            <td class="px-6 py-4">
                <div class="font-medium text-[#060707] text-[14px]">${item.date}</div>
                <div class="text-[13px] text-[#4A5A6BBF] font-regular uppercase">${item.time}</div>
            </td>

            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-[13px] font-medium ${statusClass}">
                    ${item.status}
                </span>
            </td>

            <td class="px-6 py-4 text-center text-[#060707] font-regular text-[14px]">${item.tranId}</td>

            <td class="px-6 py-4">
                <div class="font-medium text-[#060707] text-[14px]">${item.customer}</div>
                <div class="text-[13px] text-[#4A5A6BBF] font-regular">${item.customerId}</div>
            </td>

            <td class="px-6 py-4 text-center">
                <button class="p-2 bg-[#0077B61A] text-sky-500 rounded-lg hover:bg-sky-100 transition-colors">
                    <img src="../images/icon-awesome-eye-open.svg" alt="RewardDror Logo">
                </button>
            </td>
        </tr>
    `;
    tableBody.innerHTML += row;
});