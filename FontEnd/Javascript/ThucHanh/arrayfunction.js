/**
 * 1. map()
 * 2. filter()
 * 3. Array.toString()
 * 4. concat();
 * 5. every();
 * 6. fill()
 * 7.find()
 * 8.findIndex()
 * 9. forEarch();
 * 10. indexOf();
 * 11 isArray()
 * 12. join()
 * 13. lastIndexOf()
 * 14. reverse()
 * 15. pop()
 * 16. push()
 * 17. reduce()
 * 18. reduceRight()
 * 19. shift()
 * 20. slice()
 * 21 some()
 * 22. sort()
 * 23. splice()
 * 24. array.unshift()
 * 25. array.valueOf()
 */

Array.prototype.map2 = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const current = numbers.map2(function (num, i, numbers) {
    return num * 2;
});

console.log(current);
