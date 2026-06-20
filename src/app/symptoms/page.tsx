import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";

const symptoms = [
{
name: "膝痛",
icon: "🦵",
image: "/images/symptoms/knee-pain.png",
href: "/symptoms/knee-pain",
description: "膝関節のトラブルや太ももの筋肉の硬さが関係することがあります。",
},

{
name: "腰痛",
icon: "🏃",
image: "/images/symptoms/lowback-pain.png",
href: "/symptoms/lowback-pain",
description: "腰だけでなく、骨盤や股関節の動きも関係することがあります。",
},

{
name: "肩痛",
icon: "💪",
image: "/images/symptoms/shoulder-pain.png",
href: "/symptoms/shoulder-pain",
description: "肩関節や肩甲骨の動きが関係することがあります。",
},

{
name: "首痛",
icon: "🦴",
image: "/images/symptoms/neck-pain.png",
href: "/symptoms/neck-pain",
description: "首だけでなく、肩や姿勢の影響を受けることがあります。",
},

{
name: "股関節痛",
icon: "🦴",
image: "/images/symptoms/hip-pain.png",
href: "/symptoms/hip-pain",
description: "歩行や階段動作、腰や膝とのつながりが関係することがあります。",
},

{
name: "足首痛",
icon: "🦶",
image: "/images/symptoms/ankle-pain.png",
href: "/symptoms/ankle-pain",
description: "捻挫や歩き方、膝・股関節との連動が関係することがあります。",
},
];

export default function SymptomsPage() {
return ( <main className="min-h-dvh bg-green-50 pb-12">


  <div className="max-w-6xl mx-auto p-6">

    <Link
      href="/"
      className="text-green-700 hover:underline"
    >
      ← トップページへ戻る
    </Link>

    <header className="text-center mt-6">

      <h1 className="text-4xl font-bold text-green-800">
        😣 症状から探す
      </h1>

      <p className="mt-4 text-gray-700">
        気になる症状を選んで、関連する部位・動き・FAQを見てみましょう。
      </p>

    </header>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-800">
        🦴 ボンちゃんからひとこと
      </h2>

      <p className="mt-4 text-gray-700 leading-relaxed">
        痛みは、痛い場所だけが原因とは限らないよ。
        気になる症状を選ぶと、関係しやすい部位や動き、
        よくある質問へ移動できるよ♪
      </p>

    </section>

    <section className="grid md:grid-cols-3 gap-8 mt-8">

      {symptoms.map((symptom) => (
        <Link
          key={symptom.href}
          href={symptom.href}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 hover:bg-green-50 transition"
        >
          <img
            src={symptom.image}
            alt={symptom.name}
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold text-green-800">
              {symptom.icon} {symptom.name}
            </h2>

            <p className="text-gray-700 mt-3 leading-relaxed">
              {symptom.description}
            </p>

            <p className="text-green-700 font-bold mt-4">
              詳しく見る →
            </p>

          </div>
        </Link>
      ))}

    </section>
<ClinicCTA />
  </div>

</main>


);
}
