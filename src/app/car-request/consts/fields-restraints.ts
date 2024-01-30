export const fullNameLength = {
    min: 6,
    max: 24,
}

export const addressLength = {
    min: 5,
    max: 35
}

export const cityLength = {
    min: 5,
    max: 20
}

export const contryLength = {
    min: 5,
    max: 20,
};

export const hobbiesLength = {
    min: 1,
    max: 5,
}

export const hobbyLength = {
    min: 5,
    max: 23,
}

export const nameRegex = RegExp('\b[a-zA-Z]{3,8}(?:\s+[a-zA-Z]{3,8}){1,2}\b');
export const cityRegex = RegExp('/\b(?:[a-zA-Z]{5,10}(?:\s+[a-zA-Z]{5,10})?)\b/');
export const onWordRegex = RegExp('\b[a-zA-Z]{3,25}\b');
export const addressRegex = RegExp('\b[\d]{1,5}(?:\s+[a-zA-Z]{4,10}){1,3}\b');

