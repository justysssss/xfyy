import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Xfyy Digital Marketing Studios"
      default_velocity={5}
      className="font-display montserrat-font text-center text-4xl font-bold tracking-[-0.02em] text-[#383e47] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
