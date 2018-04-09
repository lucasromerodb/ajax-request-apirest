const loader = document.getElementById('cargar');
const list = document.getElementById('listado');

loader.addEventListener('click', function() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  req.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let content = '';
      response.forEach(function(post) {
        content += `
          <h5>${post.title}</h5>
          <p>${post.body}</p>
        `
      });
      list.innerHTML = content;
    } else {
      console.log('error al cargar');
    }
  }
  req.send();
})
