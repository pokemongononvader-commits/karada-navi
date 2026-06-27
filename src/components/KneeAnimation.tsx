export default function KneeAnimation() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        🎬 膝関節アニメーション Ver1.2
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        横から見ると、膝蓋骨の位置や、大腿四頭筋・ハムストリングスの働きが
        より分かりやすくなります。
      </p>

      <div className="bg-green-50 rounded-3xl p-4 overflow-hidden">
        <svg
          viewBox="0 0 980 560"
          className="w-full h-auto"
          role="img"
          aria-label="横向きの膝関節アニメーション"
        >
          <rect x="0" y="0" width="980" height="560" rx="30" fill="#f0fdf4" />

          <text x="40" y="55" fontSize="30" fontWeight="700" fill="#166534">
            膝が曲がる・伸びるしくみ
          </text>

          {/* 説明 */}
          <text x="55" y="105" fontSize="22" fontWeight="700" fill="#b91c1c">
            大腿四頭筋
          </text>
          <text x="55" y="135" fontSize="17" fill="#7f1d1d">
            大腿前面：膝を伸ばす時に働く
          </text>

          <text x="55" y="195" fontSize="22" fontWeight="700" fill="#be185d">
            ハムストリングス
          </text>
          <text x="55" y="225" fontSize="17" fill="#831843">
            大腿後面：膝を曲げる時に働く
          </text>

          {/* 大腿骨 */}
          <g>
            <path
              d="M330 245 C420 160, 545 150, 650 220"
              fill="none"
              stroke="#b45309"
              strokeWidth="46"
              strokeLinecap="round"
            />
            <path
              d="M330 245 C420 160, 545 150, 650 220"
              fill="none"
              stroke="#fff7d6"
              strokeWidth="34"
              strokeLinecap="round"
            />

            <ellipse
              cx="650"
              cy="225"
              rx="48"
              ry="42"
              fill="#fff7d6"
              stroke="#b45309"
              strokeWidth="6"
            />

            <text x="515" y="145" fontSize="22" fontWeight="700" fill="#92400e">
              大腿骨
            </text>
          </g>

          {/* 大腿四頭筋：前面 */}
          <path
            d="M365 210 C450 120, 560 125, 665 205"
            fill="none"
            stroke="#ef4444"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-width"
              values="22;14;22"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* ハムストリングス：後面 */}
          <path
            d="M320 280 C420 335, 555 330, 665 255"
            fill="none"
            stroke="#ec4899"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.75"
          >
            <animate
              attributeName="stroke-width"
              values="12;24;12"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* 関節軸 */}
          <circle cx="650" cy="250" r="8" fill="#14532d" />
          <text x="672" y="258" fontSize="17" fontWeight="700" fill="#14532d">
            膝関節
          </text>

          {/* 下腿：膝から回転 */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 650 250; 55 650 250; 0 650 250"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />

            {/* 脛骨 */}
            <path
              d="M650 255 C720 315, 765 395, 795 500"
              fill="none"
              stroke="#b45309"
              strokeWidth="38"
              strokeLinecap="round"
            />
            <path
              d="M650 255 C720 315, 765 395, 795 500"
              fill="none"
              stroke="#fff7d6"
              strokeWidth="28"
              strokeLinecap="round"
            />

            {/* 腓骨 */}
            <path
              d="M690 275 C755 340, 800 410, 830 495"
              fill="none"
              stroke="#d97706"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M690 275 C755 340, 800 410, 830 495"
              fill="none"
              stroke="#fef3c7"
              strokeWidth="11"
              strokeLinecap="round"
            />

            {/* 足 */}
            <ellipse
              cx="805"
              cy="508"
              rx="78"
              ry="23"
              fill="#fff7d6"
              stroke="#b45309"
              strokeWidth="6"
              transform="rotate(18 805 508)"
            />

            <text x="760" y="385" fontSize="20" fontWeight="700" fill="#92400e">
              脛骨・腓骨
            </text>
          </g>

          {/* 膝蓋骨：膝前面で少し滑る */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -6; 12 12; 0 -6"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
            <ellipse
              cx="690"
              cy="220"
              rx="22"
              ry="30"
              fill="#fed7aa"
              stroke="#ea580c"
              strokeWidth="5"
              transform="rotate(-20 690 220)"
            />
          </g>

          <text x="718" y="220" fontSize="18" fontWeight="700" fill="#c2410c">
            膝蓋骨
          </text>

          {/* 曲げ伸ばし矢印 */}
          <path
            d="M805 230 A120 120 0 0 1 875 350"
            fill="none"
            stroke="#2563eb"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <polygon points="878,370 850,335 894,338" fill="#2563eb" />

          <text x="795" y="205" fontSize="22" fontWeight="700" fill="#1d4ed8">
            曲げる
          </text>
          <text x="840" y="402" fontSize="22" fontWeight="700" fill="#1d4ed8">
            伸ばす
          </text>

          {/* カード */}
          <rect x="55" y="285" width="250" height="95" rx="18" fill="#dbeafe" />
          <text x="75" y="325" fontSize="21" fontWeight="700" fill="#1e40af">
            膝を伸ばす時
          </text>
          <text x="75" y="355" fontSize="16" fill="#1e3a8a">
            大腿四頭筋が働きます
          </text>

          <rect x="55" y="400" width="250" height="95" rx="18" fill="#fee2e2" />
          <text x="75" y="440" fontSize="21" fontWeight="700" fill="#991b1b">
            膝を曲げる時
          </text>
          <text x="75" y="470" fontSize="16" fill="#7f1d1d">
            ハムストリングスが働きます
          </text>

          <rect x="600" y="440" width="310" height="65" rx="18" fill="#fef3c7" />
          <text x="625" y="480" fontSize="18" fontWeight="700" fill="#92400e">
            膝蓋骨は前面で少し滑るように動きます
          </text>
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-blue-800">
            膝を伸ばす時
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            大腿四頭筋が働き、膝を伸ばします。
            立ち上がる・階段を上る・歩く時に大切です。
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-red-800">
            膝を曲げる時
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            ハムストリングスが働き、膝を曲げます。
            歩行やしゃがみ込み、階段を下りる時に関係します。
          </p>
        </div>
      </div>

      <div className="bg-green-100 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-green-900">
          🦴 ボンちゃんポイント
        </h3>
        <p className="mt-2 text-green-900 leading-relaxed">
          横から見ると、膝蓋骨・大腿四頭筋・ハムストリングスの関係が
          分かりやすいよ。膝は筋肉と骨が協力して動いているんだ♪
        </p>
      </div>
    </section>
  );
}