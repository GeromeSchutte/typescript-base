export const aFunction = (): string => {
    const s = 'bbb';
    const mappedString = Array.from(s).map((char: string) => {
        const numericVal = char.charCodeAt(0);
        return String.fromCharCode(numericVal - 1);
    }).join('');
    return mappedString;
};