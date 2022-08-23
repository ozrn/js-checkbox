const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down
  // and check that they are being checked

  let inBetween = false; // we set a flag variable

  if (e.shiftKey && this.checked) {
    //loop over every single CheckBox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // once we hit the first one, it's gonna be true.
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })

  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
