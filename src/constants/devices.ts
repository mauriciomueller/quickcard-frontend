// devices.ts
export type DevicesType = {
	name: string
	width: number
	height: number
}

export type DevicesObjectType = {
  [key: number]: DevicesType;
};

export const devices: DevicesObjectType = {
  1: { name: 'iPhone SE (1st and 2nd gen)', width: 320, height: 568 },
  2: { name: 'iPhone 6/7/8', width: 375, height: 667 },
  3: { name: 'iPhone 6/7/8 Plus', width: 414, height: 736 },
  4: { name: 'iPhone X/XS/11 Pro', width: 375, height: 812 },
  5: { name: 'iPhone XR/11', width: 414, height: 896 },
  6: { name: 'iPhone 12/12 Pro', width: 390, height: 844 },
  7: { name: 'iPhone 12 Mini', width: 360, height: 780 },
  8: { name: 'iPhone 12 Pro Max', width: 428, height: 926 },
  9: { name: 'Samsung Galaxy S20', width: 360, height: 800 },
  10: { name: 'Samsung Galaxy S21', width: 360, height: 800 },
  11: { name: 'Samsung Galaxy S21 Ultra', width: 412, height: 960 },
  12: { name: 'Samsung Galaxy S10', width: 360, height: 760 },
  13: { name: 'Samsung Galaxy S9', width: 360, height: 740 },
  14: { name: 'Samsung Galaxy S8', width: 360, height: 740 },
  15: { name: 'Samsung Galaxy Note 20', width: 412, height: 869 },
  16: { name: 'Samsung Galaxy Note 20 Ultra', width: 412, height: 960 },
  17: { name: 'Google Pixel 3', width: 360, height: 740 },
  18: { name: 'Google Pixel 3 XL', width: 412, height: 846 },
  19: { name: 'Google Pixel 4', width: 360, height: 760 },
  20: { name: 'Google Pixel 4 XL', width: 412, height: 869 },
  21: { name: 'Google Pixel 5', width: 393, height: 851 },
}