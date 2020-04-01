function getHumanReadableMessage(response) {
    if (response.data.hasSucceeded) {
        return 'Yay! Your action succeeded because: ' + response.data.message;
    }
    return 'Oops, something went wrong.';
}
var apiResponse = {
    data: {
        hasSucceeded: true,
        message: 'Successful log in.'
    }
};
console.log(getHumanReadableMessage(apiResponse));
