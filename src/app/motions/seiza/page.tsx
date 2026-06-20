import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";

export default function SeizaPage() {
return ( <main className="min-h-screen bg-green-50">

  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/motions"
      className="text-green-700 hover:underline"
    >
      ← 動き一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🧎 正座
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      正座は日本人に馴染み深い姿勢ですが、
      膝関節や足関節を大きく曲げるため、
      関節への負担が大きくなります。
      特に膝の痛みがある方では辛く感じることがあります。
    </p>

    <img
      src="/images/motions/seiza/seiza-main.png"
      alt="正座"
      width={1200}
      height={800}
      className="w-72 mx-auto rounded-3xl shadow-lg"
    />

    {/* 関係する関節 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関係する関節
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/body-parts/knee"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            膝関節
          </h3>

          <p className="text-sm mt-2">
            深く曲げる
          </p>
        </Link>

        <Link
          href="/body-parts/ankle"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            足関節
          </h3>

          <p className="text-sm mt-2">
            足の甲を伸ばす
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
            姿勢を安定させる
          </p>
        </Link>

      </div>

    </section>

    {/* 関係する筋肉 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関係する筋肉
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">

        <li>● 大腿四頭筋</li>

        <li>● ハムストリングス</li>

        <li>● 腓腹筋</li>

        <li>● ヒラメ筋</li>

        <li>● 大殿筋</li>

      </ul>

    </section>

    {/* 起こりやすい症状 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        起こりやすい症状
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">

        <div className="bg-red-50 rounded-xl p-4">
          膝痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          変形性膝関節症
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          半月板障害
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          足関節痛
        </div>

      </div>

    </section>

    {/* FAQ */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関連FAQ
      </h2>

      <div className="space-y-3 mt-4">

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 正座で膝が痛くなるのはなぜですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 正座ができないのは関節が硬いからですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 正座は膝に悪いのでしょうか？
        </div>

      </div>

    </section>

    {/* ほねっぴ */}
    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-900">
        🦴 ほねっぴポイント
      </h2>

      <p className="mt-4 text-green-900 leading-relaxed">
        正座ができない原因は、
        膝だけとは限りません。
        股関節や足首の硬さが影響していることもあります。
        痛い場所だけでなく、
        関連する関節全体を見ることが大切です。
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
