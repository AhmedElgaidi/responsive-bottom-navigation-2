const list = document.querySelectorAll('.list');


// Add event listener to each item
list.forEach(item => item.addEventListener('click', activeLink));

function activeLink() {
    list.forEach(item => {// loop through all list and remov any active class
        item.classList.remove('active')}
    );
    // add active class to the clicked item.
    this.classList.add('active');
}