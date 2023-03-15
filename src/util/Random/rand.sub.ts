export const randSub = (a: number, b: number): number[] => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr[2 * i] = Math.floor(Math.random() * (b - a + 1) + a);
        arr[2 * i + 1] = arr[2 * i] + Math.floor(Math.random() * (b - a + 1) + a);
    }
    return arr;
}