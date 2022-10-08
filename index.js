document.addEventListener("DOMContentLoaded", () => {
   const ageGate = document.querySelector(".age-gate");
   const dayInput = document.querySelector("#day");
   const monthInput = document.querySelector("#month");
   const yearInput = document.querySelector("#year");
   const locationInput = document.querySelector("#location");

   const birthDate = localStorage.getItem("birthdate") ?? false;
   const province = localStorage.getItem("province") ?? false;

   if (!birthDate && !province) {
    ageGate.style.display = "flex";
   };

   Webflow.push(function() {
    $('form').submit(function() {
        if (dayInput.value && monthInput.value && yearInput.value) {
            localStorage.setItem("birthdate", `${dayInput.value}/${monthInput.value}/${yearInput.value}`);
        };

        if (location) {
            localStorage.setItem("province", locationInput.value);
        };

        ageGate.style.display = "none";
    });
   });
});