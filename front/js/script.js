fillSection();

<<<<<<< HEAD
// Récupération des articles de l'API
async function getArticles() {
    var articlesCatch = await fetch("http://localhost:3000/api/products")
    return await articlesCatch.json();
=======

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
>>>>>>> 30e547b7b011598656287d1d682b10a3b6fa9913
}

    // Répartition des données de l'API dans le DOM
async function fillSection() {
    var result = await getArticles ()
    .then(function (resultatAPI){
        const articles = resultatAPI;
        console.table(articles);
        for (let article in articles) {

            // Insertion de l'élément "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${resultatAPI[article]._id}`;

            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // Insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = resultatAPI[article].imageUrl;
            productImg.alt = resultatAPI[article].altTxt;

            // Insertion du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultatAPI[article].name;

            // Insertion de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = resultatAPI[article].description;
        }
    })
    .catch (function(error){
        return error;
    });
}