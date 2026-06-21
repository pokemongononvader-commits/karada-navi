import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";
import KneeStructureGuide from "@/components/KneeStructureGuide";

export default function KneePage() {
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
            膝関節（しつかんせつ）
          </h1>

          <Image
            src="/images/bodyparts/knee.png"
            alt="膝関節"
            width={500}
            height={500}
            className="w-72 mx-auto rounded-3xl shadow-lg"
          />

          <KneeStructureGuide />

          <section className="bg-green-50 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              膝関節とは？
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              膝関節は太ももの骨（大腿骨）と、
              すねの骨（脛骨）をつなぐ大切な関節です。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              歩く・走る・立つ・座るなど、
              日常生活のほとんどの動作で使われています。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              体重を支えるため負担が大きく、
              痛みが出やすい関節でもあります。
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white border border-green-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-green-700">
                主な役割
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>歩行</li>
                <li>階段昇降</li>
                <li>立ち上がり</li>
                <li>しゃがみ込み</li>
                <li>ジャンプ</li>
                <li>正座</li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700">
                よくある症状
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>階段で痛い</li>
                <li>立ち上がりで痛い</li>
                <li>正座ができない</li>
                <li>膝に水が溜まる</li>
                <li>曲げ伸ばしで痛い</li>
                <li>歩くと痛い</li>
              </ul>
            </div>

            <div className="bg-white border border-blue-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">
                関連する筋肉
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>大腿四頭筋</li>
                <li>ハムストリングス</li>
                <li>内転筋群</li>
                <li>腓腹筋</li>
                <li>前脛骨筋</li>
              </ul>
            </div>

          </section>

          <section className="bg-green-100 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-800">
              🦴 ボンちゃんポイント
            </h2>

            <p className="mt-4 text-green-900 leading-relaxed">
              膝だけが悪いとは限りません。
              股関節や足首の動きが悪くなると、
              膝が代わりに頑張りすぎて痛みが出ることがあります。
            </p>

            <p className="mt-3 text-green-900 leading-relaxed">
              一心たけうち接骨院では、
              膝だけでなく身体全体のバランスも確認しながら施術しています。
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
                  {bodyPartLinks.膝.motions.map((item) => (
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
                  {bodyPartLinks.膝.symptoms.map((item) => (
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
                  {bodyPartLinks.膝.faqs.map((item) => (
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