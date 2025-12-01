import { PresentationControls } from "@react-three/drei";

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";

const ModalSwitcher = ({ scale, isMobile }) => {
  const showLarge = scale >= 0.07;

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <PresentationControls {...controlsConfig}>
      {showLarge ? (
        <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
      ) : (
        <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
      )}
    </PresentationControls>
  );
};

export default ModalSwitcher;
