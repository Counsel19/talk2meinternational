import { Bolt } from "lucide-react";
import { FC } from "react";

interface BulletProps {}
const Bullet: FC<BulletProps> = ({}) => {
  return (
    <div className="min-w-[40px] h-[40px] rounded-lg grid place-content-center bg-primary-color mb-4">
      <Bolt size={20} className="text-white" />
    </div>
  );
};

export default Bullet;
