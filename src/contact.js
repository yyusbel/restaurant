function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 0801 234 5678'
  
    const address = document.createElement('p')
    address.textContent = '🏠 11 Ladoke Akintola Boulevard, Garki, Abuja, Nigeria'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    
    return contact
  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact