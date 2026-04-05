let uploadedImage = null;

const previewImg = document.getElementById("previewImg");
const dropContent = document.getElementById("dropContent");
const dropZone = document.getElementById("dropZone");
const imageUpload = document.getElementById("imageUpload");
const statusToggle = document.getElementById("statusToggle");
const featuredToggle = document.getElementById("featuredToggle");

const successModal = document.getElementById("successModal");
const disableModal = document.getElementById("disableModal");
const enableModal = document.getElementById("enableModal");
const successMessage = document.getElementById("successMessage");

const data = JSON.parse(localStorage.getItem("rewardDetails"));

if (data) {
    document.getElementById("rewardNameLeft").value = data.name || "";
    document.getElementById("rewardNameRight").value = data.name || "";
    document.getElementById("rewardDesc").value = data.description || "";
    document.getElementById("rewardAmount").value = data.amount || "";

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

if (statusToggle) {
    statusToggle.addEventListener("change", function () {
        if (this.checked) {
            this.checked = false; 
            updateToggleColor(this);
            enableModal?.classList.remove("hidden");
        } else {
            this.checked = true;
            updateToggleColor(this);
            disableModal?.classList.remove("hidden");
        }
    });
}

document.getElementById("confirmEnable")?.addEventListener("click", () => {
    enableModal.classList.add("hidden");
    statusToggle.checked = true;
    updateToggleColor(statusToggle);
    saveStatus("enable");

    successMessage.innerHTML = "Rewards has been enabled <br> successfully";
    successModal.classList.remove("hidden");
});

document.getElementById("cancelEnable")?.addEventListener("click", () => {
    enableModal.classList.add("hidden");
});

document.getElementById("closeEnableModal")?.addEventListener("click", () => {
    enableModal.classList.add("hidden");
});

document.getElementById("confirmDisable")?.addEventListener("click", () => {
    disableModal.classList.add("hidden");
    statusToggle.checked = false;
    updateToggleColor(statusToggle);
    saveStatus("disable");

    successMessage.innerHTML = "Rewards has been disabled <br> successfully";
    successModal.classList.remove("hidden");
});

document.getElementById("cancelDisable")?.addEventListener("click", () => {
    disableModal.classList.add("hidden");
});

document.getElementById("closeDisableModal")?.addEventListener("click", () => {
    disableModal.classList.add("hidden");
});

function saveStatus(statusValue) {
    const current = JSON.parse(localStorage.getItem("rewardDetails")) || {};
    current.status = statusValue;
    localStorage.setItem("rewardDetails", JSON.stringify(current));

    let rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];
    rewards = rewards.map(item => item.id === current.id ? { ...item, status: statusValue } : item);
    localStorage.setItem("rewardsData", JSON.stringify(rewards));
}

function saveChanges() {
    const current = JSON.parse(localStorage.getItem("rewardDetails")) || {};

    const updated = {
        ...current,
        name: document.getElementById("rewardNameLeft").value,
        description: document.getElementById("rewardDesc").value,
        amount: document.getElementById("rewardAmount").value,
        status: statusToggle.checked ? "enable" : "disable",
        featured: featuredToggle.checked,
        img: uploadedImage || current.img,
    };

    localStorage.setItem("rewardDetails", JSON.stringify(updated));

    let rewards = JSON.parse(localStorage.getItem("rewardsData")) || [];
    rewards = rewards.map(item => item.id === updated.id ? { ...item, ...updated } : item);
    localStorage.setItem("rewardsData", JSON.stringify(rewards));

    successMessage.innerHTML = "Reward has been updated <br> successfully";
    successModal.classList.remove("hidden");

    setTimeout(() => {
        successModal.classList.add("hidden");
        window.location.href = "reward-details.html";
    }, 1500);
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

imageUpload?.addEventListener("change", function () {
    const file = this.files[0];
    if (file) showPreview(file);
});

function showPreview(file) {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImage = e.target.result;
        previewImg.src = uploadedImage;
        previewImg.classList.remove("hidden");
        dropContent.classList.add("hidden");
    };
    reader.readAsDataURL(file);
}

document.getElementById("closeModal")?.addEventListener("click", () => {
    successModal.classList.add("hidden");
});

featuredToggle?.addEventListener("change", function () {
    updateToggleColor(this);
});