import { useEffect, useState } from "react";

type UseScrollSpyOptions = {
  ids: string[];           // 관찰할 섹션 id들
  rootMargin?: string;     // header 높이에 맞춰 위 여백 보정
  threshold?: number;      // 교차 비율
};

export default function useScrollSpy({
  ids,
  rootMargin = "-60px 0px -40% 0px",
  threshold = 0.2,
}: UseScrollSpyOptions) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id")!;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin, threshold]);

  return activeId;
}
