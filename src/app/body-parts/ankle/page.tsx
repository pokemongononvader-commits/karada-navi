import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";
import AnkleStructureGuide from "@/components/AnkleStructureGuide";

export default function AnklePage() {
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
            足関節（そくかんせつ）
          </h1>

          <Image
            src="/images/bodyparts/ankle.png"
            alt="足関節"
            width={500}
            height={500}
            className="w-72 mx-auto rounded-3xl shadow-lg"
          />

          <AnkleStructureGuide />

          <section className="bg-green-50 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              足関節とは？
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              足関節は、すねの骨と足の骨をつなぎ、
              体重を支えながら歩く・走る・跳ぶ動作に関わる大切な関節です。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              足裏の着き方やつま先の向きによって、
              足首だけでなく膝・股関節・腰にも負担がかかることがあります。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              捻挫や足底部の痛みを防ぐためには、
              足裏全体で地面に着く意識と、正しい歩き方が大切です。
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white border border-green-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-green-700">
                主な役割
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>体重を支える</li>
                <li>歩行</li>
                <li>走る</li>
                <li>跳ぶ</li>
                <li>バランスを保つ</li>
                <li>地面からの衝撃を受ける</li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700">
                よくある症状
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>足首を捻った</li>
                <li>外くるぶし周辺が痛い</li>
                <li>内くるぶし周辺が痛い</li>
                <li>足首が不安定に感じる</li>
                <li>足裏やかかとが痛い</li>
                <li>歩くと痛い</li>
              </ul>
            </div>

            <div className="bg-white border border-blue-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">
                関連する筋肉
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>下腿三頭筋</li>
                <li>前脛骨筋</li>
                <li>後脛骨筋</li>
                <li>長腓骨筋</li>
                <li>短腓骨筋</li>
                <li>足底筋</li>
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
                  <li>脛骨</li>
                  <li>腓骨</li>
                  <li>距骨</li>
                  <li>踵骨</li>
                  <li>中足骨</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-blue-700">
                  関連する関節
                </h3>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  <li>距腿関節</li>
                  <li>距骨下関節</li>
                  <li>足根中足関節</li>
                  <li>膝関節</li>
                  <li>股関節</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-green-100 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-800">
              🦴 ボンちゃんポイント
            </h2>

            <p className="mt-4 text-green-900 leading-relaxed">
              足首は、足裏の着き方やつま先の向きによって負担が変わります。
              足裏全体で地面に着くことを意識すると、
              体重を一点で支えにくくなります。
            </p>

            <p className="mt-3 text-green-900 leading-relaxed">
              足首の使い方が整うと、
              膝・股関節・腰にも良い影響が出やすくなります。
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
                  {bodyPartLinks.足首.motions.map((item) => (
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
                  {bodyPartLinks.足首.symptoms.map((item) => (
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
                  {bodyPartLinks.足首.faqs.map((item) => (
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
