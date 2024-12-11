document.addEventListener("DOMContentLoaded", function () {
  fetch("/navbar/index.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/footer/index.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/modals/index.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modal-placeholder").innerHTML = data;
    });
});

function sendMail() {
  var templateParams = {
    from_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    subject: document.getElementById("betreff").value,
    message: document.getElementById("nachricht").value,
  };

  emailjs.send("service_ztnwk2m", "template_e49jjoo", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}

function sendRegistration() {
  var templateParams = {
    vorname: document.getElementById("vorname").value,
    nachname: document.getElementById("nachname").value,
    adresse: document.getElementById("adresse").value,
    plz: document.getElementById("plz").value,
    ort: document.getElementById("ort").value,
    geburtstag: document.getElementById("geburtstag").value,
    telefonnummer: document.getElementById("telefonnummer").value,
    email: document.getElementById("email").value,
    vorname_erziehungsberechtigter:
      document.getElementById("vorname-erziehungsberechtigter")?.value ??
      "Nicht vorhanden, da die Anmeldung von einer Person über 18 Jahren stammt.",
    nachname_erziehungsberechtigter:
      document.getElementById("nachname-erziehungsberechtigter")?.value ??
      "Nicht vorhanden, da die Anmeldung von einer Person über 18 Jahren stammt.",
    adresse_erziehungsberechtigter:
      document.getElementById("adresse-erziehungsberechtigter")?.value ??
      "Nicht vorhanden, da die Anmeldung von einer Person über 18 Jahren stammt.",
    plz_ort:
      document.getElementById("plz-ort")?.value ??
      "Nicht vorhanden, da die Anmeldung von einer Person über 18 Jahren stammt.",
    telefonnummer_erziehungsberechtigter:
      document.getElementById("telefonnummer-erziehungsberechtigter")?.value ??
      "Nicht vorhanden, da die Anmeldung von einer Person über 18 Jahren stammt.",
    email_erziehungsberechtigten:
      document.getElementById("email-erziehungsberechtigten")?.value ??
      "Nicht vorhanden, da die Anmeldung von einer Person über 18 Jahren stammt.",
  };

  emailjs.send("service_ztnwk2m", "template_8tbz2a8", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}

var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(
    document.getElementById("punschstandModal")
  );
  myModal.show();
});
