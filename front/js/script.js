async function get() {
    const ctn = document.querySelector('#items')


    fetch("http://localhost:3000/api/products")
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.forEach(el => {
                const prt =
                    `<a href="./product.html?_id=${el._id}">
                     
                     <p class="productDescription">${el.description}</p>
                     <p class="productName">${el.name}</p>
                     </a>`
                ctn.insertAdjacentHTML("beforeend", prt)
            })
        })
}
get()