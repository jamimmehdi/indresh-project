
// Send brochure in email
document.getElementById('borchure') &&
    document.getElementById('borchure')
        .addEventListener('submit', (event) => {
            event.preventDefault();

            if (event.target.email.value) {
                alert(`Brochure sent to email ${event.target.email.value}`);
                event.target.email.value = '';
            } else alert('Please enter an email to get Brochure.')
        });

// Contact us form
document.getElementById('contact-us') &&
    document.getElementById('contact-us')
        .addEventListener('submit', (event) => {
            event.preventDefault();

            const name = event.target.name.value;
            const email = event.target.email.value;
            const text = event.target.text.value;

            if (name !== '' && email !== '' && text !== '') {
                alert('Thank you for contacting us. We will get back to you soon.');
                event.target.name.value = '';
                event.target.email.value = '';
                event.target.text.value = '';
            } else alert('Please fill in all details to submit the form.')
        });

// apply now form
document.getElementById('apply-now') &&
    document.getElementById('apply-now')
        .addEventListener('submit', (event) => {
            event.preventDefault();

            const name = event.target.name.value;
            const email = event.target.email.value;
            const address = event.target.address.value;
            const phone = event.target.phone.value;
            const course = event.target.course.value;

            if (
                name !== '' &&
                email !== '' &&
                address !== '' &&
                phone !== '' &
                course !== ''
            ) {
                alert('Thank you for applying with us. We will get back to you soon.');
                event.target.name.value = '';
                event.target.email.value = '';
                event.target.address.value = '';
                event.target.phone.value = '';
                event.target.course.value = '';
            } else alert('Please fill in all details to submit the form.')
        })
