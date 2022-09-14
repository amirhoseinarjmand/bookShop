import HeaderTop from "./headerTop/HeaderTop";
import HeaderBottom from "./hedaerBottom/HeaderBottom";
import { Outlet } from "react-router-dom";

export default function Header({ children }) {
  return (
    <div
      className="Header"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "151px",
      }}
    >
      <HeaderTop />
      <HeaderBottom />
      {children}
      <Outlet />
    </div>
  );
}
