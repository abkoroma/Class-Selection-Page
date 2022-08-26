fetch('http://localhost:4232/posts/1')
  .then(response => response.json())
  .then(response => { console.log(json)
    document.querySelector("container").innerHTML = response.courseList})
