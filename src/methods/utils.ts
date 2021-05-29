
export const frmBigNum = (num: any, isVenus?: string) => {
    if (isVenus === 'venus') {
        return (Number(num) / 10 ** 8).toFixed(4);
    } else {
        return (Number(num) / 10 ** 18).toFixed(4)
    }
}