document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  // القيم المدخلة
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // بيانات المستخدم الصحيحة (يمكن تغييرها)
  const correctEmail = "karimsalam@gmail.com";
  const correctPassword = "12345";

  // التحقق من الإيميل والباسوورد
  if (email === correctEmail && password === correctPassword) {
      // توجيه المستخدم إلى صفحة الـ Dashboard
      window.location.href = "karim.html";
  } else {
      document.getElementById("message").textContent = "الإيميل أو كلمة المرور غير صحيحة!";
      document.getElementById("message").style.color = "red";
  }
});