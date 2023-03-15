export const randNum = (a: number, b: number): number[] => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * (b - a + 1) + a);
    }
    return arr;
}
