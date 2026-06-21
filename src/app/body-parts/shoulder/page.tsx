import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";
import ShoulderStructureGuide from "@/components/ShoulderStructureGuide";

export default function ShoulderPage() {
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
            肩関節（かたかんせつ）
          </h1>

          <Image
            src="/images/bodyparts/shoulder.png"
            alt="肩関節"
            width={500}
            height={500}
            className="w-72 mx-auto rounded-3xl shadow-lg"
          />

          <ShoulderStructureGuide />

          <section className="bg-green-50 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              肩関節とは？
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              肩関節は腕を自由に動かすための大切な関節です。
              洗髪・着替え・荷物を持つ動作など、
              日常生活の多くの場面で使われています。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              肩は大きく動く反面、不安定になりやすく、
              肩甲骨・背中・首との連携も大切です。
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white border border-green-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-green-700">
                主な役割
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>腕を上げる</li>
                <li>腕を回す</li>
                <li>物を持つ</li>
                <li>髪を洗う</li>
                <li>服を着る</li>
                <li>後ろに手を回す</li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700">
                よくある症状
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>腕を上げると痛い</li>
                <li>夜寝ている時に痛い</li>
                <li>後ろに手を回しにくい</li>
                <li>服の着脱がつらい</li>
                <li>肩の前が痛い</li>
                <li>肩を動かすと引っかかる</li>
              </ul>
            </div>

            <div className="bg-white border border-blue-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">
                関連する筋肉
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>三角筋</li>
                <li>上腕二頭筋</li>
                <li>棘上筋</li>
                <li>棘下筋</li>
                <li>小円筋</li>
                <li>肩甲下筋</li>
                <li>僧帽筋</li>
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
                  <li>上腕骨</li>
                  <li>肩甲骨</li>
                  <li>鎖骨</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-blue-700">
                  関連する関節
                </h3>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  <li>肩甲上腕関節</li>
                  <li>肩鎖関節</li>
                  <li>胸鎖関節</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-green-100 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-800">
              🦴 ボンちゃんポイント
            </h2>

            <p className="mt-4 text-green-900 leading-relaxed">
              肩関節は人体の中でも特に大きく動く関節です。
              その反面、使いすぎや姿勢の影響を受けやすく、
              肩だけでなく肩甲骨・首・背中との連携も大切です。
            </p>

            <p className="mt-3 text-green-900 leading-relaxed">
              一心たけうち接骨院では、
              肩の痛みだけでなく、日常動作や身体全体の使い方も確認しながら施術しています。
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
                  {bodyPartLinks.肩.motions.map((item) => (
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
                  {bodyPartLinks.肩.symptoms.map((item) => (
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
                  {bodyPartLinks.肩.faqs.map((item) => (
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