import { useCallback, MutableRefObject } from "react";

type UseInfiniteScrollProps = {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  observer: MutableRefObject<IntersectionObserver | null>;
};

const useInfiniteScroll = ({
  loading,
  hasMore,
  onLoadMore,
  observer,
}: UseInfiniteScrollProps) => {
  return useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, onLoadMore, observer]
  );
};

export default useInfiniteScroll;
