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

const motionLabel: Record<HipMotion, string> = {
  flexion: "股関節の屈曲",
  extension: "股関節の伸展",
  abduction: "股関節の外転",
  adduction: "股関節の内転",
  "external-rotation": "股関節の外旋",
  "internal-rotation": "股関節の内旋",
};


const motionHint: Record<HipMotion, string> = {
  flexion: "脚を前に振り上げる動き",
  extension: "脚を後ろに振る動き",
  abduction: "脚を外側へ開く動き",
  adduction: "脚を中心線へ寄せる動き",
  "external-rotation": "足先を外側へ向ける動き",
  "internal-rotation": "足先を内側へ向ける動き",
};


export default function HipMotionAnimation({ motion }: Props) {
  return (
    <div className="relative mx-auto h-64 w-64 rounded-3xl bg-green-50 border border-green-200 overflow-hidden mt-8">

      {/* 骨盤 */}
      <div className="absolute top-10 left-1/2 h-24 w-36 -translate-x-1/2 rounded-b-full bg-green-200 border-4 border-green-500" />

      {/* ニュートラル線 */}
      <div className="absolute top-[136px] left-1/2 h-40 border-l-2 border-dashed border-green-500 opacity-60" />

      {/* 薄い基準脚 */}
      <div className="absolute top-[132px] left-1/2 -translate-x-1/2 opacity-25">
        <div className="absolute left-1/2 top-0 h-24 w-8 -translate-x-1/2 rounded-full bg-white border-4 border-gray-400" />
        <div className="absolute left-1/2 top-[96px] h-20 w-7 -translate-x-1/2 rounded-full bg-white border-4 border-gray-400" />
        <div className="absolute left-1/2 top-[174px] h-6 w-14 -translate-x-1/2 rounded-full bg-white border-4 border-gray-400" />
      </div>

      {/* 動く脚 */}
      <div className={`absolute top-[132px] left-1/2 ${motionClass[motion]}`}>
        <div className="absolute left-1/2 top-0 h-24 w-8 -translate-x-1/2 rounded-full bg-white border-4 border-yellow-600" />
        <div className="absolute left-1/2 top-[96px] h-20 w-7 -translate-x-1/2 rounded-full bg-white border-4 border-yellow-600" />
        <div className="absolute left-1/2 top-[174px] h-6 w-14 -translate-x-1/2 rounded-full bg-white border-4 border-yellow-600" />
      </div>

      {/* 股関節 */}
      <div className="absolute bottom-4 w-full text-center">
  <div className="text-sm font-bold text-green-700">
    {motionLabel[motion]}
  </div>
  <div className="text-xs text-gray-600 mt-1">
    {motionHint[motion]}
  </div>
</div>

</div>
  );
}