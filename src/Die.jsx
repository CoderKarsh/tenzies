import pip1 from "./assets/Pip_1.webp";
import pip2 from "./assets/Pip_2.webp";
import pip3 from "./assets/Pip_3.webp";
import pip4 from "./assets/Pip_4.webp";
import pip5 from "./assets/Pip_5.webp";
import pip6 from "./assets/Pip_6.webp";

import Heldpip2 from "./assets/HeldPip_2.webp";
import Heldpip1 from "./assets/HeldPip_1.webp";
import Heldpip3 from "./assets/HeldPip_3.webp";
import Heldpip4 from "./assets/HeldPip_4.webp";
import Heldpip5 from "./assets/HeldPip_5.webp";
import Heldpip6 from "./assets/HeldPip_6.webp";

export default function Die({ dieObj, handleToggle }) {
  const pipArray = [pip1, pip2, pip3, pip4, pip5, pip6];
  const heldPipArray = [
    Heldpip1,
    Heldpip2,
    Heldpip3,
    Heldpip4,
    Heldpip5,
    Heldpip6,
  ];

  return (
    <button
      type="submit"
      className={`die-btn ${dieObj.isHeld ? "held-btn" : null}`}
      id={dieObj.id}
      onClick={handleToggle}
    >
      {
        <img
          alt={`Die with value: ${dieObj.val}`}
          src={
            dieObj.isHeld
              ? heldPipArray[dieObj.value - 1]
              : pipArray[dieObj.value - 1]
          }
        />
      }
    </button>
  );
}
