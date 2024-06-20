import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessories } from "../../redux/actions/accessoriesActions";
import Accessory from "../../component/Shop/Accessory";
import RambousLoader from "../../routes/RambousLoader";

const Accessories = () => {
  const dispatch = useDispatch();
  const { accessories, loading, etag } = useSelector(
    (state) => state.accessories
  );

  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     dispatch(fetchAccessories(etag));
  //   }
  // }, [etag, dispatch]);

  useEffect(() => {
    dispatch(fetchAccessories(etag));
  }, []);

  if (loading) return <RambousLoader />;

  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col mt-7">
      {/* {loading && <RambousLoader />} */}
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
