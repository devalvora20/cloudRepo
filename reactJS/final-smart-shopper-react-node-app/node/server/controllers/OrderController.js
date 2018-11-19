/* 1. route parameter : https://medium.com/@tkssharma/swagger-with-existing-node-app-for-api-definition-9e0bd9fdd2af
 2.official : https://swagger.io/docs/specification/describing-parameters/

 */

/**
 * @swagger
 *
 * definitions:
 *   OrderDTO:
 *     type: object
 *     required:
 *       - order_id
 *       - user_id
 *       - no_of_items
 *       - order_date
 *       - order_status
 *       - cost
 *     properties:
 *       order_id:
 *         type: string
 *       user_id:
 *         type: string
 *       no_of_items:
 *         type: string
 *       order_date:
 *         type: string
 *       order_status:
 *         type: string
 *       cost:
 *         type: string
 */

 /**
 * @swagger
 *
 * definitions:
 *   LineItems:
 *     type: object
 *     required:
 *       - quantity
 *       - itemCost
 *       - product_id
 *     properties:
 *       quantity:
 *         type: integer
 *       itemCost:
 *         type: integer
 *       product_id:
 *         type: string
 */

 /**
 * @swagger
 *
 * definitions:
 *   PlaceOrderDTO:
 *     type: object
 *     required:
 *       - user_id
 *       - lineItems
 *       - cost
 *     properties:
 *       user_id:
 *         type: string
 *       lineItems:
 *         type: array
 *         items:
 *          $ref: '#/definitions/LineItems' 
 *       cost:
 *         type: integer
 */

/**
 * @swagger
 * /api/smartshopper/user/{userId}/Orders:
 *   get:
 *     description: list of orders
 *     tags:    [Orders]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId
 *         in: path
 *     responses:
 *       200:
 *         description: Orders List
 *         schema:
 *           $ref: '#/definitions/OrderDTO'  
 */

/**
 * @swagger
 * /api/smartshopper/user/{userId}/OrderHistory:
 *   get:
 *     description: list of previous orders
 *     tags:    [Order History]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId
 *         in: path
 *     responses:
 *       200:
 *         description: Previous Orders List
 */

 /**
 *  @swagger
 * /api/smartshopper/user/{userId}/placeOrder:
 *   post:
 *     description: Place an order
 *     tags:    [Place Order]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: PlaceOrderDTO
 *         description: PlaceOrderDTO.
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/PlaceOrderDTO'
 *     responses:
 *       200:
 *         description: orderId
 *         schema:
 *          type:string
 */

const BASE_URL = `/api/smartshopper`
const orderRepo = require('../repository/OrderRepository')

var orderController = function(){

    var controller={};

   //
     
    controller.getOrdersForUser = function(app){
        app.get(BASE_URL+'/user/:userId/Orders',(req,resp)=>{
            var userId= req.params.userId;
         orderRepo.getOrders(userId)
                  .then(orders=>{
                      resp.send(orders);
                  })
                  .catch(err=>{
                      resp.status(500).send("server error");
                  })

        })

    }

    controller.getOrderHistory=function(app){
        app.get(BASE_URL+'/user/:userId/OrderHistory',(req,resp)=>{
            var userId= req.params.userId;
            orderRepo.getOrderHistory(userId)
                  .then(orderHistory=>{
                      resp.send(orderHistory);
                  })
                  .catch(err=>{
                      resp.status(500).send("server error");
                  })

        })
    }

    controller.placeOrder = function(app){

        app.post(BASE_URL+'/user/:userId/placeOrder',(req,resp)=>{

            var userId= req.params.userId;
            var orderDTO = req.body;
            console.log("order..")
            console.log(orderDTO)
            var lineItems = orderDTO.lineItems; // product id and qutantiy
            var orderCost=orderDTO.cost;
            var user_id=orderDTO.user_id;
            console.log(lineItems);
            console.log(orderCost);
            console.log("Userid:");
            console.log(user_id);
             orderRepo.placeOrder(user_id,lineItems,orderCost)
             .then((orderId)=>{
                resp.send(orderId);
             })
             .catch(err=>resp.status(500).send("server error"))
        })


    }
   
    return controller;
}


module.exports = orderController();

