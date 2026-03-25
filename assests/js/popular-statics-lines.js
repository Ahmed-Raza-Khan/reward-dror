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

const rewardsData = [
  { 
    name: 'Stone House eGift Card',
    used: 122,
    points: 132,
    img: "assests/images/egift-card-1.png",
    text: 'white'
  },
  { 
    name: 'Starbucks Coffee', 
    used: 122, 
    points: 132, 
    img: "assests/images/egift-card-2.png", 
    text: 'white' 
  },
  { 
    name: 'Booho eGift Card', 
    used: 122, 
    points: 132, 
    img: "assests/images/egift-card-3.png", 
    text: 'white' 
  },
  { 
    name: 'Argos eGift Card', 
    used: 122, 
    points: 132, 
    img: "assests/images/egift-card-4.png", 
    text: 'white' 
  },
  { 
    name: 'Euro Star', 
    used: 122, 
    points: 132, 
    img: "assests/images/egift-card-5.png", 
    text: 'white' 
  }
];

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
                <img src="${reward.img}" class="w-25 h-15 rounded-md flex items-center justify-center text-[7px] font-bold ${reward.text === 'white' ? 'text-white' : 'text-gray-500'} uppercase"></img>
                <div>
                    <h4 class="text-[16px] font-medium text-[#060707] leading-none mb-1">${reward.name}</h4>
                    <p class="text-[10px] text-gray-400">${reward.used} Used</p>
                </div>
            </div>
            <div class="text-right">
                <div class="flex items-center justify-end gap-1 mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#46B277]"></span>
                    <span class="text-[14px] text-[#46B277] font-medium tracking-tighter">Available</span>
                </div>
                <p class="text-[13px] text-[#4A5A6BBF] font-regular font-normal">${reward.points} points</p>
            </div>
        `;
        rewardsList.appendChild(item);
    });
}
});