const RS_STATUS = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4,
};

const GITHUB_URL = "https://api.github.com"

const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHandler;

// 0    |   UNSENT  |   Client has been created. open() not called yet.
// 1	|   OPENED	|   open() has been called.
// 2	|   HEADERS_RECEIVED    |	send() has been called, and headers and status are available.
// 3	|   LOADING	|   Downloading; responseText holds partial data.
// 4	|   DONE	|   The operation is complete.
function apiHandler(response) {
  if (
    requestSender.readyState === RS_STATUS.DONE &&
    requestSender.status === 200
  ) {
    console.log(response.target.response);
  }
}

requestSender.open('GET', `${GITHUB_URL}/users/fammanh`, false)
requestSender.send()

requestSender.open('GET', `${GITHUB_URL}/users/tomas`, false)
requestSender.send()
