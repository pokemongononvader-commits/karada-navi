import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { symptomLinks } from "@/data/symptomNavigation";

export default function LowbackPainPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/symptoms"
      className="text-green-700 hover:underline"
    >
      ← 症状一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🦴 腰痛
    </h1>

    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      腰痛は、腰だけの問題ではなく、
      骨盤・股関節・姿勢・歩き方などが関係して起こることがあります。
      痛い場所だけでなく、身体全体のつながりを見ることが大切です。
    </p>

    <img
      src="/images/symptoms/lowback-pain.png"
      alt="腰痛"
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
            {symptomLinks.腰痛.bodyParts.map((item) => (
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
            {symptomLinks.腰痛.motions.map((item) => (
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
            {symptomLinks.腰痛.faqs.map((item) => (
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
        腰痛で関係しやすい部位
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/body-parts/lowback"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            腰
          </h3>

          <p className="text-sm mt-2">
            腰痛の中心となる部位です。
          </p>
        </Link>

        <Link
          href="/body-parts/hip"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            股関節
          </h3>

          <p className="text-sm mt-2">
            腰への負担に関係しやすい部位です。
          </p>
        </Link>

        <Link
          href="/body-parts/knee"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            膝
          </h3>

          <p className="text-sm mt-2">
            歩き方のバランスに関係します。
          </p>
        </Link>

      </div>

    </section>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        腰痛と関係しやすい動き
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/motions/walk"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          歩行
        </Link>

        <Link
          href="/motions/seiza"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          正座
        </Link>

        <Link
          href="/faq/lowback"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          腰痛FAQ
        </Link>

      </div>

    </section>

    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-900">
        🦴 ボンちゃんポイント
      </h2>

      <p className="mt-4 text-green-900 leading-relaxed">
        腰が痛い時でも、
        股関節や歩き方が関係していることがあるよ。
        痛い場所だけでなく、身体全体を見ていこう♪
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
