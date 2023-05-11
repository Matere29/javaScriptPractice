const product = [
{
    id: 1,
    image:'images/smartWatch.jpg',
    title: 'Headphones',
    price: '$20',
},
{
    id: 2,
    image:'images/phone.jpg',
    title: 'Microphone',
    price: '$45',
},
{
    id: 3,
    image:'images/smartWatch.jpg',
    title: 'Smart Watch',
    price: '$30',
},
{
    id: 4,
    image:'images/phone.jpg',
    title: 'Laptop',
    price: '$70',
},
{
    id: 5,
    image:'images/smartWatch.jpg',
    title: 'Camera',
    price: '$60',
},
{
    id: 6,
    image:'images/smartWatch.jpg',
    title: 'Headphones',
    price: '$20',
},
{
    id: 7,
    image:'images/smartWatch.jpg',
    title: 'Metal Dask lamp',
    price: '$20',
},
{
    id: 8,
    image:'images/smartWatch.jpg',
    title: 'Air Pods Pro',
    price: '$20',
}
]
const categories = [...new Set(product.map((item)=>
    {return item}))]

    let cart = document.getElementById('root')
    cart.innerHTML = categories.map((item)=>
    {
        var{ image, title, price} = item;
        return(
            `<div class="box">
                <div class="img-box">
                  <img src=${image}></img>  
                </div>
                <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to cart</button>
            </div>
            </div>`
        )
    }).join('')