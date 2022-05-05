export const isToday = (someDate: any) => {
  const today = new Date();
  someDate = new Date(someDate);
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

export const isNumber = (value: any) => typeof Number(value) === "number";
