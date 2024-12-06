export const fetchMockData = async (page: number) => {
    return new Promise<{ id: number; name: string }[]>((resolve) => {
      setTimeout(() => {
        if (page > 5) {
          resolve([]); // 5페이지 이후 데이터 없음
        } else {
          const items = Array.from({ length: 10 }, (_, index) => ({
            id: (page - 1) * 10 + index + 1,
            name: `Item ${(page - 1) * 10 + index + 1}`,
          }));
          resolve(items);
        }
      }, 1000);
    });
  };
  