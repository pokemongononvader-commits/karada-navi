import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Icon from "@/components/Icon";

const bodyParts = [
{
id: "neck",
name: "首",
icon: "🦴",
image: "/images/bodyparts/neck.png",
},
{
id: "shoulder",
name: "肩",
icon: "💪",
image: "/images/bodyparts/shoulder.png",
},
{
id: "lowback",
name: "腰",
icon: "🏃",
image: "/images/bodyparts/lowback.png",
},
{
id: "hip",
name: "股関節",
icon: "🦵",
image: "/images/bodyparts/hip.png",
},
{
id: "knee",
name: "膝",
icon: "🦿",
image: "/images/bodyparts/knee.png",
},
{
id: "ankle",
name: "足関節",
icon: "👣",
image: "/images/bodyparts/ankle.png",
},
];

export default function BodyPartsPage() {
return ( <main className="min-h-dvh bg-green-50 pb-12">


  <div className="max-w-6xl mx-auto p-6">

    <Link
      href="/"
      className="text-green-700 hover:underline"
    >
      ← トップページへ戻る
    </Link>

   {/* タイトル */}
    <div className="flex flex-col items-center mb-6">
   
     <Icon
       src="/images/icons/bodyparts-icon.png"
       alt="部位"
       size={120}
     />
   
     <h1 className="text-4xl font-bold text-green-700 mt-3">
       部位から探す
     </h1>

    <p className="text-center text-gray-600 mt-4">
      気になる部位を選んで、
      骨・筋肉・関節について学んでみましょう。
    </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {bodyParts.map((part) => (
        <Link
          key={part.id}
          href={`/body-parts/${part.id}`}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300"
        >

          <img
            src={part.image}
            alt={part.name}
            className="w-full h-56 object-cover"
          />

          <div className="p-5">

            <h2 className="text-2xl font-bold text-green-800">
              {part.icon} {part.name}
            </h2>

            <p className="text-gray-600 mt-2">
              詳しく見る →
            </p>

          </div>

        </Link>
      ))}

    </div>

    <section className="bg-green-200 rounded-3xl p-6 mt-10 shadow">

      <Icon

         src="/images/icons/honeppi-icon.png"

         alt="ほねっぴ"

         size={55}

       />

       <h6 className="text-4xl font-bold text-green-700 mt-3">

         ほねっぴポイント </h6>

      <p className="mt-4 text-green-900 leading-relaxed">
        身体は骨・筋肉・関節が協力して動いています。
        痛みのある場所だけでなく、
        周囲とのつながりを見ることで原因が見えてくることがあります。
      </p>

    </section>

    <ClinicCTA />

  </div>

</main>


);
}
