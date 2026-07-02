import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { symptomLinks } from "@/data/symptomNavigation";
import Icon from "@/components/Icon";

export default function NeckPainPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/symptoms"
      className="text-green-700 hover:underline"
    >
      ← 症状一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🧠 首痛
    </h1>

    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      首の痛みは、首だけでなく肩や肩甲骨、
      姿勢やスマホ・パソコン作業などの影響を受けることがあります。
      首だけを見るのではなく、周囲とのつながりを見ることが大切です。
    </p>

    <img
      src="/images/symptoms/neck-pain.png"
      alt="首痛"
      className="w-72 mx-auto rounded-3xl shadow-lg mt-8"
    />

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-800 mb-4">
        🧭 からだナビ関連リンク
      </h2>

      <div className="space-y-4">

        <div>
          <h3 className="font-bold text-green-700">
            🦴 関連部位
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {symptomLinks.首痛.bodyParts.map((item) => (
              <Link
                key={`${item.name}-${item.href}`}
                href={item.href}
                className="bg-green-200 px-3 py-1 rounded-full hover:bg-green-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-blue-700">
            🚶 関連動作
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {symptomLinks.首痛.motions.map((item) => (
              <Link
                key={`${item.name}-${item.href}`}
                href={item.href}
                className="bg-blue-200 px-3 py-1 rounded-full hover:bg-blue-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-red-700">
            ❓ 関連FAQ
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {symptomLinks.首痛.faqs.map((item) => (
              <Link
                key={`${item.name}-${item.href}`}
                href={item.href}
                className="bg-red-200 px-3 py-1 rounded-full hover:bg-red-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>

    </section>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        首痛で関係しやすい部位
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/body-parts/neck"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            首
          </h3>

          <p className="text-sm mt-2">
            首痛の中心となる部位です。
          </p>
        </Link>

        <Link
          href="/body-parts/shoulder"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            肩
          </h3>

          <p className="text-sm mt-2">
            首と肩は密接に関係しています。
          </p>
        </Link>

        <Link
          href="/motions/turn-neck"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            首を回す
          </h3>

          <p className="text-sm mt-2">
            首の動きと深く関係します。
          </p>
        </Link>

      </div>

    </section>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        首痛と関係しやすい動き
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/motions/turn-neck"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          首を回す
        </Link>

        <Link
          href="/faq/neck"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          首FAQ
        </Link>

        <Link
          href="/body-parts/neck"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          首図鑑
        </Link>

      </div>

    </section>

    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <Icon
      
               src="/images/icons/honeppi-icon.png"
      
               alt="ほねっぴ"
      
               size={55}
      
             />
      
             <h6 className="text-4xl font-bold text-green-700 mt-3">
      
               ほねっぴポイント </h6>

      <p className="mt-4 text-green-900 leading-relaxed">
        首が痛い時は、首だけでなく肩や姿勢も関係していることがあるよ。
        スマホやパソコンを見る時間が長い人は、
        時々首や肩を動かしてあげようね♪
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
