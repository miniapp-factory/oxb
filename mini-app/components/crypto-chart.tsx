"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { supabase } from "@/lib/supabase";

export function CryptoChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<any>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    const newChart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: { backgroundColor: "#111", textColor: "#fff" },
      grid: { vertLines: { color: "#333" }, horzLines: { color: "#333" } },
      crosshair: { mode: CrosshairMode.Normal },
    });
    const lineSeries = newChart.addLineSeries({
      color: "#00ff00",
      lineWidth: 2,
      priceLineVisible: false,
    });
    setChart({ lineSeries, chart: newChart });
    return () => newChart.remove();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data: rows, error } = await supabase
        .from("mood_history")
        .select("*")
        .order("created_at", { ascending: true })
        .limit(50);
      if (error) console.error(error);
      if (rows) {
        const formatted = rows.map((row: any) => ({
          time: new Date(row.created_at).getTime() / 1000,
          value: Number(row.mood_percent),
        }));
        chart?.lineSeries?.setData(formatted);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [chart]);

  return <div ref={chartContainerRef} className="w-full" />;
}
