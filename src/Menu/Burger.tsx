import "./Burger.css";

interface BurgerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <div
      className={`App-Burger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Burger;