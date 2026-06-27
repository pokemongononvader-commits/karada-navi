export default function ShoulderFlexionExtensionAnimation() {
  const cx = 540;
  const cy = 195;
  const r = 170;

  const polar = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const start = polar(0);
  const flexEnd = polar(-135);
  const extendEnd = polar(115);

  const flexPath = `M ${start.x} ${start.y} A ${r} ${r} 0 0 0 ${flexEnd.x} ${flexEnd.y}`;
  const extendPath = `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${extendEnd.x} ${extendEnd.y}`;

  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        🎬 肩関節アニメーション：屈曲・伸展 Ver1.2
      </h2>

      <div className="bg-green-50 rounded-3xl p-4 overflow-hidden">
        <svg viewBox="0 0 920 520" className="w-full h-auto">
          <rect x="0" y="0" width="920" height="520" rx="30" fill="#f0fdf4" />

          <text x="40" y="55" fontSize="30" fontWeight="700" fill="#166534">
            肩関節の屈曲・伸展
          </text>

          {/* 0°基準線：肩関節から出す */}
          <line
            x1={cx}
            y1={cy}
            x2={start.x}
            y2={start.y}
            stroke="#9ca3af"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <text x={start.x + 10} y={start.y + 6} fontSize="18" fill="#6b7280">
            0°
          </text>

          {/* 人物 */}
          <circle cx="500" cy="120" r="38" fill="#fde68a" stroke="#92400e" strokeWidth="5" />
          <path d="M535 120 L560 112 L538 132 Z" fill="#fbbf24" stroke="#92400e" strokeWidth="3" />
          <text x="565" y="120" fontSize="16" fill="#92400e">前</text>

          <rect x="460" y="165" width="80" height="185" rx="36" fill="#fde68a" stroke="#92400e" strokeWidth="5" />

          {/* 肩関節 */}
          <circle cx={cx} cy={cy} r="11" fill="#16a34a" />
          <text x={cx + 15} y={cy + 5} fontSize="17" fontWeight="700" fill="#15803d">
            肩関節
          </text>

          {/* 腕 */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`0 ${cx} ${cy}; -135 ${cx} ${cy}; 0 ${cx} ${cy}; 115 ${cx} ${cy}; 0 ${cx} ${cy}`}
              keyTimes="0;0.32;0.52;0.78;1"
              dur="5s"
              repeatCount="indefinite"
            />

            <rect x={cx} y={cy - 11} width="95" height="22" rx="11" fill="#fbbf24" stroke="#92400e" strokeWidth="4" />
            <circle cx={cx + 98} cy={cy} r="11" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
            <rect x={cx + 98} y={cy - 9} width="85" height="18" rx="9" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
            <circle cx={cx + 190} cy={cy} r="12" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
          </g>

          {/* 屈曲軌道：0°から開始 */}
          <path
            d={flexPath}
            fill="none"
            stroke="#22c55e"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <polygon
            points={`${flexEnd.x - 8},${flexEnd.y - 18} ${flexEnd.x - 25},${flexEnd.y + 18} ${flexEnd.x + 12},${flexEnd.y + 8}`}
            fill="#22c55e"
          />

          <text x="650" y="120" fontSize="26" fontWeight="700" fill="#15803d">
            屈曲
          </text>
          <text x="650" y="150" fontSize="18" fill="#166534">
            前方へ上げる
          </text>

          {/* 伸展軌道：0°から開始 */}
          <path
            d={extendPath}
            fill="none"
            stroke="#2563eb"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <polygon
            points={`${extendEnd.x - 18},${extendEnd.y + 8} ${extendEnd.x + 18},${extendEnd.y + 16} ${extendEnd.x + 2},${extendEnd.y - 20}`}
            fill="#2563eb"
          />

          <text x="650" y="390" fontSize="26" fontWeight="700" fill="#1d4ed8">
            伸展
          </text>
          <text x="650" y="420" fontSize="18" fill="#1e40af">
            後方へ上げる
          </text>

          {/* 説明カード */}
          <rect x="60" y="135" width="300" height="105" rx="20" fill="#dcfce7" />
          <text x="85" y="175" fontSize="22" fontWeight="700" fill="#166534">屈曲</text>
          <text x="85" y="207" fontSize="17" fill="#14532d">体の真横から前方へ</text>
          <text x="85" y="232" fontSize="17" fill="#14532d">耳の横まで腕を上げます</text>

          <rect x="60" y="270" width="300" height="105" rx="20" fill="#dbeafe" />
          <text x="85" y="310" fontSize="22" fontWeight="700" fill="#1d4ed8">伸展</text>
          <text x="85" y="342" fontSize="17" fill="#1e3a8a">体の真横から後方へ</text>
          <text x="85" y="367" fontSize="17" fill="#1e3a8a">腕を引き上げます</text>
        </svg>
      </div>
    </section>
  );
}