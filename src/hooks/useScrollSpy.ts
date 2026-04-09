import { useEffect, useState } from "react";

type UseScrollSpyOptions = {
  ids: string[];
  rootMargin?: string;
  threshold?: number;
};

export default function useScrollSpy({
  ids,
  rootMargin = "-75px 0px -60% 0px",
  threshold = 0.15,
}: UseScrollSpyOptions) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 현재 화면에서 "활성 후보"만 추림
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        // 화면 상단에 가장 가까운 섹션을 active로
        const topMost = visible.reduce((prev, curr) =>
          curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
        );

        const id = topMost.target.getAttribute("id");
        if (id) setActiveId(id);
      },
      { root: null, rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin, threshold]);

  return activeId;
}