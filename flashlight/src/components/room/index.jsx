import style from "./Room.module.css";

function Room({ light, children }) {

  return (
    <div className={light  ? style.lightRoom : style.darkRoom}>
      {children}
    </div>
  );
}

export default Room;
