export default function ShoulderAbductionAdductionAnimation() {
  const cx = 520;
  const cy = 210;
  const r = 170;

  const polar = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const start = polar(0);
  const abductionEnd = polar(-135);
  const adductionEnd = polar(90);

  const abductionPath = `M ${start.x} ${start.y} A ${r} ${r} 0 0 0 ${abductionEnd.x} ${abductionEnd.y}`;
  const adductionPath = `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${adductionEnd.x} ${adductionEnd.y}`;

  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        🎬 肩関節アニメーション：外転・内転
      </h2>

      <div className="bg-blue-50 rounded-3xl p-4 overflow-hidden">
        <svg viewBox="0 0 920 520" className="w-full h-auto">
          <rect x="0" y="0" width="920" height="520" rx="30" fill="#eff6ff" />

          <text x="40" y="55" fontSize="30" fontWeight="700" fill="#1e40af">
            肩関節の外転・内転
          </text>

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

          {/* 正面の人物 */}
          <circle cx="460" cy="115" r="38" fill="#fde68a" stroke="#92400e" strokeWidth="5" />
          <circle cx="448" cy="115" r="4" fill="#333" />
          <circle cx="472" cy="115" r="4" fill="#333" />
          <path d="M450 135 Q460 145 470 135" fill="none" stroke="#333" strokeWidth="3" />

          <rect
            x="420"
            y="160"
            width="80"
            height="190"
            rx="36"
            fill="#fde68a"
            stroke="#92400e"
            strokeWidth="5"
          />

          {/* 反対側の腕 */}
          <rect
            x="385"
            y="180"
            width="18"
            height="115"
            rx="9"
            fill="#fde68a"
            stroke="#92400e"
            strokeWidth="4"
          />
          <circle cx="394" cy="305" r="11" fill="#fde68a" stroke="#92400e" strokeWidth="4" />

          {/* 外転の軌道 */}
          <path
            d={abductionPath}
            fill="none"
            stroke="#22c55e"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <polygon
            points={`${abductionEnd.x - 8},${abductionEnd.y - 18} ${abductionEnd.x - 25},${abductionEnd.y + 18} ${abductionEnd.x + 12},${abductionEnd.y + 8}`}
            fill="#22c55e"
          />

          {/* 内転の軌道 */}
          <path
            d={adductionPath}
            fill="none"
            stroke="#2563eb"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <polygon
            points={`${adductionEnd.x - 18},${adductionEnd.y + 8} ${adductionEnd.x + 18},${adductionEnd.y + 16} ${adductionEnd.x + 2},${adductionEnd.y - 20}`}
            fill="#2563eb"
          />

          {/* 肩関節 */}
          <circle cx={cx} cy={cy} r="11" fill="#2563eb" />
          <text x={cx + 15} y={cy + 5} fontSize="17" fontWeight="700" fill="#1d4ed8">
            肩関節
          </text>

          {/* 動く腕 */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`0 ${cx} ${cy}; -135 ${cx} ${cy}; 0 ${cx} ${cy}; 90 ${cx} ${cy}; 0 ${cx} ${cy}`}
              keyTimes="0;0.3;0.5;0.8;1"
              dur="5s"
              repeatCount="indefinite"
            />

            <rect
              x={cx}
              y={cy - 11}
              width="95"
              height="22"
              rx="11"
              fill="#bfdbfe"
              stroke="#1d4ed8"
              strokeWidth="4"
            />
            <circle cx={cx + 98} cy={cy} r="11" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
            <rect
              x={cx + 98}
              y={cy - 9}
              width="85"
              height="18"
              rx="9"
              fill="#fde68a"
              stroke="#92400e"
              strokeWidth="4"
            />
            <circle cx={cx + 190} cy={cy} r="12" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
          </g>

          <text x="635" y="125" fontSize="26" fontWeight="700" fill="#15803d">
            外転
          </text>
          <text x="635" y="155" fontSize="18" fill="#166534">
            横から耳の横へ上げる
          </text>

          <text x="655" y="390" fontSize="26" fontWeight="700" fill="#1d4ed8">
            内転
          </text>
          <text x="655" y="420" fontSize="18" fill="#1e40af">
            体の横へ下げる
          </text>

          <rect x="60" y="140" width="300" height="105" rx="20" fill="#dcfce7" />
          <text x="85" y="180" fontSize="22" fontWeight="700" fill="#166534">
            外転
          </text>
          <text x="85" y="212" fontSize="17" fill="#14532d">
            肩の0位置から上方へ
          </text>
          <text x="85" y="237" fontSize="17" fill="#14532d">
            耳の横まで腕を上げます
          </text>

          <rect x="60" y="275" width="300" height="105" rx="20" fill="#dbeafe" />
          <text x="85" y="315" fontSize="22" fontWeight="700" fill="#1d4ed8">
            内転
          </text>
          <text x="85" y="347" fontSize="17" fill="#1e3a8a">
            肩の0位置から下方へ
          </text>
          <text x="85" y="372" fontSize="17" fill="#1e3a8a">
            体の横へ腕を下げます
          </text>
        </svg>
      </div>
    </section>
  );
}