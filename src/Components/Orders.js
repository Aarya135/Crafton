import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import "../Styles/Orders.css";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  var heading = user ? (
    <h1>Your orders</h1>
  ) : (
    <p>
      You need to <Link to="/login">sign in</Link> to view your orders.
    </p>
  );

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        // heading = <h1>Your orders</h1>;
        const q = query(
          collection(db, "users", user?.uid, "orders"),
          orderBy("created", "desc")
        );
        // console.log("query is>>>>", q);
        // const querySnapshot = await getDocs(q);
        // console.log("qs is >>>", querySnapshot);
        // querySnapshot.forEach((doc) => {
        //   // console.log("HI");
        //   // doc.data() is never undefined for query doc snapshots
        //   setOrders(
        //     id: doc.id,
        //     data: doc.data(),
        //   )

        //   // console.log(doc.id, " => ", doc.data());
        // });
        onSnapshot(q, (querySnapshot) => {
          setOrders(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      } else {
        // heading = <h1>Sign in</h1>;
        setOrders([]);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="orders">
      {heading}
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}
// else{
//   return (
//     <p>You need to be signed in to view your orders.</p>
//   );
// }
// }
//   return (
//       <div className="orders">
//       <h1>Your orders</h1>
//       <div className="orders_order">
//         {orders?.map((order) => (
//           <Order order={order} />
//         ))}
//       </div>
//     </div>
//     else{
//       <p>You need to be signed in to view your orders.</p>
//     }
//     // }
//   );
// }

export default Orders;
