let uploadedImage = null;

const previewImg = document.getElementById("previewImg");
const dropContent = document.getElementById("dropContent");
const dropZone = document.getElementById("dropZone");
const imageUpload = document.getElementById("imageUpload");

const data = JSON.parse(localStorage.getItem("rewardDetails"));

if (data) {
    document.getElementById("rewardNameLeft").value = data.name || "";
    document.getElementById("rewardNameRight").value = data.name || "";
    document.getElementById("rewardDesc").value = data.description || "";
    document.getElementById("rewardAmount").value = data.amount || "";

    const statusToggle = document.getElementById("statusToggle");
    const featuredToggle = document.getElementById("featuredToggle");

    statusToggle.checked = data.status === "enable";
    featuredToggle.checked = data.featured !== false;

    updateToggleColor(statusToggle);
    updateToggleColor(featuredToggle);
}

function updateToggleColor(toggle) {
    if (!toggle) return;

    const label = toggle.nextElementSibling;
    if (!label) return;

    label.classList.toggle("bg-[#4CAF50]", toggle.checked);
    label.classList.toggle("bg-[#F15046]", !toggle.checked);

    const dot = label.querySelector(".toggle-dot");
    if (dot) {
        dot.style.transform = toggle.checked ? "translateX(20px)" : "translateX(0)";
    }
}

document.getElementById("statusToggle")?.addEventListener("change", function () {
    updateToggleColor(this);
});

document.getElementById("featuredToggle")?.addEventListener("change", function () {
    updateToggleColor(this);
});

imageUpload?.addEventListener("change", function () {
    const file = this.files[0];
    if (file) showPreview(file);
});

dropZone?.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});

dropZone?.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
});

dropZone?.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");

    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
        showPreview(file);
    }
});

function showPreview(file) {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        uploadedImage = e.target.result;
    };

    reader.readAsDataURL(file);
}

function saveChanges() {
    const current = JSON.parse(localStorage.getItem("rewardDetails")) || {};

    const updated = {
        ...current,
        name: document.getElementById("rewardNameLeft").value,
        description: document.getElementById("rewardDesc").value,
        amount: document.getElementById("rewardAmount").value,
        status: document.getElementById("statusToggle").checked ? "enable" : "disable",
        featured: document.getElementById("featuredToggle").checked,
        img: uploadedImage || current.img,
    };

    localStorage.setItem("rewardDetails", JSON.stringify(updated));

    let rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];

    rewards = rewards.map(item => {
        if (item.id === updated.id) {
            return { ...item, ...updated };
        }
        return item;
    });

    localStorage.setItem("rewardsData", JSON.stringify(rewards));

    alert("Changes saved successfully!");
    location.reload();
}

function deleteReward() {
    if (!confirm("Are you sure you want to delete this reward?")) return;

    const current = JSON.parse(localStorage.getItem("rewardDetails"));

    if (current) {
        let rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];

        rewards = rewards.filter(item => item.id !== current.id);

        localStorage.setItem("rewardsData", JSON.stringify(rewards));
        localStorage.removeItem("rewardDetails");
    }

    history.back();
}

console.log(data);