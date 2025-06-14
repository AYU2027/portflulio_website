function toggleMenu() {
    const menu = document.getElementById('mobileMenu')
    if (menu.classList.contains('max-h-0')) {
        menu.classList.remove('max-h-0','opacity-0')
        menu.classList.add('max-h-96','opacity-100')
        
    }else{
        menu.classList.remove('max-h-96','opacity-100')
        menu.classList.add('max-h-0','opacity-0')
    }
    
}

function sendmessage(event){
    event.preventDefault()

    const firstName = document.getElementById('first-name').value.trim()
    const lastName = document.getElementById('last-name').value.trim()
    const email = document.getElementById('email').value.trim()
    const purpose = document.getElementById('purpose-to-visit').value.trim()
    const message = document.getElementById('your-message').value.trim() // ✅ FIXED

    const whatsappMessage = `Hello,\n\nMy name is ${firstName} ${lastName}.\n\nI would like to connect regarding: ${purpose}.\n\nConnect Email: ${email}\n\nMessage: ${message}`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    // ✅ Make sure this number is in correct format
    window.open(`https://wa.me/919797457486?text=${encodedMessage}`)
}
