import { Environment } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group name="lights">
      {/* Very lightweight HDR environment */}
      <Environment preset="city" />

      {/* One optimized spotlight */}
      <spotLight
        position={[0, 10, 10]}
        intensity={1.5}
        angle={0.25}
        penumbra={0.5}
      />
    </group>
  );
};

export default StudioLights;
