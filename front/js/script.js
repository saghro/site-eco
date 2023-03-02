async function get() {
    const ctn = document.querySelector('#items')


    fetch("http://localhost:3000/api/products")
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.forEach(el => {

                const prt =
                    `
                   <a href="./product.html?_id=${el._id}">
                <article>
                    <img src = "${el.imageUrl}" alt = "Lorem ipsum dolor sit amet, Kanap name1" >
                    <h3 class = "productName" > ${el.name} </h3> 
                    <p class = "productDescription" > ${el.description} </p> 
                    </article> </a> `
                ctn.insertAdjacentHTML("beforeend", prt)
            })
        })
}
get()