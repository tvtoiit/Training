/**
 * 1. Tao va truy cap doi tuong
 * 2. them va xoa thuoc tinh
 * 3. Lap qua cac thuoc tinh cua doi tuong
 * 4. Su dung thuoc tinh trong doi tuong
 * 5. Sao chep doi tuong
 * 6. Doi tuong long nhau
 * 7. Su dung tu khoa this trong doi tuong
 * 8. Doi tuong va mang
 * 9. Update doi tuong
 */

const obj = {
    name: 'Nguyen Van A',
    lop: '12A10'
}

const objCopy = Object.assign({}, obj);
for (let key in objCopy) {
    console.log(key + ': ' + objCopy[key]);
}





