const businessData = [
    { id: 'Bus1101', date: '2026-02-01', category: 'Fashion', status: 'Active', color: 'bg-[#2DD5A5]', img: "assests/images/new-business-dot-menu.svg" },
    { id: 'Bus1102', date: '2025-12-11', category: 'Tourism', status: 'Inactive', color: 'bg-[#F1556C]' , img: "assests/images/new-business-dot-menu.svg" },
    { id: 'Bus1103', date: '2026-01-21', category: 'Ecommerce', status: 'Pending', color: 'bg-[#F9BC0B]' , img: "assests/images/new-business-dot-menu.svg" },
    { id: 'Bus1104', date: '2026-01-18', category: 'Sports', status: 'Active', color: 'bg-[#2DD5A5]' , img: "assests/images/new-business-dot-menu.svg" },
    { id: 'Bus1114', date: '2026-01-24', category: 'Fashion', status: 'Active', color: 'bg-[#2DD5A5]' , img: "assests/images/new-business-dot-menu.svg" }
];

const userData = [
    { usersingimg: "assests/images/user-img-new-1.jpg" , name: 'John Doe', date: '2024-12-14', points: '123 Points', status: 'Active', color: 'bg-[#2DD5A5]' , img: "assests/images/new-business-dot-menu.svg" } ,
    { usersingimg: "assests/images/user-img-new-2.jpg" , name: 'Kelly', date: '2024-12-14', points: '453 Points', status: 'Active', color: 'bg-[#2DD5A5]' , img: "assests/images/new-business-dot-menu.svg" } ,
    { usersingimg: "assests/images/user-img-new-3.jpg" , name: 'Sara josh', date: '2024-12-14', points: '12 Points', status: 'In Active', color: 'bg-[#F1556C]' , img: "assests/images/new-business-dot-menu.svg" } ,
    { usersingimg: "assests/images/user-img-new-4.jpg" , name: 'Edward', date: '2024-12-14', points: '157 Points', status: 'Active', color: 'bg-[#2DD5A5]' , img: "assests/images/new-business-dot-menu.svg" } ,
    { usersingimg: "assests/images/user-img-new-5.jpg" , name: 'Mary kom', date: '2024-12-14', points: '254 Points', status: 'Active', color: 'bg-[#2DD5A5]' , img: "assests/images/new-business-dot-menu.svg" } 
];


const businessContainer = document.getElementById('business-list');
businessData.forEach(bus => {
    const row = document.createElement('div');
    row.className = "grid grid-cols-5 items-center p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg group transition-colors";
    row.innerHTML = `
        <div class="font-semibold font-ibm-plex-sans text-[#4C4C5C] text-[13px]">${bus.id}</div>
        <div class="text-[#4C4C5C] text-[13px] font-medium">${bus.date}</div>
        <div class="text-[#4C4C5C] text-[13px] font-medium">${bus.category}</div>
        <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full ${bus.color}"></span>
            <span class="text-[13px] font-regular text-[#4C4C5C]">${bus.status}</span>
        </div>
        <div class="text-right cursor-pointer px-2"><img src="${bus.img}"></img></div>
    `;
    businessContainer.appendChild(row);
});


const usersContainer = document.getElementById('users-list');
userData.forEach(user => {
    const row = document.createElement('div');
    row.className = "grid grid-cols-5 items-center p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg group transition-colors";
    row.innerHTML = `
        <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#0077B633] shadow-xl">
                <img src="${user.usersingimg}"></img>
            </div>
            <span class="font-medium text-[#4C4C5C] text-[13px] truncate">${user.name}</span>
        </div>
        <div class="font-regular text-[#4C4C5C] text-[13px]">${user.date}</div>
        <div class="font-regular text-[#4C4C5C] text-[13px]">${user.points}</div>
        <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full ${user.color}"></span>
            <span class="font-regular text-[#4C4C5C] text-[13px] ${user.status === 'In Active' ? 'text-pink-500' : 'text-gray-600'}">${user.status}</span>
        </div>
        <div class="text-right cursor-pointer px-2"><img src="${user.img}"></img></div>
    `;
    usersContainer.appendChild(row);
});