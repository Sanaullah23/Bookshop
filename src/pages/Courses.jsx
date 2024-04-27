import Course from "../components/Course";
import { useNavigate } from "react-router-dom";

const Courses = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen mt-28  px-10 md:px-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delight to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, quae? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consectetur, quae? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Consectetur, quae? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Consectetur, quae? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
            quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, quae? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consectetur, quae?
          </p>
          <button
            className="px-8 py-2 bg-pink-500 text-white rounded-lg mt-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold mt-8 text-pink-500">
          Best Seller Books
        </h1>
        <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
          <Course/>
        </div>
      </div>
    </>
  );
};

export default Courses;
