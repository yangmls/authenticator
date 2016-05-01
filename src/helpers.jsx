import speakeasy from 'speakeasy';

export const getToken = secret => {
    return speakeasy.totp({
        secret: secret,
        encoding: 'base32'
    });
};
