const scriptURL = 'https://script.google.com/macros/s/AKfycbzonviMNfafouJC_tQMCox_RSRDjkrJ0h4cRda1M4sd7PR-x5sLw1XMmMgTA4rCWk-n/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Form is submitted"))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
