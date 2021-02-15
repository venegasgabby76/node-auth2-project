module.exports = {
    isValid,
};

function isValid(user) {
    return Boolean(user.username && password && typeof user.password === "string");
}