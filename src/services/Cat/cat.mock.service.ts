const CatMockService = {
  async getCats() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 3000);
    });
  },
};

export default CatMockService;
