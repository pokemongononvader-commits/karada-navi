import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function WalkPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/motions"
      className="text-green-700 hover:underline"
    >
      ← 動き一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🚶 歩く
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      歩くという動作は、
      股関節・膝関節・足関節が協力して行っています。
      どこか一ヶ所だけが頑張り過ぎると、
      痛みや負担の原因になることがあります。
    </p>

    <img
      src="/images/motions/walk/walk-main.png"
      alt="歩行"
      className="w-72 mx-auto rounded-3xl shadow-lg"
    />

    {/* 歩行に関係する関節 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        歩行に関係する関節
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
            足を前へ出す
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
            地面を蹴る
          </p>
        </Link>

      </div>

    </section>

    {/* 関係する筋肉 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        歩行に関係する筋肉
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">

        <li>● 大殿筋</li>

        <li>● 腸腰筋</li>

        <li>● 大腿四頭筋</li>

        <li>● ハムストリングス</li>

        <li>● 前脛骨筋</li>

        <li>● 腓腹筋</li>

      </ul>

    </section>

    {/* 歩行で起こりやすい症状 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        歩行で起こりやすい症状
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">

        <div className="bg-red-50 rounded-xl p-4">
          膝痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          股関節痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          足首痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          腰痛
        </div>

      </div>

    </section>

    {/* よくある質問 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関連FAQ
      </h2>

      <div className="space-y-3 mt-4">

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 歩いた方がいいですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 膝が痛いのに股関節を見るのはなぜですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 階段と平地ではどちらが負担ですか？
        </div>

      </div>

    </section>

    {/* ほねっぴ */}
    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <Icon
         src="/images/icons/honeppi-icon.png"
         alt="ほねっぴ"
         size={55}
       />
       <h6 className="text-4xl font-bold text-green-700 mt-3">
         ほねっぴポイント </h6>

      <p className="mt-4 text-green-900 leading-relaxed">
        歩くという動作は、
        股関節・膝関節・足関節のチームプレーです。
        痛い場所だけを見るのではなく、
        動き全体を見ることで本当の原因が見えてくることがあります。
      </p>

    </section>
    <ClinicCTA />
  </div>

</main>


);
}
