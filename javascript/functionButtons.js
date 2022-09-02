var buttonCopy = document.getElementById('copyLinkMeeting')
var linkMeeting = document.getElementById('linkResult')

buttonCopy.addEventListener('click', copyLink)

function copyLink() {
    linkMeeting.select();
    document.execCommand("Copy");

    buttonCopy.textContent = 'Link Copiado'
}