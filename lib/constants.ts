export const basePath = (process.env.NODE_ENV === 'production' ? '/Nexter' : '');

export const wrapPath = (assetPath: string) => (`${basePath}/${assetPath}`);