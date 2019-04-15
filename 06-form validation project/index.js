
const name = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone')

name.addEventListener('blur', valName);
zip.addEventListener('blur', valZip);
email.addEventListener('blur', valEmail);
phone.addEventListener('blur', valPhone);

function valName() {
  const re = /^[a-zA-Z]{2,20}$/;
  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function valZip() {
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function valEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function valPhone() {
  const re = /^[0-9\-\+]{9,15}$/;
  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
