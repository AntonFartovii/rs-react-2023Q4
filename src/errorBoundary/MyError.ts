export class MyError extends Error {
  constructor() {
    super('My error!');
  }
}

export const rejectCustomError = async () => {
  throw new MyError();
};
