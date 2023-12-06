export const agesData = [
  { value: '10ages', label: '10대' },
  { value: '20ages', label: '20대' },
  { value: '30ages', label: '30대' },
  { value: '40ages', label: '40대' },
  { value: '50ages', label: '50대' },
  { value: '60ages', label: '60대 이상' }
];

export const categoryData = [
  '카테고리',
  '커피',
  '음료',
  '아이스크림/디저트',
  '빽스치노'
];

function getCountData(data) {
  return data.reduce((result, item) => {
    return {
      ...result,
      [item.value]: {
        ...item,
        count: 0
      }
    };
  }, {});
}

export const getAgesCountData = () => getCountData(agesData);
export const getGenderCountData = () =>
  getCountData([
    { value: 'female', label: '여성' },
    { value: 'male', label: '남성' }
  ]);
