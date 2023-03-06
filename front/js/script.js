afficher();

// Récupération des articles de l'API
async function getArticles() {
    var articlesCatch = await fetch("http://localhost:3000/api/products")
    return await articlesCatch.json();
}

// Répartition des données de l'API dans le DOM
async function afficher() {
    var res = await getArticles()
        .then(function(resultatAPI) {
            const articles = resultatAPI;
            console.table(articles);
            for (let el in articles) {

                // Insertion de l'élément "a"
                let productLink = document.createElement("a");
                document.querySelector(".items").appendChild(productLink);
                productLink.href = `product.html?id=${resultatAPI[el]._id}`;

                // Insertion de l'élément "article"
                let productArticle = document.createElement("article");
                productLink.appendChild(productArticle);

                // Insertion de l'image
                let imag = document.createElement("img");
                productArticle.appendChild(imag);
                imag.src = resultatAPI[el].imageUrl;
                imag.alt = resultatAPI[el].altTxt;

                // Insertion du titre "h3"
                let name = document.createElement("h3");
                productArticle.appendChild(name);
                name.classList.add("productName");
                name.innerHTML = resultatAPI[el].name;

                // Insertion de la description "p"
                let description = document.createElement("p");
                productArticle.appendChild(description);
                description.classList.add("productName");
                description.innerHTML = resultatAPI[el].description;
            }
        })
        .catch(function(error) {
            return error;
        });
}