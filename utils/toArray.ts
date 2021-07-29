export const toArray = (data: string): (string | number)[][] => {
  return data.split("\n").map((v) =>
    v.split(",").map((o) => {
      if (o !== "") {
        return isNaN(Number(o)) ? o : Number(o);
      }
      return 0;
    }),
  );
};

export const toObject = (data: string): { [key: string]: number }[] => {
  const arr = toArray(data);
  const result = [];
  const headers = arr[0] as string[];

  for (let i = 1; i < arr.length; i++) {
    const obj: { [key: string]: number } = {};

    const words = arr[i] as number[];
    for (let j = 0; j < words.length; j++) {
      obj[headers[j].trim()] = words[j];
    }

    result.push(obj);
  }

  return result;
};
