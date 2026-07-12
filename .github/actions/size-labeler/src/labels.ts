export function getSizeLabel(totalChanges: number): string {

    if (totalChanges < 10) {
        return "size: XS";
    }

    if (totalChanges < 50) {
        return "size: S";
    }

    if (totalChanges < 250) {
        return "size: M";
    }

    if (totalChanges < 500) {
        return "size: L";
    }

    return "size: XL";
}