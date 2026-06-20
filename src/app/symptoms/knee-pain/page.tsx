import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { symptomLinks } from "@/data/symptomNavigation";

export default function KneePainPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/symptoms"
      className="text-green-700 hover:underline"
    >
      ← 症状一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🦵 膝痛
    </h1>

    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      膝の痛みは、膝だけでなく、
      股関節・足首・歩き方・階段動作などが関係して起こることがあります。
      痛みのある場所だけでなく、下肢全体の動きを見ることが大切です。
    </p>

    <img
      src="/images/symptoms/knee-pain.png"
      alt="膝痛"
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
            {symptomLinks.膝痛.bodyParts.map((item) => (
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
            {symptomLinks.膝痛.motions.map((item) => (
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
            {symptomLinks.膝痛.faqs.map((item) => (
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
        膝痛で関係しやすい部位
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/body-parts/knee"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            膝
          </h3>

          <p className="text-sm mt-2">
            痛みの中心となることが多い部位です。
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
            膝への負担に関係しやすい部位です。
          </p>
        </Link>

        <Link
          href="/body-parts/ankle"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            足首
          </h3>

          <p className="text-sm mt-2">
            歩き方や体重のかけ方に関係します。
          </p>
        </Link>

      </div>

    </section>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        膝痛と関係しやすい動き
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/motions/walk"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          歩行
        </Link>

        <Link
          href="/motions/stairs-up"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          階段を上る
        </Link>

        <Link
          href="/motions/stairs-down"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          階段を下りる
        </Link>

        <Link
          href="/motions/seiza"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          正座
        </Link>

        <Link
          href="/faq/knee"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          膝FAQ
        </Link>

      </div>

    </section>

    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-900">
        🦴 ボンちゃんポイント
      </h2>

      <p className="mt-4 text-green-900 leading-relaxed">
        膝が痛い時でも、
        股関節や足首の動きが関係していることがあるよ。
        歩き方や階段動作も一緒に見ていこう♪
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
