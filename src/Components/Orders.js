import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();

    
  return <div className="orders">
    <h1>Your orders</h1>

  </div>;
}

export default Orders;
