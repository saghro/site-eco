var url = new URLSearchParams(document.location.search);
async function afficher() { //lien entre un produit de la page d’ accueil et la page Produit

    // Récupérer l’id
    var id = url.get("_id");

    let title = document.querySelector('#title')
    let description = document.querySelector('#description')
    let price = document.querySelector('#price')
    let item__img = document.querySelector('.item__img')
    let colors = document.querySelector('#colors')

    fetch("http://localhost:3000/api/products")
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.forEach(el => {
                if (el._id == id) {
                    let img = document.createElement('img')
                    img.setAttribute('src', el.imageUrl)
                    title.innerHTML = (el.name)
                    price.innerHTML = (el.price)
                    description.innerHTML = (el.description)
                    item__img.appendChild(img)

                    for (i = 0; i < el.colors.length; i++) {
                        let OptionColor = document.createElement('option')
                        OptionColor.setAttribute('value', el.colors[i])
                        OptionColor.innerHTML = el.colors[i]
                        colors.appendChild(OptionColor)
                    }
                }

            })
        })

}

afficher();

document.getElementById("addToCart").addEventListener("click", myFunction);

function myFunction() {
    let MyID = url.get("_id");
    let MyQte = document.querySelector('#quantity').value;
    let MyColor = document.querySelector('#colors').value;
    let MyPrice = document.querySelector('#price').textContent;

    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }

    let productExists = false;
    products.forEach(product => {
        if (product.id === MyID && product.Color === MyColor) {
            productExists = true;
        }
    });

    if (MyQte == 0 || MyColor == "") {
        alert("Veuillez choisir une quantité et une couleur");
    } else if (productExists) {
        alert("Ce produit a déjà été ajouté.");
    } else {
        products.push({
            'id': MyID,
            'Qte': MyQte,
            'Color': MyColor,
            'Price': MyPrice
        });
        localStorage.setItem('products', JSON.stringify(products));

    }

}