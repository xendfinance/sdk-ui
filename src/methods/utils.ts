
export const frmBigNum = (num: any, isVenus?: string) => {
    if (isVenus === 'venus') {
        return handlePresi(Number(num) / 10 ** 8);
    } else {
        return handlePresi(Number(num) / 10 ** 18)
    }
}


export const handlePresi = (amount: any) => {
    if (amount) {
        return String(amount.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0]);
    } else return '0'
}

export const randomId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let gen = '';
    const value = Math.floor(Math.random() * (Math.floor(12) - Math.ceil(3))) + Math.ceil(3);
    for (let i = 0; i < value; i++) {
        gen += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return gen;
};
