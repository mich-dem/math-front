export const countAdd = (data: number[], inp: number[]): number => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        if (data[2 * i + 1] + data[2 * i] === inp[i]) {
            sum++;
        }
    }
    return sum;
}