const isFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: { [key: string]: unknown }) => {
  const newObject = { ...object };
  Object.keys(newObject).forEach((key) => {
    const result = newObject[key];
    if (isFalsy(result)) {
      delete newObject[key];
    }
  });
  return newObject;
};

// 重置路由
export const resetRouter = () => window.location.href = window.location.origin