import Icon from "@/components/Icon";

export default function ShoulderStructureGuide() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">

        <div className="flex items-center gap-4">
          <Icon
          
                   src="/images/icons/honeppi02-icon.png"
          
                   alt="ほねっぴ"
          
                   size={60}
          
                 />

          <div>
            <h2 className="text-3xl font-bold text-green-800">
              肩関節の主な症例と原因
            </h2>

            <p className="text-gray-700 mt-2 leading-relaxed">
              肩の痛みは、使いすぎ・姿勢・生活習慣が
              関係して起こることがあります。
            </p>
          </div>
        </div>

        <div className="bg-green-100 rounded-3xl p-4 flex items-center gap-4">
           <Icon
          
                   src="/images/icons/bonchan02-icon.png"
          
                   alt="ボンちゃん"
          
                    size={60}
                    />

          <p className="text-green-900 leading-relaxed">
            肩は動きが大きい分、負担もかかりやすい関節なんだよ♪
          </p>
        </div>

      </div>

      <div className="bg-green-50 rounded-3xl p-4 shadow-inner">

        <img
          src="/images/bodyparts/shoulder/shoulder-structure-guide.png"
          alt="肩関節の主な症例と原因 図解"
          className="w-full h-auto rounded-2xl shadow-lg"
        />

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">

        <div className="bg-green-50 border border-green-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-green-800">
            ① 上腕二頭筋腱の炎症
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            肩の前側にある上腕二頭筋の腱に負担がかかり、
            炎症を起こして痛みが出ることがあります。
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>・親指を下にして後ろの物を取る</li>
            <li>・寝ながら頭の上の物を取る</li>
            <li>・高い棚の物を繰り返し取る</li>
            <li>・洗濯物を干す</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-blue-800">
            ② 腱板損傷
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            肩を安定させる腱板に繰り返しの負荷がかかり、
            傷ついたり痛みが出ることがあります。
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>・野球、テニス、バレーボールなど</li>
            <li>・腕を上げる仕事や重い物を持つ作業</li>
            <li>・肩を酷使する動作の反復</li>
            <li>・長時間の手枕</li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-orange-800">
            ③ 肩関節周囲炎
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            肩関節の周囲にある筋肉・腱・関節包などに
            炎症や硬さが起こり、痛みや動かしにくさが出ます。
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>・洗濯物を干す</li>
            <li>・髪を結ぶ</li>
            <li>・エプロンを結ぶ</li>
            <li>・肩を繰り返し使う作業</li>
          </ul>
        </div>

      </div>

      <div className="bg-green-100 rounded-3xl p-5 mt-6 flex flex-col md:flex-row items-center gap-4">

        

        <div>
          <Icon
          
                   src="/images/icons/honeppi-icon.png"
          
                   alt="ほねっぴ"
          
                   size={55}
          
                 />
          
                 <h6 className="text-4xl font-bold text-green-700 mt-3">
          
                   ほねっぴポイント </h6>

          <p className="mt-2 text-green-900 leading-relaxed">
            肩の痛みは、肩だけではなく、
            首・肩甲骨・姿勢・手の使い方も関係することがあるよ。
            何気ない動作の繰り返しにも注意してね♪
          </p>
        </div>

      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-yellow-800">
          🎬 次は肩関節アニメーション予定
        </h3>

        <p className="mt-2 text-gray-700 leading-relaxed">
          今後は、腕を上げる・外へ開く・後ろへ回す動きや、
          上腕二頭筋腱・腱板・肩甲骨の動きが分かる
          アニメーションを追加予定です。
        </p>
      </div>

    </section>
  );
}