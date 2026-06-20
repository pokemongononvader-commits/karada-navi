import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { symptomLinks } from "@/data/symptomNavigation";

export default function ShoulderPainPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/symptoms"
      className="text-green-700 hover:underline"
    >
      ← 症状一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      💪 肩痛
    </h1>

    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      肩の痛みは、肩関節だけでなく、
      肩甲骨・鎖骨・上腕骨の動きが関係して起こることがあります。
      腕を上げる動作や日常生活の使い方も大切です。
    </p>

    <img
      src="/images/symptoms/shoulder-pain.png"
      alt="肩痛"
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
            {symptomLinks.肩痛.bodyParts.map((item) => (
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
            {symptomLinks.肩痛.motions.map((item) => (
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
            {symptomLinks.肩痛.faqs.map((item) => (
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
        肩痛で関係しやすい部位
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/body-parts/shoulder"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            肩
          </h3>

          <p className="text-sm mt-2">
            肩痛の中心となる部位です。
          </p>
        </Link>

        <Link
          href="/body-parts/neck"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            首
          </h3>

          <p className="text-sm mt-2">
            肩まわりの緊張に関係することがあります。
          </p>
        </Link>

        <Link
          href="/motions/raise-arm"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            腕を上げる
          </h3>

          <p className="text-sm mt-2">
            肩の動きと深く関係します。
          </p>
        </Link>

      </div>

    </section>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        肩痛と関係しやすい動き
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/motions/raise-arm"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          腕を上げる
        </Link>

        <Link
          href="/faq/shoulder"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          肩FAQ
        </Link>

        <Link
          href="/body-parts/shoulder"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          肩図鑑
        </Link>

      </div>

    </section>

    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-900">
        🦴 ボンちゃんポイント
      </h2>

      <p className="mt-4 text-green-900 leading-relaxed">
        肩が痛い時は、肩だけでなく
        肩甲骨や腕を上げる動きも関係していることがあるよ。
        無理のない範囲で動きを見ていこう♪
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
