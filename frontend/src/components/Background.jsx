"use client";

import { useEffect, useRef } from "react";

const DEFAULT_CHARSET =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789";

export function MatrixBackground({
  className = "",
  children,
  fontSize = 16,
  speed = 1,
  color = "#00ff00",
  charset = DEFAULT_CHARSET,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = container.getBoundingClientRect();

    let width = rect.width;
    let height = rect.height;

    canvas.width = width;
    canvas.height = height;

    let animationId;

    const chars = charset.split("");

    const columnWidth = fontSize;
    let columnCount = Math.ceil(width / columnWidth);

    const createColumn = (x) => ({
      x,
      y: Math.random() * -height,
      speed: (0.5 + Math.random() * 0.5) * speed,
      chars: Array.from(
        { length: 25 },
        () => chars[Math.floor(Math.random() * chars.length)]
      ),
      length: 15 + Math.floor(Math.random() * 15),
    });

    let columns = Array.from(
      { length: columnCount },
      (_, i) => createColumn(i * columnWidth)
    );

    const handleResize = () => {
      const rect = container.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.width = width;
      canvas.height = height;

      columnCount = Math.ceil(width / columnWidth);

      while (columns.length < columnCount) {
        columns.push(createColumn(columns.length * columnWidth));
      }

      columns = columns.slice(0, columnCount);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    const hexToRgb = (hex) => {
      const result =
        /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 0, g: 255, b: 0 };
    };

    const rgb = hexToRgb(color);

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (const column of columns) {
        column.y += column.speed * fontSize * 0.5;

        for (let i = 0; i < column.length; i++) {
          const charY = column.y - i * fontSize;

          if (charY < -fontSize || charY > height + fontSize) continue;

          const opacity =
            i === 0 ? 1 : Math.max(0, 1 - i / column.length);

          if (i === 0) {
            ctx.fillStyle = `rgba(${Math.min(
              255,
              rgb.r + 150
            )}, ${Math.min(255, rgb.g + 150)}, ${Math.min(
              255,
              rgb.b + 150
            )}, ${opacity})`;

            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
          } else {
            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${
              opacity * 0.8
            })`;

            ctx.shadowBlur = 0;
          }

          if (Math.random() < 0.02) {
            column.chars[i % column.chars.length] =
              chars[Math.floor(Math.random() * chars.length)];
          }

          ctx.fillText(
            column.chars[i % column.chars.length],
            column.x,
            charY
          );
        }

        ctx.shadowBlur = 0;

        if (column.y - column.length * fontSize > height) {
          column.y = Math.random() * -height * 0.5;
          column.speed = (0.5 + Math.random() * 0.5) * speed;
          column.length = 15 + Math.floor(Math.random() * 15);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [fontSize, speed, color, charset]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden bg-black ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
}

export default function MatrixBackgroundDemo() {
  return <MatrixBackground />;
}