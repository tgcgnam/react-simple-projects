import style from "./Switch.module.css";

function Switch({ isOn, onClick }) {

  return (
    <div className={isOn ? style.switchOn : style.switch} onClick={onClick}></div>
  );
}

export default Switch;
