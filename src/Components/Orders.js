import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import Order from "./Order";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();

    useEffect(() => {
      if(user){

      }
      else{
        setOrders([])
      }
    }, [user])
    
    
  return <div className="orders">
    <h1>Your orders</h1>
    <div className="orders_order">
      {
        orders?.map(order => (
          <Order order = {order} />
        ))
      }
    </div>
  </div>;
}

export default Orders;
