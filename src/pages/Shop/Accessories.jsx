import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessories } from "../../redux/actions/accessoriesActions";
import Accessory from "../../component/Shop/Accessory";
import RambousLoader from "../../routes/RambousLoader";
import Filter from "../../component/Shop/Filter"; // Import the Filter component
import { FaSearch } from "react-icons/fa";

const Accessories = () => {
  const dispatch = useDispatch();
  const { accessories, loading, error, etag } = useSelector(
    (state) => state.accessories
  );

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const categories = Array.from(new Set(accessories.map((accessory) => accessory.category)));

  const filteredAccessories = accessories.filter((accessory) => {
    const matchesCategory = selectedCategory ? accessory.category === selectedCategory : true;
    const matchesSearchQuery = [
      accessory.productName,
      accessory.description,
      accessory.brand,
      accessory.category
    ].some(field => (field ?? "").toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearchQuery;
  });

  if (loading) return <RambousLoader />;

  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col mt-7">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="flex flex-row items-center justify-between bg-gray-100 p-2 rounded-md shadow-md mt-4 mb-4">
        <div className="text-3xl text-blue-900 font-semibold">
          Accessories
        </div>
        <div className="w-1/4">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>

      <div className="flex flex-row items-center p-4 bg-gray-100 rounded-md shadow-md mt-4 mb-4">
        <FaSearch className="mr-2" />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Search by name, description, brand, or category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-10 p-10">
        {filteredAccessories.length > 0 ? (
          filteredAccessories.map((accessory) => (
            <Accessory
              key={accessory.id}
              accessory_image={accessory.productImage}
              accessory_image_url={accessory.productImageURL}
              accessory_name={accessory.productName}
              accessory_price={accessory.price}
              accessory_id={accessory.id}
              accessory_description={accessory.description}
            />
          ))
        ) : (
          <div>No accessories found</div>
        )}
      </div>
    </div>
  );
};

export default Accessories;
