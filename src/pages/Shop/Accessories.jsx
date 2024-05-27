import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessories } from "../../redux/actions/accessoriesActions";
import Accessory from "../../component/Shop/Accessory";

const Accessories = () => {
  const dispatch = useDispatch();
  const { accessories, loading, error, etag } = useSelector(
    (state) => state.accessories
  );

  useEffect(() => {
    console.log("Checking for updates...");
    console.log("Checking for updates with ETag:", etag);
    dispatch(fetchAccessories(etag));
  }, [dispatch, etag]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col mt-7">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="flex flex-row justify-between border-b border-black pb-3">
        <div className="flex pl-5 sm:text-5xl sm:font-semibold text-2xl font-medium">
          Accessories
        </div>
      </div>
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
