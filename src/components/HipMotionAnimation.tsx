type HipMotion =
  | "flexion"
  | "extension"
  | "abduction"
  | "adduction"
  | "external-rotation"
  | "internal-rotation";

type Props = {
  motion: HipMotion;
};

const motionClass: Record<HipMotion, string> = {
  flexion: "animate-hip-flexion",
  extension: "animate-hip-extension",
  abduction: "animate-hip-abduction",
  adduction: "animate-hip-adduction",
  "external-rotation": "animate-hip-external-rotation",
  "internal-rotation": "animate-hip-internal-rotation",
};

export default function HipMotionAnimation() {
  return (
    <div className="relative mx-auto h-80 w-80 rounded-3xl bg-green-50 border border-green-200 overflow-hidden">

      {/* 骨盤 */}
      <div className="absolute top-10 left-1/2 h-24 w-36 -translate-x-1/2 rounded-b-full bg-green-200 border-4 border-green-500" />

      {/* ニュートラル線 */}
      <div className="absolute top-[136px] left-1/2 h-40 border-l-2 border-dashed border-green-500 opacity-60" />

      {/* 脚：股関節中心を支点に振り子 */}
      <div className="absolute top-[132px] left-1/2 hip-leg-pendulum">

        <div className="absolute left-1/2 top-0 h-24 w-8 -translate-x-1/2 rounded-full bg-white border-4 border-yellow-600" />

        <div className="absolute left-1/2 top-[96px] h-20 w-7 -translate-x-1/2 rounded-full bg-white border-4 border-yellow-600" />

        <div className="absolute left-1/2 top-[174px] h-6 w-14 -translate-x-1/2 rounded-full bg-white border-4 border-yellow-600" />

      </div>

      {/* 股関節：最後に描いて常に中心に見せる */}
      <div className="absolute top-[116px] left-1/2 z-20 h-10 w-10 -translate-x-1/2 rounded-full bg-white border-4 border-green-600" />

      <div className="absolute bottom-4 w-full text-center text-sm font-bold text-green-700">
        股関節の動き
      </div>
    </div>
  );
}