// const passwordInput = document.getElementById('password');
// const progressBar = document.getElementById('progressBar');
// const strengthText = document.getElementById('strengthText');
// const lengthReq = document.getElementById('lengthReq');
// const lowerReq = document.getElementById('lowerReq');
// const upperReq = document.getElementById('upperReq');

// passwordInput.addEventListener('input', function () {
//     const val = passwordInput.value;
//     let score = 0;

//     const numbersCount = (val.match(/[0-9]/g) || []).length;
//     const lowerCount = (val.match(/[a-z]/g) || []).length;
//     const upperCount = (val.match(/[A-Z]/g) || []).length;

//     const hasValidNumbers = numbersCount >= 8;
//     const hasValidLower = lowerCount >= 6;
//     const hasValidUpper = upperCount >= 6;


//     if (hasValidNumbers) {
//         score = 20;
//         lengthReq.innerHTML = '✅ At least 8 numbers (20%)';
//         lengthReq.className = 'flex items-center gap-2 text-rose-500 font-medium';
//     } else {
//         lengthReq.innerHTML = '❌ At least 8 numbers (20%)';
//         lengthReq.className = 'flex items-center gap-2 text-slate-400';
//     }

//     if (hasValidLower) {
//         score = 40;
//         lowerReq.innerHTML = '✅ At least 6 lowercase letters (40%)';
//         lowerReq.className = 'flex items-center gap-2 text-amber-400 font-medium';
//     } else {
//         lowerReq.innerHTML = '❌ At least 6 lowercase letters (40%)';
//         lowerReq.className = 'flex items-center gap-2 text-slate-400';
//     }

//     if (hasValidUpper) {
//         score = 100;
//         upperReq.innerHTML = '✅ At least 6 uppercase letters (100%)';
//         upperReq.className = 'flex items-center gap-2 text-emerald-400 font-medium';
//     } else {
//         upperReq.innerHTML = '❌ At least 6 uppercase letters (100%)';
//         upperReq.className = 'flex items-center gap-2 text-slate-400';
//     }

//     progressBar.style.width = score + '%';
//     strengthText.textContent = `Strength: ${score}%`;

//     if (score === 20) {
//         progressBar.className = 'h-full bg-rose-500 transition-all duration-300';
//     } else if (score === 40) {
//         progressBar.className = 'h-full bg-amber-400 transition-all duration-300';
//     } else if (score === 100) {
//         progressBar.className = 'h-full bg-emerald-500 transition-all duration-300';
//     } else {
//         progressBar.className = 'h-full w-0 transition-all duration-300';
//     }
// });





// 


function checkPassword() {
    const passwordInput = document.getElementById('password');
    const progressBar = document.getElementById('progressBar');
    const strengthText = document.getElementById('strengthText');
    const lengthReq = document.getElementById('lengthReq');
    const lowerReq = document.getElementById('lowerReq');
    const upperReq = document.getElementById('upperReq');

    const val = passwordInput.value;

    // حساب الأعداد والحروف
    const numbersCount = (val.match(/[0-9]/g) || []).length;
    const lowerCount = (val.match(/[a-z]/g) || []).length;
    const upperCount = (val.match(/[A-Z]/g) || []).length;

    const hasValidNumbers = numbersCount >= 8;
    const hasValidLower = lowerCount >= 6;
    const hasValidUpper = upperCount >= 6;

    let score = 0;
    let bgColor = 'transparent';

    // 1. فحص الشرط الأول (الأرقام) وتحديث نص الشرط
    if (hasValidNumbers) {
        lengthReq.innerHTML = '✅ At least 8 numbers (20%)';
        lengthReq.style.color = '#f43f5e';
    } else {
        lengthReq.innerHTML = '❌ At least 8 numbers (20%)';
        lengthReq.style.color = '#94a3b8';
    }

    // 2. فحص الشرط الثاني (الحروف الصغيرة) وتحديث نص الشرط
    if (hasValidLower) {
        lowerReq.innerHTML = '✅ At least 6 lowercase letters (40%)';
        lowerReq.style.color = '#fbbf24';
    } else {
        lowerReq.innerHTML = '❌ At least 6 lowercase letters (40%)';
        lowerReq.style.color = '#94a3b8';
    }

    // 3. فحص الشرط الثالث (الحروف الكبيرة) وتحديث نص الشرط
    if (hasValidUpper) {
        upperReq.innerHTML = '✅ At least 6 uppercase letters (100%)';
        upperReq.style.color = '#10b981';
    } else {
        upperReq.innerHTML = '❌ At least 6 uppercase letters (100%)';
        upperReq.style.color = '#94a3b8';
    }

    // تحديد النسبة واللون النهائي حسب الترتيب الصحيح
    if (hasValidUpper) {
        score = 100;
        bgColor = '#10b981'; // أخضر
    } else if (hasValidLower) {
        score = 40;
        bgColor = '#fbbf24'; // أصفر
    } else if (hasValidNumbers) {
        score = 20;
        bgColor = '#f43f5e'; // أحمر
    }

    if (val === '') {
        score = 0;
        bgColor = 'transparent';
    }

    // تطبيق النسبة واللون على الشريط
    progressBar.style.width = score + '%';
    progressBar.style.backgroundColor = bgColor;
    strengthText.textContent = `Strength: ${score}%`;
}