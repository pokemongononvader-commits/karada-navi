import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";

export default function StairsUpPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/motions"
      className="text-green-700 hover:underline"
    >
      ← 動き一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      ⬆️ 階段を上る
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      階段を上る動作では、
      歩行よりも大きな筋力が必要になります。
      特に股関節や膝関節には体重以上の負荷がかかるため、
      痛みや動かしにくさがあると負担が集中しやすくなります。
    </p>

    <img
      src="/images/motions/stairs-up/stairs-up-main.png"
      alt="階段を上る"
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
          href="/body-parts/hip"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            股関節
          </h3>

          <p className="text-sm mt-2">
            身体を持ち上げる
          </p>
        </Link>

        <Link
          href="/body-parts/knee"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            膝関節
          </h3>

          <p className="text-sm mt-2">
            体重を支える
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
            地面を蹴り出す
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

        <li>● 大殿筋</li>

        <li>● 中殿筋</li>

        <li>● 腸腰筋</li>

        <li>● 大腿四頭筋</li>

        <li>● ハムストリングス</li>

        <li>● 下腿三頭筋（腓腹筋・ヒラメ筋）</li>

      </ul>

    </section>

    {/* 起こりやすい症状 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        階段を上る時に起こりやすい症状
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">

        <div className="bg-red-50 rounded-xl p-4">
          膝痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          変形性膝関節症
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          股関節痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          腰痛
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
          Q. 階段を上ると膝が痛いのはなぜですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 股関節が硬いと階段は上りにくくなりますか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 手すりを使った方が良いですか？
        </div>

      </div>

    </section>

    {/* ほねっぴ */}
    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-900">
        🦴 ほねっぴポイント
      </h2>

      <p className="mt-4 text-green-900 leading-relaxed">
        階段を上る動作では、
        股関節と膝関節が協力して身体を持ち上げています。
        膝が痛い場合でも、
        実は股関節や足関節の動きが影響していることがあります。
        痛い場所だけでなく、
        動作全体を見ることが大切です。
      </p>

    </section>
    <ClinicCTA />
  </div>

</main>


);
}
