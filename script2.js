// const passwordInput = document.getElementById("password");
// const progressBar = document.getElementById("progressBar");
// const strengthText = document.getElementById("strengthText");

// const lengthReq = document.getElementById("lengthReq");
// const lowerReq = document.getElementById("lowerReq");
// const upperReq = document.getElementById("upperReq");


// passwordInput.addEventListener("input", function () {

//     const value = passwordInput.value;

//     const numbersCount = (value.match(/[0-9]/g) || []).length;
//     const lowerCount = (value.match(/[a-z]/g) || []).length;
//     const upperCount = (value.match(/[A-Z]/g) || []).length;




//     if (numbersCount >= 8) {

//         lengthReq.innerHTML = "✅ At least 8 numbers (20%)";
//         lengthReq.className = "mb-2 text-rose-500 font-medium";

//     } else {

//         lengthReq.innerHTML = "❌ At least 8 numbers (20%)";
//         lengthReq.className = "mb-2 text-slate-400";

//     }

//     if (lowerCount >= 6) {

//         lowerReq.innerHTML = "✅ At least 6 lowercase letters (40%)";
//         lowerReq.className = "mb-2 text-amber-400 font-medium";

//     } else {

//         lowerReq.innerHTML = "❌ At least 6 lowercase letters (40%)";
//         lowerReq.className = "mb-2 text-slate-400";

//     }




//     if (upperCount >= 6) {

//         upperReq.innerHTML = "✅ At least 6 uppercase letters (100%)";
//         upperReq.className = "mb-2 text-emerald-400 font-medium";

//     } else {

//         upperReq.innerHTML = "❌ At least 6 uppercase letters (100%)";
//         upperReq.className = "mb-2 text-slate-400";

//     }



//     let score = 0;

//     if (numbersCount >= 8) {
//         score = 20;
//     }

//     if (lowerCount >= 6) {
//         score = 40;
//     }

//     if (upperCount >= 6) {
//         score = 100;
//     }




//     strengthText.textContent = "Strength: " + score + "%";


//     progressBar.style.width = score + "%";


//     if (score === 20) {

//         progressBar.className =
//             "h-full bg-rose-500 transition-all duration-300";

//         strengthText.className =
//             "text-rose-400 font-medium";

//     }

//     else if (score === 40) {

//         progressBar.className =
//             "h-full bg-amber-400 transition-all duration-300";

//         strengthText.className =
//             "text-amber-400 font-medium";

//     }

//     else if (score === 100) {

//         progressBar.className =
//             "h-full bg-emerald-500 transition-all duration-300";

//         strengthText.className =
//             "text-emerald-400 font-medium";

//     }

//     else {

//         progressBar.className =
//             "h-full transition-all duration-300";

//         strengthText.className =
//             "text-slate-400 font-medium";

//     }

// });




const passwordInput = document.getElementById("password");
const progressBar = document.getElementById("progressBar");
const strengthText = document.getElementById("strengthText");
const submitBtn = document.getElementById("submitBtn");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

const lengthReq = document.getElementById("lengthReq");
const lowerReq = document.getElementById("lowerReq");
const upperReq = document.getElementById("upperReq");

// ميزة إظهار وإخفاء كلمة المرور عبر أيقونة العين
togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        // أيقونة عين مشطوبة (إخفاء)
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        `;
    } else {
        passwordInput.type = "password";
        // أيقونة عين عادية مفتوحة (إظهار)
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        `;
    }
});

// فحص قوة كلمة المرور والشروط عند الكتابة
passwordInput.addEventListener("input", function () {

    const value = passwordInput.value;

    const numbersCount = (value.match(/[0-9]/g) || []).length;
    const lowerCount = (value.match(/[a-z]/g) || []).length;
    const upperCount = (value.match(/[A-Z]/g) || []).length;

    let score = 0;

    // -------------------------
    // Numbers = 20%
    // -------------------------
    if (numbersCount >= 8) {
        lengthReq.innerHTML = "✅ At least 8 numbers (20%)";
        lengthReq.className = "mb-2 text-emerald-400 font-medium";
        score += 20;
    } else {
        lengthReq.innerHTML = "❌ At least 8 numbers (20%)";
        lengthReq.className = "mb-2 text-slate-400";
    }

    // -------------------------
    // Lowercase = 40% (تراكمي)
    // -------------------------
    if (lowerCount >= 6) {
        lowerReq.innerHTML = "✅ At least 6 lowercase letters (40%)";
        lowerReq.className = "mb-2 text-emerald-400 font-medium";
        score += 40;
    } else {
        lowerReq.innerHTML = "❌ At least 6 lowercase letters (40%)";
        lowerReq.className = "mb-2 text-slate-400";
    }

    // -------------------------
    // Uppercase = 40% (لتكتمل النسبة 100%)
    // -------------------------
    if (upperCount >= 6) {
        upperReq.innerHTML = "✅ At least 6 uppercase letters (40%)";
        upperReq.className = "mb-2 text-emerald-400 font-medium";
        score += 40;
    } else {
        upperReq.innerHTML = "❌ At least 6 uppercase letters (40%)";
        upperReq.className = "mb-2 text-slate-400";
    }

    // التأكد من عدم تجاوز السكور 100%
    if (score > 100) score = 100;

    // -------------------------
    // Show Percentage & Progress Bar
    // -------------------------
    strengthText.textContent = "Strength: " + score + "%";
    progressBar.style.width = score + "%";

    // الألوان حسب النسبة المئوية
    if (score <= 20) {
        progressBar.className = "h-full bg-rose-500 transition-all duration-300";
        strengthText.className = "text-rose-400 font-medium";
    } else if (score < 100) {
        progressBar.className = "h-full bg-amber-400 transition-all duration-300";
        strengthText.className = "text-amber-400 font-medium";
    } else {
        progressBar.className = "h-full bg-emerald-500 transition-all duration-300";
        strengthText.className = "text-emerald-400 font-medium";
    }

    // -------------------------
    // Submit Button Control
    // -------------------------
    if (score === 100) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "true");
    }

});

// التعامل مع الضغط على زر الإرسال
document.getElementById("passwordForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("تم إرسال كلمة المرور بنجاح واستوفت كافة الشروط!");
});