fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(products=>{
              let productsListEl = document.getElementById("product-list")
              let productsList = ``       
 for (let product of products){
     productsList += `<div class="col-3">
                 <div class="card">
                    <img src="${product.Image}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                       <a href="#" class="btn btn-primary">View Products</a>
                   </div>
               </div>
             </div>`
            }
         
            productsListEl.innerHTML = productsList
            })
         
                