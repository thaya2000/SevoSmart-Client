// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import orderData from './orderData'; // Sample order data with product images

// const OrderDetails = () => {
//     const [order, setOrder] = useState([]);


//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await axios.get('https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/allOrders');
//             setOrder(response.data); // Assuming your API response is an array of order objects
           
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };
// //   const { orderId } = useParams(); // Assuming orderId is passed as a URL parameter
// //   const order = orderData.find(order => order.orderId === parseInt(orderId)); // Find the order with the provided orderId

//   if (!order) {
//     return <div>Order not found</div>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-semibold mb-4">Order Details</h1>
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="p-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-lg font-semibold text-gray-800">Order Date: {order.orderDate}</p>
//               <p className="text-gray-600">Order ID: {order.orderId}</p>
//             </div>
//             <p className="text-lg font-semibold text-gray-800">{order.orderStatus}</p>
//           </div>
//           <hr className="my-4" />
//           <div>
//             <p className="text-lg font-semibold text-gray-800 mb-2">Shipping Address</p>
//             <p>{order.addressLineOne}</p>
//             <p>{order.addressLineTwo}</p>
//             <p>{order.city}, {order.district}</p>
//             <p>Phone: {order.phoneNo}</p>
//           </div>
//           <hr className="my-4" />
//           <div>
//             <p className="text-lg font-semibold text-gray-800 mb-2">Ordered Products</p>
//             {order.products.map(product => (
//               <div key={product.productId} className="flex items-center border-b py-4">
//                 <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
//                 <div>
//                   <p className="text-lg font-semibold text-gray-800">{product.name}</p>
//                   <p className="text-gray-600">Quantity: {product.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <hr className="my-4" />
//           <div className="flex justify-between">
//             <p className="text-lg font-semibold text-gray-800">Shipping Cost: ${order.shippingCost}</p>
//             <p className="text-lg font-semibold text-gray-800">Total Price: ${order.totalPrice}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;
