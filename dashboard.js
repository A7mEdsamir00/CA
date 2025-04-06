// بيانات وهمية لأماكن الحرائق
const fireLocations = [
    { name: "العاشر من رمضان-الاردنيه", link: "ashar-ramadan.html" },
    { name: "القاهرة - حي المعادي", link: "location2.html" },
    { name: "الإسكندرية - منطقة سيدي جابر", link: "location3.html" },
    { name: "الجيزة - الدقي", link: "location4.html" },
    { name: "الفيوم - مركز المدينة", link: "location5.html" },
    { name: "الأقصر - منطقة الكرنك", link: "location6.html" },
];


const fireLocationsContainer = document.getElementById("fireLocations");

// عرض أماكن الحرائق كنصوص قابلة للنقر
fireLocations.forEach(location => {
    const locationElement = document.createElement("div");
    locationElement.textContent = location.name;
    locationElement.classList.add("fire-location"); // إضافة كلاس للتنسيق

    // جعل النص قابل للنقر
    locationElement.addEventListener("click", function () {
        window.location.href = location.link;
    });

    // إضافة العنصر إلى الـ container
    fireLocationsContainer.appendChild(locationElement);
});

// تسجيل الخروج
document.getElementById("logoutButton").addEventListener("click", function () {
    window.location.href = "ahmed.html";
});