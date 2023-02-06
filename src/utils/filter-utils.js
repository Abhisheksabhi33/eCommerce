export const priceRangeFilter = (
  products,
  isBetween1500to4000,
  isBetween4001to7000,
  isAbove7001
) => {
  const newArrayForPrice = [];
  if (
    isAbove7001 === false &&
    isBetween1500to4000 === false &&
    isBetween4001to7000 === false
  ) {
    return products;
  }

  if (isBetween1500to4000 === true) {
    let newListForPrice = products.filter(
      (item) => item.price >= 1500 && item.price <= 4000
    );
    newArrayForPrice.push(...newListForPrice);
  }
  if (isBetween4001to7000 === true) {
    let newListForPrice = products.filter(
      (item) => item.price >= 4001 && item.price <= 7001
    );
    newArrayForPrice.push(...newListForPrice);
  }
  if (isAbove7001 === true) {
    let newListForPrice = products.filter((item) => item.price >= 7001);
    newArrayForPrice.push(...newListForPrice);
  }

  return newArrayForPrice;
};

export const sortByCategory = (sortCategoryList, loafers, sneakers) => {
  const newArrayForSorting = [];
  if (loafers === false && sneakers === false) {
    return sortCategoryList;
  }
  if (loafers === true) {
    let newListForSorting = sortCategoryList.filter(
      (item) => item.type === "loafers"
    );
    newArrayForSorting.push(...newListForSorting);
  }
  if (sneakers === true) {
    let newListForSorting = sortCategoryList.filter(
      (item) => item.type === "sneakers"
    );
    newArrayForSorting.push(...newListForSorting);
  }

  return newArrayForSorting;
};
