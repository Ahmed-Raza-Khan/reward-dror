const data = JSON.parse(localStorage.getItem("rewardDetails"));

if (data) {
    document.getElementById("rewardId").innerText = "Gift#" + data.id;
    document.getElementById("rewardName").innerText = data.name || "-";
    document.getElementById("rewardType").innerText = data.type || "-";
    document.getElementById("rewardImage").src = data.img || "";

    document.getElementById("rewardDesc").innerText = data.description || "-";
    document.getElementById("rewardAmount").innerText = data.amount || "-";

    document.getElementById("rewardPoints").innerText = data.points || "-";
    document.getElementById("rewardRedemption").innerText = data.redemption || "-";

    const toggle = document.getElementById("statusToggle");
    toggle.checked = data.status === "enable";

    toggle.addEventListener("change", () => {
        const newStatus = toggle.checked ? "enable" : "disable";
        data.status = newStatus;
        localStorage.setItem("rewardDetails", JSON.stringify(data));

        let rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];
        rewards = rewards.map(item => {
            if (item.id === data.id) {
                return { ...item, status: newStatus };
            }
            return item;
        });

        localStorage.setItem("rewardsData", JSON.stringify(rewards));
    });
}