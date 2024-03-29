
//function for contact form validation
function check() {
  var form = document.forms['Message']; // Replace 'yourFormId' with the ID of your form
  var fname = form.elements['name'].value.trim();
  var emailId = form.elements['email'].value.trim();
  var message = form.elements['mess'].value.trim();
  var regExpName = /^[a-zA-Z]{2,}$/;
  var regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regExpName.test(fname)) {
    alert("Enter a valid name!");
    return false;
  } else if (!regExpEmail.test(emailId)) {
    alert('Enter a valid email address!');
    return false;
  } else if (message.length === 0) {
    alert("Message cannot be empty!");
    return false;
  }
  return true;
}
