import arrayUnique from './index';


const arr = ["ivan", "likes", "🐕", "🐕", "🐕"];

test('tests uniqueness', () => {
    const uniqueValues = arrayUnique(arr);

    expect(uniqueValues.includes("ivan")).toBeTruthy();
    expect(uniqueValues.includes("likes")).toBeTruthy();
    expect(uniqueValues.includes("🐕")).toBeTruthy();
    expect(uniqueValues).toHaveLength(3);
});