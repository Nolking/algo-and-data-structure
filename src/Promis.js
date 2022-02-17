function solution(num) {
    return getData(num)
    .then( function (val) {return getMax(Object.values(val))})
    .then( function (res) {return res;})
}

function getData(num) {
    return Promise.resolve({
        first: 80*num,
        second: 30*num
    })
}

function getMax(numbers) {
    return Promise.resolve(Math.max(...numbers))
}
async function  logSolution(num) {
    console.log(await solution(num))
}
// console.log(await solution(22))

logSolution(33)
// Handle sequence of apis
var post;

// Call the API
fetch('https://jsonplaceholder.typicode.com/posts/5').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable
	post = data;

	// Fetch another API
	return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);
}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (userData) {
	console.log(post, userData);
}).catch(function (error) {
	console.warn(error);
});


// Handle multiple apis at once
let returnedValue; 
 Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        // Log the data to the console
        // You would do something with both sets of data here
        console.log(data);
        return data;
    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });
