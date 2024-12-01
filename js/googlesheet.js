const scriptURL = 'https://script.google.com/macros/s/AKfycbzbectgcL_laQs0vTC342JfTK_6g1my8iY3eTcoig2S3wvdlSdZD45kOm5UYkbRcrVD/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.prevenDefault()
    fetch(scriptURL, { method: 'Post', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted succesfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})  