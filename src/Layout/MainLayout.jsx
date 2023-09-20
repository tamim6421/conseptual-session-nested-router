import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ThreeDots } from "react-loader-spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation)
  return (
    <div>
      <section className="flex justify-between px-10 py-6 shadow-lg">
        <div>
          <h1 className="text-xl font-bold">AmaZon</h1>
        </div>
        <nav>
          <ul className="flex gap-6 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-400 text-white p-1" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-400 text-white p-1" : ""
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-400 text-white p-1" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      {navigation.state === "loading" ? (
        <div className="flex justify-center my-20">
          {" "}
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />{" "}
        </div>
      ) : (
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
