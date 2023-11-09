const stock  = {

    totalCost: 0,
    items: [],

    addItem(name, price, quantity) {
       
        const newItem = { name, price, quantity };
       
        this.items.push(newItem);
        this.updateTotalCost();
    },

    removeItem(index) {
        
        if(index >= 0 && index < this.items.length) {
            
            this.items.splice(index, 1);
            this.updateTotalCost();
        }
   },

   updateTotalCost() {

    let cost = 0;

    for(const item of this.items) {

        cost += item.price * item.quantity;
    }
    this.totalCost = cost;

   },
};

console.log("Total price:", stock.totalCost);
console.log("Total items in stock:", stock.items);

stock.addItem('Jeans', 20, 100);
stock.addItem('Trench', 800, 50);
stock.addItem('T-Shirt', 10, 200);
stock.addItem('Jacket', 120, 70);
stock.addItem('Pullover', 50, 80);

console.log("Total price:", stock.totalCost);
console.log("Total items in stock:", stock.items);


stock.removeItem(2);

console.log("Total price:", stock.totalCost);
console.log("Total items in stock:", stock.items);