import Image from "next/image";

export default function NeckStructureGuide() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-4">
          <img
            src="/honeppi.png"
            alt="ほねっぴ"
            className="w-24 h-auto"
          />

          <div>
            <h2 className="text-3xl font-bold text-green-800">
              首のしくみと痛みの原因・対処法
            </h2>

            <p className="text-gray-700 mt-2 leading-relaxed">
              首の痛みは、筋肉の使いすぎ・急な動き・姿勢のくせが
              関係して起こることがあります。
            </p>
          </div>
        </div>

        <div className="bg-green-100 rounded-3xl p-4 flex items-center gap-4">
          <img
            src="/bone01.png"
            alt="ボンちゃん"
            className="w-24 h-auto"
          />

          <p className="text-green-900 leading-relaxed">
            動かしすぎも、動かさなすぎも注意だよ。
            痛みのない範囲で確認していこう♪
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-3xl p-4 shadow-inner">
        <Image
          src="/images/bodyparts/neck/neck-structure-guide.png"
          alt="首のしくみと痛みの原因・対処法 図解"
          width={1600}
          height={1000}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-green-800">
            ① 寝違え
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            日常生活で一方向の筋肉を使いすぎている状態があり、
            寝ている時にも同じ方向を向き続けることで起こりやすくなります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            そこから急に反対方向を向くと、筋肉が急激に収縮し、
            痛みや炎症、首の動かしにくさにつながることがあります。
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-blue-800">
            ② 頚部捻挫
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            日常生活や仕事で一方向に首を使いやすい方が、
            急に反対方向を向いた時に、筋の緊張や頚椎の捻転が起こり、
            痛みを伴うことがあります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            左右どちらかの胸鎖乳突筋に緊張が起こっていることも多く、
            首を回す・倒す動作で痛みを感じやすくなります。
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-purple-800">
            ③ むち打ち
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            追突や衝突などの衝撃により、頚部が前後にしなり、
            筋肉や靭帯などに機械的な損傷が起こるものです。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            胸鎖乳突筋だけでなく、頚板状筋・僧帽筋・広頚筋など、
            首の前後の筋肉にも負担がかかりやすくなります。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-orange-800">
            ④ 首こり・肩こり・スマホ姿勢
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            スマホを見る姿勢、猫背、パソコン作業、お腹を出す姿勢など、
            同じ姿勢が続くと同じ筋肉ばかりが使われ、
            筋肉が緊張し続けます。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            筋肉の伸び縮みがうまくできなくなると血流が悪くなり、
            疲労が蓄積して首こり・肩こりにつながります。
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-yellow-800">
            ⑤ 自律神経とリラックス
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            首こりや肩こりが続くと、身体が緊張状態になり、
            交感神経が優位になりやすいことがあります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            深呼吸を取り入れ、副交感神経が働きやすい状態を作ることで、
            リラックスしやすくなります。
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-blue-800">
          🔄 首の動かし方
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              基本の動かし方
            </h4>

            <ul className="mt-2 space-y-2 text-gray-700">
              <li>① 向ける方向へ、息を吐きながらゆっくり向く</li>
              <li>② 痛みが出ない限界で10秒止める</li>
              <li>③ 向きにくい方向へ、痛みのない範囲で向く</li>
              <li>④ そこで10秒止める</li>
              <li>⑤ 無理のない範囲で繰り返す</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-red-700">
              やってはいけないこと
            </h4>

            <ul className="mt-2 space-y-2 text-gray-700">
              <li>・痛みを我慢して無理に動かす</li>
              <li>・痛いからといって全く動かさない</li>
              <li>・強く揉みすぎる</li>
              <li>・急に首を回す</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-100 rounded-3xl p-5 mt-6 flex flex-col md:flex-row items-center gap-4">
        <img
          src="/bone01.png"
          alt="ボンちゃん"
          className="w-28 h-auto"
        />

        <div>
          <h3 className="text-xl font-bold text-green-900">
            🦴 ボンちゃんポイント
          </h3>

          <p className="mt-2 text-green-900 leading-relaxed">
            首は、じっとしすぎても緊張が抜けにくいよ。
            痛みのない範囲でゆっくり動かし、深呼吸しながら
            力を抜いていくことが大切なんだ♪
          </p>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-red-700">
          ⚠ こんな時は早めにご相談ください
        </h3>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>・強い痛みが続く</li>
          <li>・手や腕のしびれ、力が入りにくい</li>
          <li>・めまい、吐き気、強い頭痛がある</li>
          <li>・発熱がある</li>
          <li>・事故や強い衝撃の後に痛みが出た</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-yellow-800">
          🎬 次は首の動きアニメーション予定
        </h3>

        <p className="mt-2 text-gray-700 leading-relaxed">
          今後は、首を上に向く・下に向く・左右に回す動きや、
          胸鎖乳突筋、僧帽筋、頚板状筋の働きが分かる
          アニメーションを追加予定です。
        </p>
      </div>

    </section>
  );
}