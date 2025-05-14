function handleGetAPI() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
         let userOutput = '<h2>Post</h2>';
         data.forEach(user => {
            const { id, title, body } = user;
            userOutput +=
               `
               <div class='card card-body mb-3'>
                  <h3><span>Post: ${id}</span> ${title}</h3>
                  <p>${body}</p>
               </div>
         `
         });
         document.getElementById('output').innerHTML = userOutput;
      })
      .catch(error => console.log(error));
};

function handlePostAPI(e) {
   e.preventDefault();
   const title = document.getElementById('titleForm').value;
   const body = document.getElementById('bodyForm').value;
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-type': 'application/json'
      },
      body: JSON.stringify({ title: title, body: body })
   })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
};
document.getElementById('getDataAPI').addEventListener('click', handleGetAPI);
document.getElementById('add-post').addEventListener('submit', handlePostAPI);
