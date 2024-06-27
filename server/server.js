const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('ProductData.json');
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares)

// Custom route to get all categories
server.get('products/categories', (req, res) => {
    const db = router.db; //lowdb instance
    const products = db.get('products').value();

    //Exract unique categories from products
    const categories = [...new Set(products.map(product =>
        product.categories
    ))];
    res.json(categories);
});

server.use(router);

server.listen(port, () => {
    console.log(`JSON server is running on http://localhost:${port}`)
});