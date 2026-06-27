import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";
import NeckStructureGuide from "@/components/NeckStructureGuide";

export default function NeckPage() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="max-w-5xl mx-auto p-6">

        <Link
          href="/body-parts"
          className="inline-block mb-6 text-green-700 font-bold"
        >
          ← 部位一覧へ戻る
        </Link>

        <section className="bg-white rounded-3xl shadow-lg p-6">

          <h1 className="text-4xl font-bold text-green-800 mb-6">
            首（くび）
          </h1>

          <Image
            src="/images/bodyparts/neck.png"
            alt="首"
            width={500}
            height={500}
            className="w-72 mx-auto rounded-3xl shadow-lg"
          />

          <NeckStructureGuide />

          <section className="bg-green-50 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              首とは？
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              首は頭を支え、上を向く・下を向く・左右を見るなど、
              日常生活の多くの動作で使われています。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              頭は重さがあるため、姿勢や使い方によって
              首や肩の筋肉に負担がかかりやすい部分です。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              首だけでなく、肩甲骨・背中・姿勢との関係も大切です。
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white border border-green-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-green-700">
                主な役割
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>頭を支える</li>
                <li>上を向く</li>
                <li>下を向く</li>
                <li>左右を見る</li>
                <li>振り向く</li>
                <li>姿勢を保つ</li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700">
                よくある症状
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>首を回すと痛い</li>
                <li>上を向くと痛い</li>
                <li>下を向くと痛い</li>
                <li>寝違えた</li>
                <li>首こり・肩こり</li>
                <li>腕や手にしびれが出る</li>
              </ul>
            </div>

            <div className="bg-white border border-blue-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">
                関連する筋肉
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>胸鎖乳突筋</li>
                <li>僧帽筋</li>
                <li>頚板状筋</li>
                <li>肩甲挙筋</li>
                <li>斜角筋</li>
                <li>広頚筋</li>
              </ul>
            </div>

          </section>

          <section className="bg-blue-50 rounded-3xl p-6 mt-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800">
              関連する骨・関節
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-bold text-blue-700">
                  関連する骨
                </h3>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  <li>頚椎</li>
                  <li>後頭骨</li>
                  <li>鎖骨</li>
                  <li>肩甲骨</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-blue-700">
                  関連する関節
                </h3>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  <li>頚椎椎間関節</li>
                  <li>環椎後頭関節</li>
                  <li>胸鎖関節</li>
                  <li>肩甲胸郭関節</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-green-100 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-800">
              🦴 ボンちゃんポイント
            </h2>

            <p className="mt-4 text-green-900 leading-relaxed">
              首の痛みは、首だけが原因とは限りません。
              肩甲骨・背中・姿勢・呼吸の浅さが関係していることもあります。
            </p>

            <p className="mt-3 text-green-900 leading-relaxed">
              痛みを我慢して無理に動かすのではなく、
              痛みのない範囲でゆっくり動かし、
              深呼吸をしながら力を抜いていくことが大切です。
            </p>
          </section>

          <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              🧭 からだナビ関連リンク
            </h2>

            <div className="space-y-4">

              <div>
                <h3 className="font-bold text-blue-700">
                  🚶 関連動作
                </h3>

                <div className="flex flex-wrap gap-2 mt-2">
                  {bodyPartLinks.首.motions.map((item) => (
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
                  😣 関連症状
                </h3>

                <div className="flex flex-wrap gap-2 mt-2">
                  {bodyPartLinks.首.symptoms.map((item) => (
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

              <div>
                <h3 className="font-bold text-green-700">
                  ❓ 関連FAQ
                </h3>

                <div className="flex flex-wrap gap-2 mt-2">
                  {bodyPartLinks.首.faqs.map((item) => (
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

            </div>
          </section>

        </section>

        <ClinicCTA />

      </div>
    </main>
  );
}