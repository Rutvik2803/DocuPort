let submenu = document.getElementById('submenu');
function toggleMenu(){
    submenu.classList.toggle('open')
}

const share = document.querySelector('.Share');
share.addEventListener('click', (element) => {
    if (navigator.share) {
        navigator.share(
            {
                title: 'Google',
                url: 'https://www.google.com/',
            }).then(() => {
                console.log('Thank you for sharing.');
            }).catch((err) => {
                console.log('Error occuring while using browser');
            })
    }
    else {
        alert('Browser does not support this Webshare API.');
    }
})
