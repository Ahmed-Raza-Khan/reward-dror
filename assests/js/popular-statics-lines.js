document.addEventListener('DOMContentLoaded', () => {
const statsData = [
    { month: 'Jan', income: 70, expense: 20 },
    { month: 'Feb', income: 85, expense: 25 },
    { month: 'Mar', income: 60, expense: 35 },
    { month: 'Apr', income: 90, expense: 20 },
    { month: 'May', income: 60, expense: 30 },
    { month: 'Jun', income: 50, expense: 30 },
    { month: 'Jul', income: 30, expense: 20 },
    { month: 'Aug', income: 20, expense: 10 },
    { month: 'Sep', income: 70, expense: 40 },
    { month: 'Oct', income: 30, expense: 40 },
    { month: 'Nov', income: 60, expense: 30 },
    { month: 'Dec', income: 35, expense: 25 }
];

// const rewardsData =;

const chartContainer = document.getElementById('chart-container');
if (chartContainer) {
    statsData.forEach(item => {
        const barWrapper = document.createElement('div');
        barWrapper.className = "flex flex-col items-center flex-1 h-full justify-end";
        barWrapper.innerHTML = `
            <div class="flex items-end gap-0 h-full w-full justify-center ps-1">
                <div class="bg-emerald-400 w-4 rounded-md" style="height: ${item.income}%"></div>
                <div class="bg-indigo-400 w-4 rounded-md" style="height: ${item.expense}%"></div>
            </div>
            <span class="text-[12px] text-[#9BA6B7] mt-2 font-medium">${item.month}</span>
        `;
        chartContainer.appendChild(barWrapper);
    });
}

const rewardsList = document.getElementById('rewards-list');
if (rewardsList) {
    rewardsData.forEach(reward => {
        const item = document.createElement('div');
        item.className = "flex items-center justify-between";
        item.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-12 h-8 ${reward.color} rounded-md flex items-center justify-center text-[7px] font-bold ${reward.text === 'white' ? 'text-white' : 'text-gray-500'} uppercase">${reward.label}</div>
                <div>
                    <h4 class="text-sm font-bold text-gray-800 leading-none mb-1">${reward.name}</h4>
                    <p class="text-[10px] text-gray-400">${reward.used} Used</p>
                </div>
            </div>
            <div class="text-right">
                <div class="flex items-center justify-end gap-1 mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span class="text-[10px] text-emerald-500 font-bold uppercase tracking-tighter">Available</span>
                </div>
                <p class="text-[10px] text-gray-400 font-medium">${reward.points} points</p>
            </div>
        `;
        rewardsList.appendChild(item);
    });
}
});