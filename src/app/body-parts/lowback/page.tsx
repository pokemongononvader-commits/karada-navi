import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";
import LowBackStructureGuide from "@/components/LowBackStructureGuide";

export default function LowBackPage() {
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
            腰（こし）
          </h1>

          <Image
            src="/images/bodyparts/lowback.png"
            alt="腰"
            width={500}
            height={500}
            className="w-72 mx-auto rounded-3xl shadow-lg"
          />

          <LowBackStructureGuide />

          <section className="bg-green-50 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              腰とは？
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              腰は上半身と下半身をつなぎ、身体を支える大切な部分です。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              立つ・座る・歩く・物を持つなど、
              日常生活の多くの動作で使われています。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              姿勢や動き方の影響を受けやすく、
              痛みが出やすい場所でもあります。
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white border border-green-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-green-700">
                主な役割
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>身体を支える</li>
                <li>姿勢を保つ</li>
                <li>前後に曲げる</li>
                <li>身体をひねる</li>
                <li>歩行を支える</li>
                <li>重い物を持つ</li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700">
                よくある症状
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>急に腰が痛くなる</li>
                <li>前かがみで痛い</li>
                <li>立ち上がりで痛い</li>
                <li>長く座ると痛い</li>
                <li>足にしびれが出る</li>
                <li>寝返りで痛い</li>
              </ul>
            </div>

            <div className="bg-white border border-blue-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">
                関連する筋肉
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>脊柱起立筋</li>
                <li>腰方形筋</li>
                <li>大殿筋</li>
                <li>中殿筋</li>
                <li>腸腰筋</li>
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
                  <li>腰椎</li>
                  <li>仙骨</li>
                  <li>骨盤</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-blue-700">
                  関連する関節
                </h3>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  <li>腰椎椎間関節</li>
                  <li>仙腸関節</li>
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
              腰だけが悪いとは限りません。
              股関節や骨盤、足の使い方、姿勢のくせが関係して
              腰に負担がかかることがあります。
            </p>

            <p className="mt-3 text-green-900 leading-relaxed">
              一心たけうち接骨院では、
              腰だけでなく身体全体のバランスも確認しながら施術しています。
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
                  {bodyPartLinks.腰.motions.map((item) => (
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
                  {bodyPartLinks.腰.symptoms.map((item) => (
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
                  {bodyPartLinks.腰.faqs.map((item) => (
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