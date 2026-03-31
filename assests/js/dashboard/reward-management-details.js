const data = JSON.parse(localStorage.getItem("rewardDetails"));

if (data) {

    document.getElementById("rewardId").innerText = "Gift#" + data.id;
    document.getElementById("rewardName").innerText = data.name;
    document.getElementById("rewardType").innerText = data.type;
    document.getElementById("rewardImage").src = data.img;

    document.getElementById("rewardDesc").innerText =
        "When you give a Starbucks Code, you’re giving more than just a gift or a token of appreciation. You’re connecting with customers and employees.";

    document.getElementById("rewardPoints").innerText = "150 Points for 25 Euro";
    document.getElementById("rewardAmount").innerText = "£5 to £150";
    document.getElementById("rewardRedemption").innerText = "Online & In-Store";

    const toggle = document.getElementById("statusToggle");

    toggle.checked = data.status === "enable";

    toggle.addEventListener("change", () => {

        const newStatus = toggle.checked ? "enable" : "disable";

        data.status = newStatus;
        localStorage.setItem("rewardDetails", JSON.stringify(data));

        let rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];

        rewards = rewards.map(item => {
            if (item.id === data.id) {
                item.status = newStatus;
            }
            return item;
        });

        localStorage.setItem("rewardsData", JSON.stringify(rewards));
    });
}