interface ApiResponse {
  data: {
    hasSucceeded: boolean;
    message: string;
  };
}

function getHumanReadableMessage(response: ApiResponse){
  if(response.data.hasSucceeded){
    return 'Yay! Your action succeeded because: ' + response.data.message;
  }
  return 'Oops, something went wrong.';
}

const apiResponse = {
  data: {
    hasSucceeded: true,
    message: 'Successful log in.',
  },
};

console.log(getHumanReadableMessage(apiResponse));
