export const randDiv = (a: number, b: number): number[] => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr[2 * i] = Math.floor(Math.random() * b + a);
        arr[2 * i + 1] = arr[2 * i] * Math.floor(Math.random() * b + a);
    }
    return arr;
}