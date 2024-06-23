import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessories } from "../../redux/actions/accessoriesActions";
import Accessory from "../../component/Shop/Accessory";
import RambousLoader from "../../routes/RambousLoader";

const Accessories = () => {
  const dispatch = useDispatch();
  const { accessories, loading, error, etag } = useSelector(
    (state) => state.accessories
  );

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      dispatch(fetchAccessories(etag));
    }
  }, [etag, dispatch]);

  useEffect(() => {
    dispatch(fetchAccessories(etag));
  }, []);

  if (loading) return <RambousLoader />;

  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col mt-7">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4 mb-4">
        <div className="ml-100 text-3xl text-blue-900 font-semibold">
          Accessories
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {accessories.map((accessory) => (
          <Accessory
            key={accessory.id}
            accessory_image={accessory.productImage}
            accessory_image_url={accessory.productImageURL}
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
