import css from "./F.module.css";

export default function Footer() {
  return (
    <div
      className={`${css.Footer} bg-warning w-100`}
      style={{ height: "5rem" }}
    >
      footer
    </div>
  );
}
