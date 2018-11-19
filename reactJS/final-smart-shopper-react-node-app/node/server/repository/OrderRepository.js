

var connection = require('./Conneciton');
const uuidv1 = require('uuid/v1');

var con = connection.getConnection();

function OrderRepository() {
    let repo = {};

    repo.placeOrder = function (userId, lineItems, orderCost) {


        var today = new Date(new Date().toUTCString());
        let orderStatus = 'not_placed'
        return new Promise((resolve, reject) => {


            con.beginTransaction(function (err) {
                if (err) throw err;
                var insertToOrder = `
            insert into orders(order_id,user_id,no_of_items,
                order_date) 
            values(?,?,?,?)`
                const orderId = uuidv1();
                con.query(insertToOrder,
                    [orderId, userId, lineItems.length, today], function (err, rows) {
                        if (err) {
                            con.rollback(() => { throw err });
                        }


                        var inserToLineItems = `insert into lineitems(lineItem_id,
                    product_id,order_id,quantity)
                values(?,?,?,?)`
                        console.log(lineItems)
                        for (var i = 0; i < lineItems.length; i++) {
                            var itemId = uuidv1();
                            var itemQty = lineItems[i].quantity;
                            var itemCost = lineItems[i].itemCost;

                            var productId = lineItems[i].product_id;
                            con.query(inserToLineItems, [itemId, productId,
                                orderId, itemQty], function (err, rows) {
                                    if (err) {
                                        con.rollback(() => { throw err });

                                    }
                                    con.commit((err) => {
                                        if (err) {
                                            con.rollback();
                                            throw err;
                                        }

                                        resolve(orderId)
                                    });

                                })
                        }

                    })



            });


        })

    }

    repo.getOrders = function (userid) {
        return new Promise((resolve, reject) => {
            var selectQuery = `
            select order_id,user_id,no_of_items,order_date,order_status,total_cost
 from orders where user_id= ?`

            con.query(selectQuery, [userid], (err, rows) => {
                if (err) {
                    reject(err);
                }
                else
                    resolve(JSON.stringify(rows))

            })



        })

    }

    repo.getOrderHistory = function (userId) {
        return new Promise((resolve, reject) => {
            var selectQuery = `
            select name,price, quantity,order_date,o.order_id
            from products p
            inner join lineitems l
            on p.product_id = l.product_id inner join orders o on 
            l.order_id = o.order_id
            where o.user_id=?`

            con.query(selectQuery, [userId], (err, rows) => {
                if (err) {
                    reject(err);
                }
                else {
                    // resolve(JSON.stringify(rows))
                    var orderList=manipulateRows(rows);
                    resolve(orderList);
                }
            })

        });
    }
    manipulateRows = function (rows) {
        var no=0;
        var count=0;
        var currentOrder=[];
        var orders=[];
        var currentId=rows[0].order_id;
        for(var i=0;i<rows.length;i++){
            if(currentId===rows[i].order_id){
                currentOrder[count++]=rows[i];
            }
            else{
                var singleOrder={'orderId':currentId,'items':currentOrder};
                orders[no++]=singleOrder;
                currentOrder=[];
                count=0;
                currentId=rows[i].order_id;
                currentOrder[count++]=rows[i];
            }
        }
        var singleOrder={'orderId':currentId,'items':currentOrder};
        orders[no++]=singleOrder;
        // orders[no]=c;
        return orders;
    }

    getProducts = function (order_id) {
        var selectQuery = `
            select product_id,quantity from lineitems where order_id= ?`

        con.query(selectQuery, [order_id], (err, rows) => {
            if (err) {
                console.log("Error");//make reject
            }
            else {
                return rows;
            }
        })
    }

    repo.addToCart = function (quantity, product, userId) {
        return new Promise((resolve, reject) => {

            var insertQuery = `
            insert into cart(cart_id,name,price,qty,totalPrice,product_id,user_id,
               date_created,order_placed)  
       values(?,?,?,?,?,?,?,?,?);`

            var cart_id = uuidv1();
            var name = product.name;
            var price = product.price;
            var totalPrice = quantity * price;
            var today = new Date(new Date().toUTCString());
            con.query(insertQuery, [cart_id, name, price, quantity, totalPrice,
                product.id, userId, today, 'N'], (err, rows) => {
                    if (err) {
                        throw err;
                    }

                    resolve(cart_id)
                })


        })


    }

    return repo;

}



module.exports = OrderRepository();







