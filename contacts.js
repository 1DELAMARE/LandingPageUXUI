// Função para salvar os dados no localStorage
function saveContact(name, phone, email) {
    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const newContact = { name, phone, email };
    existingContacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(existingContacts));
}

// Função para exibir a lista de contatos
function displayContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = `${contact.name} - ${contact.phone} - ${contact.email}`;
        contactList.appendChild(listItem);
    });
}

// Event listener para o formulário de contatos
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Salvar os dados no localStorage
    saveContact(name, phone, email);

    // Limpar o formulário
    contactForm.reset();

    // Atualizar a lista de contatos exibida na página
    displayContacts();
});

// Exibir a lista de contatos ao carregar a página
displayContacts();