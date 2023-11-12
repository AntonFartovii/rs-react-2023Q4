    const ActualReact = jest.requireActual('react');
    jest.mock('react', () => {
      return {
        ...ActualReact,
        useContext: () => ({ response: { info: { pages: 5 } } }),
        currentPage: jest.fn(),
        setCurrentPage: jest.fn(),
      };
    });
