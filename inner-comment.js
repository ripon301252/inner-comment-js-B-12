
const body = document.getElementById('body.container');
body.style.width = '960px'
body.style.margin = '0 auto'

// h1 create
const h1 = document.createElement('h1');
h1.innerText = 'I love tour places'
h1.style.color = 'gray';
body.appendChild(h1)


// Order List create
const ol = document.createElement('ol')
ol.style.color = 'gray'

const li1 = document.createElement('li');
li1.innerText = 'Bandarban';

ol.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'SundarBan';
ol.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Lalbag kella';
ol.appendChild(li3);

const li4 = document.createElement('li')
li4.innerText = 'Sonar gaa';
ol.appendChild(li4)

const li5 = document.createElement('li')
li5.innerText = 'Cox-Bazar';
ol.appendChild(li5)

body.appendChild(ol);


// create another  span 
const span = document.createElement('span');
span.innerText = 'All Comments'
span.style.color = 'gray';
span.style.fontSize = '20px';
span.style.fontWeight = 'bold'
body.appendChild(span)


// div create
const div = document.createElement('div');
div.id = 'new-comment'
body.appendChild(div);


// comment box create
const commentBox = document.createElement('textarea');
commentBox.style.border = '1px solid gray'
commentBox.style.color = 'gray'
commentBox.cols = '35';
commentBox.rows = '4';
commentBox.style.fontSize = '16px'
commentBox.id = 'comment-box'
body.appendChild(commentBox)

// button create
const button = document.createElement('button');
button.id = 'post-title'
button.innerText = 'post';
button.style.backgroundColor = 'gray';
button.style.padding = '5px 18px 5px 18px';
button.style.border = 'none';
button.style.fontSize = '18px'
button.style.color = 'white';
button.style.display = 'block';
body.appendChild(button)


// new comments
document.getElementById('post-title').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const Comment = commentBox.value;

    const newComment = document.getElementById('new-comment');
    const span = document.createElement('span')

    newComment.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target)
    })

    span.style.fontSize = '17px';
    span.style.display = 'block';
    span.style.lineHeight = '1.3';
    span.style.color = ' #708090';
    span.innerText = Comment;

    newComment.appendChild(span)
    commentBox.value = ''
})









// // button2 create
// const button2 = document.createElement('button');
// button2.id = 'add-title'
// button2.innerText = 'Add';
// button2.style.backgroundColor = 'gray';
// button2.style.padding = '5px 18px 5px 18px';
// button2.style.border = 'none';
// button2.style.fontSize = '18px'
// button2.style.color = 'white';
// button2.style.display = 'block';
// button2.style.marginTop = '10px';
// body.appendChild(button2);


// button 1 time use
// document.getElementById('add-title').addEventListener('click', function(){
//     const seat = document.getElementById('new-comment');
//     seat.innerText = 'Seat no. 1';

// })





// div.style.width = '334px';
// div.style.height = '300px';
// div.style.border = '1px solid red'

