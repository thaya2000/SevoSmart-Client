import React, { useState, useEffect } from 'react';
import { SlArrowDown } from "react-icons/sl";
import axios from "axios";
import Accessory from "../../component/Shop/Accessory";
import { useParams } from 'react-router-dom';
import image1 from "../../assets/construction.jpg";
import image2 from "../../assets/solar.jpg";
import image3 from "../../assets/footer_sample.jpg";

const Accessories = () => {

  // const [products, setProducts] = useState([]);
  // const [deleteProductId, setDeleteProductId] = useState(null);
  // const [serialNumbers, setSerialNumbers] = useState({});

  // const { id } = useParams();

  // useEffect(() => {
  //     loadProducts();
  // }, []);

  // const loadProducts = async () => {
  //     try {
  //         const result = await axios.get("http://localhost:8080/api/v1/admin/products");
  //         setProducts(result.data);
  //         generateSerialNumbers(result.data);
  //     } catch (error) {
  //         console.error('Error loading products:', error);
  //     }
  // };

  const [accessories, setAccessories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      loadAccessories();
  }, []);

  const loadAccessories = async () => {
      try {
          const result = await axios.get("http://localhost:8080/api/v1/admin/products");
          setAccessories(result.data);
      } catch (error) {
          console.error('Error loading Accessories:', error);
      }
  };


  // const accessories = [
  //   {
  //     accessory_image: image1,
  //     accessory_name: "Solar Lights",
  //     accessory_price: "7500 lkr",
  //   },
  //   {
  //     accessory_image: image2,
  //     accessory_name: "Solar Lights",
  //     accessory_price: "7500 lkr",
  //   },
  //   {
  //     accessory_image: image3,
  //     accessory_name: "Solar Lights",
  //     accessory_price: "7500 lkr",
  //   },
  //   {
  //     accessory_image: image1,
  //     accessory_name: "Solar Lights",
  //     accessory_price: "7500 lkr",
  //   },
  //   {
  //     accessory_image: image2,
  //     accessory_name: "Solar Lights",
  //     accessory_price: "7500 lkr",
  //   },
  //   {
  //     accessory_image: image2,
  //     accessory_name: "Solar Lights",
  //     accessory_price: "7500 lkr",
  //   },
  // ];

  return (
    <div className="flex flex-col mt-7">
      <div className="flex flex-row justify-between border-b border-black pb-3">
        <div className="flex pl-5 sm:text-5xl sm:font-semibold text-2xl font-medium">
          Accessories
        </div>
        <div className="flex flex-row justify-between gap-x-3 items-center pr-5">
          <div className="flex sm:text-2xl text-lg font-light">Browse all</div>
          <div className="flex">
            <SlArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {accessories.map((accessory, index) => (
          <Accessory
            key={index}
            accessory_image={accessory.image}
            accessory_name={accessory.name}
            accessory_price={accessory.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
