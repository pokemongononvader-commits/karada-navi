import Image from "next/image";
import Icon from "@/components/Icon";

export default function AnkleStructureGuide() {
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
              足関節のしくみと痛みの原因・対処法
            </h2>

            <p className="text-gray-700 mt-2 leading-relaxed">
              足関節は、歩く・走る・跳ぶ動作に関わる大切な関節です。
              足裏の着き方や足首の使い方も、痛みや再負傷に関係します。
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
            足首は体重を支える大切な場所だよ。
            図でしくみを見てみよう♪
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-3xl p-4 shadow-inner">
        <Image
          src="/images/bodyparts/ankle/ankle-structure-guide.png"
          alt="足関節のしくみと痛みの原因・対処法 図解"
          width={1200}
          height={1800}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-green-800">
            ① 足関節捻挫
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            つま先が内側に入って足首を捻ると、
            外果周辺の靭帯に負担がかかります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            つま先が外側を向いて捻ると、
            内果周辺の靭帯に負担がかかります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            靭帯が緩むと、その靭帯が抑えている関節包が外へ出るような状態になり、
            痛みや腫れ、不安定感につながることがあります。
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-blue-800">
            ② 関節包と固定
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            関節包が出た状態を整えずに放置すると、
            痛みや腫れが長引くことがあります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            テーピングなどで正しく圧え、足首を安定させることが大切です。
            ただし、強く貼れば良いわけではなく、角度や固定方向も重要です。
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-orange-800">
            ③ 「癖になる」とは？
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            足首の捻挫が本当に癖になるというより、
            再負傷や日常生活での足の向きにより、
            靭帯が常に伸ばされている状態が多く見られます。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            そのため「また捻った」と感じやすくなりますが、
            新しく痛めている場合もあります。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-yellow-800">
            ④ 足底筋挫傷
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            足底筋挫傷は、つま先立ちが多い人やスポーツをしている方に
            起こりやすい症状です。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            足裏だけでなく、アキレス腱周囲やかかと周囲にも
            痛みが出ることがあります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            アキレス腱をパタパタ動かさず、ゆっくり20秒ほど伸ばすと
            痛みが軽減することがあります。
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-purple-800">
            ⑤ 足首の不安定感
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            歩行中や椅子に腰掛けている時に足首を捻った姿勢が続くと、
            周囲の靭帯が常に伸ばされ、不安定感につながることがあります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            足首の向きや足裏の着き方を整えることで、
            足首だけでなく膝・股関節・腰にも良い影響が期待できます。
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-blue-800">
          🚶 歩行時の足首の使い方
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              足裏全体で着く
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              足の裏全体を地面に着けることを意識します。
              内側・外側・前後を均等に使うことで、
              体重を一点で支えにくくなります。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              引きずらない
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              痛いからと足を引きずると、
              負傷部位に過度な荷重がかかることがあります。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              痛い時は横歩き
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              痛みが強い時は横歩きを行い、
              痛くない足を先に出して、
              痛い足を後から横にそろえるように歩きます。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-red-700">
          ⚠ テーピングの注意点
        </h3>

        <p className="mt-3 text-gray-700 leading-relaxed">
          足関節捻挫や足底筋を保護するテーピングは、
          貼る角度や方向によって効果が変わります。
        </p>

        <p className="mt-3 text-gray-700 leading-relaxed">
          強く貼れば良いわけではなく、
          かえって悪化させてしまう場合もあります。
          自己判断で貼り続けることは避け、
          適切な指導のもとで行いましょう。
        </p>
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
            足首は、足裏の着き方やつま先の向きで負担が変わるよ。
            足裏全体で地面に着くことを意識すると、
            膝・股関節・腰にも良い影響が出やすいんだ♪
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-yellow-800">
          🎬 次は足関節の動きアニメーション予定
        </h3>

        <p className="mt-2 text-gray-700 leading-relaxed">
          今後は、内反・外反・足裏の着き方・歩行時の足首の使い方が分かる
          アニメーションを追加予定です。
        </p>
      </div>

    </section>
  );
}