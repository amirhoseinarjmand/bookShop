import { Footer, Header, Box1, Slider1, Politzer } from "../index";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="Layout">
      {/* <Discount /> */}
      <Header />
      <Slider1 />
      <Box1 />
      <Politzer />
      <div className="" style={{ height: "200rem" }}></div>
      <Outlet />
      <Footer />
    </div>
  );
}
