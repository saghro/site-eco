async function Ajouter() {
    const ctn = document.querySelector('#items')


    fetch("http://localhost:3000/api/products")
        .then(response => {
            return response.json()
        })
        .then(data => {

            }
            Ajouter()