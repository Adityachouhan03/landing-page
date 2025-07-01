// Handle Contact Form Submission
const contactForm = document.querySelector(".contact form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const contact = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      city: document.getElementById("city").value,
    };

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Contact submitted successfully!");
    contactForm.reset();
  });
}

// Handle Newsletter Subscription
const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("input").value;
    let subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
    subscriptions.push(email);
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));

    alert("Subscribed successfully!");
    newsletterForm.reset();
  });
}
