let products = []
const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data.products);
    products = data.products;
    // products.map((product) => console.log(product));


    const priceGreaterThanTwelve = products.filter((product) => product.price > 12.0);
    console.log(priceGreaterThanTwelve);
}
getProducts();



// fetch("https://dummyjson.com/products")
// .then((res) => res.json())
// .then((data) => console.log(data.products))
// .catch((error) => console.log(error));
