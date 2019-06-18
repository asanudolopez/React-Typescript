const weights = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
};

export const fonts = {
    weights,
    fontFamily: 'Roboto',
    h1: {
        fontSize: '20px',
        fontWeight: weights.regular,
        letterSpacing: '0.1px',
        lineHeight: '24px',
    },
    h2: {
        fontSize: '20px',
        fontWeight: weights.light,
        letterSpacing: '0.12px',
        lineHeight: '29px',
    },
    h3: {
        fontSize: '17px',
        fontWeight: weights.medium,
        letterSpacing: '0.1px',
        lineHeight: '27px',
    },
    h4: {
        fontSize: '15px',
        fontWeight: weights.medium,
        letterSpacing: '0.1px',
        lineHeight: '26px',
    },
    h5: {
        fontSize: '14px',
        fontWeight: weights.bold,
        letterSpacing: '0.1px',
        lineHeight: '26px',
    },
    body2: {
        fontSize: '12px',
        lineHeight: '17px',
        letterSpacing: '0.1px',
    },
    breadcrumb: {
        fontSize: '11px',
        lineHeight: '13px',
        letterSpacing: '0.12px',
    },
    tableHeader: {
        fontSize: '14px',
        fontWeight: weights.medium,
        lineHeight: '16px',
        letterSpacing: '0.4px',
    },
    userName: {
        fontSize: '13px',
        lineHeight: '15px',
        fontWeight: weights.regular,
    },
    userRole: {
        fontSize: '9.5px',
        lineHeight: '11px',
        letterSpacing: '0.1px',
        fontWeight: weights.regular,
    },
    widget2Heading: {
        fontSize: '17px',
        fontWeight: weights.regular,
        lineHeight: '20px',
        letterSpacing: '0.2px',
    },
    inputLabel: {
        fontSize: '13px',
        lineHeight: '15px',
    },
    navItem: {
        fontSize: '14px',
        letterSpacing: '0.38px',
        lineHeight: '21px',
    },
    button: {
        fontSize: '13px',
        letterSpacing: '0.93px',
        lineHeight: '14px',
        fontWeight: weights.regular,
    },
    boldNumber: {
        fontSize: '20px',
        fontWeight: weights.bold,
        letterSpacing: '0.1px',
        lineHeight: '24px',
    },
    fieldLabel: {
        fontSize: '14px',
        fontWeight: weights.medium,
        letterSpacing: '0.22px',
    },
    fieldAdornment: {
        fontSize: '11px',
        fontWeight: weights.regular,
    },
    errorMessage: {
        fontSize: '11px',
        fontWeight: weights.regular,
    },
    tileTitle: {
        fontSize: '15px',
        fontWeight: weights.regular,
    },
    a: {
        textDecoration: 'underline',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    chip: {
        fontSize: '10px',
        fontWeight: weights.medium,
        letterSpacing: '0.83px',
        lineHeight: '14px',
    },
};
