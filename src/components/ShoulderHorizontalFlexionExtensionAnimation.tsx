export default function ShoulderHorizontalFlexionExtensionAnimation() {
  const cx = 560;
  const cy = 255;
  const r = 185;

  const polar = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const start = polar(0);
  const flexionEnd = polar(-120);
  const extensionEnd = polar(120);

  const flexionPath = `M ${start.x} ${start.y} A ${r} ${r} 0 0 0 ${flexionEnd.x} ${flexionEnd.y}`;
  const extensionPath = `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${extensionEnd.x} ${extensionEnd.y}`;

  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        🎬 肩関節アニメーション：水平屈曲・水平伸展
      </h2>

      <div className="bg-purple-50 rounded-3xl p-4 overflow-hidden">
        <svg viewBox="0 0 920 520" className="w-full h-auto">
          <rect x="0" y="0" width="920" height="520" rx="30" fill="#faf5ff" />

          <text x="40" y="55" fontSize="30" fontWeight="700" fill="#6b21a8">
            肩関節の水平屈曲・水平伸展
          </text>

          <text x="40" y="100" fontSize="18" fill="#374151">
            上から見た図です。肩の高さで腕を前後に動かす様子を表しています。
          </text>

          {/* 0°基準線 */}
          <line
            x1={cx}
            y1={cy}
            x2={start.x + 55}
            y2={start.y}
            stroke="#9ca3af"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <text x={start.x + 65} y={start.y + 6} fontSize="22" fill="#6b7280">
            0°
          </text>

          {/* 前・後 表示 */}
          {/* 前 */}
<polygon
  points="430,132 440,155 420,155"
  fill="#facc15"
/>

<text
  x="417"
  y="123"
  fontSize="22"
  fontWeight="700"
  fill="#92400e"
>
  前
</text>

          <polygon points="430,405 442,375 418,375" fill="#facc15" />
          <text x="415" y="455" fontSize="24" fontWeight="700" fill="#92400e">
            後
          </text>

          {/* 頭 */}
          <circle
            cx="430"
            cy="210"
            r="44"
            fill="#fde68a"
            stroke="#92400e"
            strokeWidth="5"
          />

          {/* 鼻：文字は消して、小さめ三角だけ */}
          <polygon
            points="430,165 418,190 442,190"
            fill="#fbbf24"
            stroke="#92400e"
            strokeWidth="4"
          />

          {/* 体幹：横長楕円 */}
          <ellipse
            cx="430"
            cy="275"
            rx="150"
            ry="48"
            fill="#fde68a"
            stroke="#92400e"
            strokeWidth="5"
          />

          {/* 反対側の肩・腕 */}
          <circle cx="300" cy="275" r="13" fill="#a855f7" />
          <rect
            x="180"
            y="262"
            width="120"
            height="26"
            rx="13"
            fill="#e9d5ff"
            stroke="#7e22ce"
            strokeWidth="4"
          />
          <circle cx="170" cy="275" r="14" fill="#fde68a" stroke="#92400e" strokeWidth="4" />

          {/* 水平屈曲軌道 */}
          <path
            d={flexionPath}
            fill="none"
            stroke="#22c55e"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <polygon
            points={`${flexionEnd.x - 10},${flexionEnd.y - 22} ${flexionEnd.x - 30},${flexionEnd.y + 16} ${flexionEnd.x + 12},${flexionEnd.y + 8}`}
            fill="#22c55e"
          />

          {/* 水平伸展軌道 */}
          <path
            d={extensionPath}
            fill="none"
            stroke="#2563eb"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <polygon
            points={`${extensionEnd.x - 22},${extensionEnd.y + 10} ${extensionEnd.x + 18},${extensionEnd.y + 20} ${extensionEnd.x + 3},${extensionEnd.y - 22}`}
            fill="#2563eb"
          />

          {/* 肩関節 */}
          <circle cx={cx} cy={cy} r="15" fill="#7e22ce" />
          <line
            x1={cx}
            y1={cy}
            x2={cx + 40}
            y2={cy - 35}
            stroke="#7e22ce"
            strokeWidth="3"
          />
          <text x={cx + 45} y={cy - 42} fontSize="22" fontWeight="700" fill="#6b21a8">
            肩関節
          </text>

          {/* 動く腕 */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`0 ${cx} ${cy}; -120 ${cx} ${cy}; 0 ${cx} ${cy}; 120 ${cx} ${cy}; 0 ${cx} ${cy}`}
              keyTimes="0;0.3;0.5;0.8;1"
              dur="5s"
              repeatCount="indefinite"
            />

            <rect
              x={cx}
              y={cy - 11}
              width="105"
              height="22"
              rx="11"
              fill="#ddd6fe"
              stroke="#7e22ce"
              strokeWidth="4"
            />
            <circle cx={cx + 108} cy={cy} r="11" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
            <rect
              x={cx + 108}
              y={cy - 9}
              width="95"
              height="18"
              rx="9"
              fill="#fde68a"
              stroke="#92400e"
              strokeWidth="4"
            />
            <circle cx={cx + 210} cy={cy} r="13" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
          </g>

          <text x="685" y="135" fontSize="30" fontWeight="700" fill="#15803d">
            水平屈曲
          </text>
          <text x="685" y="175" fontSize="21" fill="#166534">
            肩の高さで
          </text>
          <text x="685" y="205" fontSize="21" fill="#166534">
            前方へ動かす
          </text>

          <text x="685" y="390" fontSize="30" fontWeight="700" fill="#1d4ed8">
            水平伸展
          </text>
          <text x="685" y="430" fontSize="21" fill="#1e40af">
            肩の高さで
          </text>
          <text x="685" y="460" fontSize="21" fill="#1e40af">
            後方へ動かす
          </text>

          <rect x="45" y="150" width="240" height="105" rx="20" fill="#dcfce7" />
          <text x="70" y="190" fontSize="24" fontWeight="700" fill="#166534">
            水平屈曲
          </text>
          <text x="70" y="225" fontSize="18" fill="#14532d">
            肩の高さで
          </text>
          <text x="70" y="250" fontSize="18" fill="#14532d">
            前方へ動かします
          </text>

          <rect x="45" y="320" width="240" height="105" rx="20" fill="#dbeafe" />
          <text x="70" y="360" fontSize="24" fontWeight="700" fill="#1d4ed8">
            水平伸展
          </text>
          <text x="70" y="395" fontSize="18" fill="#1e3a8a">
            肩の高さで
          </text>
          <text x="70" y="420" fontSize="18" fill="#1e3a8a">
            後方へ動かします
          </text>
        </svg>
      </div>
    </section>
  );
}