
/* =====================================
   HOSTNEXT - JAVASCRIPT
===================================== */

// MONTHLY / YEARLY PRICING

const billingButtons = document.querySelectorAll(".billing-btn");

const prices = document.querySelectorAll(
  ".price strong[data-monthly]"
);

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {

    const billing = button.dataset.billing;

    // Update active button
    billingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Update all plan prices
    prices.forEach((price) => {

      const newPrice = price.dataset[billing];

      price.textContent = "$" + newPrice;

    });

  });
});


// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close menu after clicking a link

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("show");

      menuToggle.textContent = "☰";

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}


// ACTIVE NAVIGATION

const navigationLinks = document.querySelectorAll(
  ".nav-links a"
);

navigationLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navigationLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});


// FOOTER YEAR

const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.textContent =
    `© ${new Date().getFullYear()} HostNext. All rights reserved.`;
}


// HOSTNEXT INITIALIZED

console.log("HostNext website initialized successfully! 🚀");
