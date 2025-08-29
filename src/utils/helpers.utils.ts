export const hours = (amount: number) => {
    return 1000 * 60 * 60 * amount;
};

export const join = (array: string[]) => {
    return array.join(', ');
};

export const toNumber = (value: string): number => {
    if (value.endsWith('px')) {
        return parseFloat(value.replace('px', ''));
    }
    return parseFloat(value);
};

export const truncateFileName = (name: string, maxLength = 20): string => {
    if (name.length <= maxLength) return name;

    const extIndex = name.lastIndexOf('.');
    const ext = extIndex !== -1 ? name.slice(extIndex) : '';
    const base = name.slice(0, maxLength - ext.length - 3);
    return `${base}...${ext}`;
};

export const isImageFile = (fileName: string) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    return imageExtensions.some((ext) => fileName.toLowerCase().endsWith(ext));
};
