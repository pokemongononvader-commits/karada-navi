import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Icon from "@/components/Icon";
const motions = [
{
id: "walk",
name: "歩く",
icon: "🚶",
image: "/images/motions/walk/walk-main.png",
},
{
id: "stairs-up",
name: "階段を上る",
icon: "⬆️",
image: "/images/motions/stairs-up/stairs-up-main.png",
},
{
id: "stairs-down",
name: "階段を下りる",
icon: "⬇️",
image: "/images/motions/stairs-down/stairs-down-main.png",
},
{
id: "raise-arm",
name: "腕を上げる",
icon: "🙋",
image: "/images/motions/raise-arm/raise-arm-main.png",
},
{
id: "turn-neck",
name: "首を回す",
icon: "🔄",
image: "/images/motions/turn-neck/turn-neck-main.png",
},
{
id: "seiza",
name: "正座",
icon: "🧎",
image: "/images/motions/seiza/seiza-main.png",
},
];

export default function MotionsPage() {
return ( <main className="min-h-screen bg-green-50">


 <div className="max-w-6xl mx-auto p-6">

  {/* 戻るボタン */}
  <Link
    href="/"
    className="inline-block text-green-700 hover:underline mb-8"
  >
    ← トップページへ戻る
  </Link>

  {/* タイトル */}
 <div className="flex flex-col items-center mb-6">

  <Icon
    src="/images/icons/motions-icon.png"
    alt="動き"
    size={120}
  />

  <h1 className="text-4xl font-bold text-green-700 mt-3">
    動きから探す
  </h1>

  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
    気になる動きを選んで、
    関係する関節・筋肉・症状を調べてみましょう。
  </p>

</div>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {motions.map((motion) => (

       <Link
  key={motion.id}
  href={`/motions/${motion.id}`}
>

  <div className="
bg-white
rounded-3xl
shadow-lg
overflow-hidden
transition-all
duration-300
hover:scale-[1.03]
hover:shadow-2xl
cursor-pointer
">

    <img
      src={motion.image}
      alt={motion.name}
      className="w-full h-52 object-cover"
    />

    <div className="p-5">

      <h2 className="text-2xl font-bold text-green-800">
        {motion.icon} {motion.name}
      </h2>

      <p className="text-gray-600 mt-2">
        詳しく見る →
      </p>

    </div>

  </div>

</Link>

      ))}

    </div>

    <section className="bg-green-200 rounded-3xl p-6 mt-10">

       <Icon
    src="/images/icons/honeppi-icon.png"
    alt="ほねっぴ"
    size={55}
  />
  <h2 className="text-4xl font-bold text-green-700 mt-3">
    動きから探す
  </h2>
      <p className="mt-4 text-green-900 leading-relaxed">
        痛い場所だけを見るのではなく、
        「どんな動きで痛いのか」を考えることが大切です。
        動きから身体を見ると、
        本当の原因が見つかることがあります。
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
