// مقداردهی اولیه کتابخانه EmailJS با آی‌دی کاربری شما
emailjs.init("user_KxAndvB4vO78J5CoD");

// انتخاب فرم تماس
const contactForm = document.getElementById("contact-form");

// افزودن رویداد "submit" به فرم تماس
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // ارسال اطلاعات فرم از طریق EmailJS
  emailjs.sendForm("service_o1k300r", "template_8whssa8", this)
    .then(() => {
      alert("پیام شما با موفقیت ارسال شد!");
      contactForm.reset(); // پاک‌کردن فیلدهای فرم پس از ارسال موفق
    })
    .catch((error) => {
      console.error("خطایی رخ داده است:", error);
      alert("متاسفانه ارسال پیام ناموفق بود. لطفا دوباره تلاش کنید.");
    });
});