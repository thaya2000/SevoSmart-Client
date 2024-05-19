import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessories } from ".../../../../redux/actions/productActions";
import Accessory from "../../component/Shop/Accessory";

const Accessories = () => {
  const dispatch = useDispatch();
  const { accessories, loading, error, etag } = useSelector(
    (state) => state.accessories
  );

  useEffect(() => {
    console.log("persistance accessories", accessories);
    console.log("persistance loading", loading);
    console.log("persistance error", error);
    console.log("persistance etag", etag);

    const cachedAccessories = localStorage.getItem("accessories");
    const cachedETag = localStorage.getItem("etag");

    if (cachedAccessories && !loading) {
      console.log("Using cached data");
      dispatch({
        type: "FETCH_ACCESSORIES_SUCCESS",
        payload: JSON.parse(cachedAccessories),
      });
    }

    console.log("Checking for updates with ETag:", cachedETag);
    dispatch(fetchAccessories(cachedETag));
  }, [dispatch, accessories, error, etag, loading]);

  useEffect(() => {
    if (
      accessories.length > 0 &&
      (!localStorage.getItem("etag") || localStorage.getItem("etag") !== etag)
    ) {
      console.log("Updating local storage with new data and ETag");
      console.log("test accessories", accessories);
      console.log("test etag", etag);
      localStorage.setItem("accessories", JSON.stringify(accessories));
      localStorage.setItem("etag", etag);
    }
  }, [accessories, etag]);

  return (
    <div className="flex flex-col mt-7">
      <div className="flex flex-row justify-between border-b border-black pb-3">
        <div className="flex pl-5 sm:text-5xl sm:font-semibold text-2xl font-medium">
          Accessories
        </div>
      </div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {accessories.map((accessory) => (
          <Accessory
            key={accessory.id}
            accessory_image={accessory.productImage}
            accessory_name={accessory.productName}
            accessory_price={accessory.price}
            accessory_id={accessory.id}
            accessory_description={accessory.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
