const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progressBar');
const strengthText = document.getElementById('strengthText');
const lengthReq = document.getElementById('lengthReq');
const lowerReq = document.getElementById('lowerReq');
const upperReq = document.getElementById('upperReq');

passwordInput.addEventListener('input', function () {
    const val = passwordInput.value;
    let score = 0;

    // حساب عدد الأرقام والحروف تلقائياً
    const numbersCount = (val.match(/[0-9]/g) || []).length;
    const lowerCount = (val.match(/[a-z]/g) || []).length;
    const upperCount = (val.match(/[A-Z]/g) || []).length;

    const hasValidNumbers = numbersCount >= 8;
    const hasValidLower = lowerCount >= 6;
    const hasValidUpper = upperCount >= 6;

    // 1. الشرط الأول: 8 أرقام على الأقل -> 20% (أحمر)
    if (hasValidNumbers) {
        score = 20;
        lengthReq.innerHTML = '✅ At least 8 numbers (20%)';
        lengthReq.className = 'flex items-center gap-2 text-rose-500 font-medium';
    } else {
        lengthReq.innerHTML = '❌ At least 8 numbers (20%)';
        lengthReq.className = 'flex items-center gap-2 text-slate-400';
    }

    // 2. الشرط الثاني: 6 أحرف صغيرة على الأقل -> 40% (أصفر)
    if (hasValidLower) {
        score = 40;
        lowerReq.innerHTML = '✅ At least 6 lowercase letters (40%)';
        lowerReq.className = 'flex items-center gap-2 text-amber-400 font-medium';
    } else {
        lowerReq.innerHTML = '❌ At least 6 lowercase letters (40%)';
        lowerReq.className = 'flex items-center gap-2 text-slate-400';
    }

    // 3. الشرط الثالث: 6 أحرف كبيرة على الأقل -> 100% (أخضر)
    if (hasValidUpper) {
        score = 100;
        upperReq.innerHTML = '✅ At least 6 uppercase letters (100%)';
        upperReq.className = 'flex items-center gap-2 text-emerald-400 font-medium';
    } else {
        upperReq.innerHTML = '❌ At least 6 uppercase letters (100%)';
        upperReq.className = 'flex items-center gap-2 text-slate-400';
    }

    // تحديث شريط التقدم والنسبة
    progressBar.style.width = score + '%';
    strengthText.textContent = `Strength: ${score}%`;

    // تغيير الألوان تلقائياً
    if (score === 20) {
        progressBar.className = 'h-full bg-rose-500 transition-all duration-300';
    } else if (score === 40) {
        progressBar.className = 'h-full bg-amber-400 transition-all duration-300';
    } else if (score === 100) {
        progressBar.className = 'h-full bg-emerald-500 transition-all duration-300';
    } else {
        progressBar.className = 'h-full w-0 transition-all duration-300';
    }
});