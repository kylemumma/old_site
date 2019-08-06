const postsElement = document.querySelector("#posts");

fetch('https://crudpi.io/c4989d/posts')
    .then(res => res.json())
    .then(posts => {
        console.log(posts);

        for(let i = posts.length - 1; i >= 0; i--) {
            const div = document.createElement('div');
            div.id = 'post'

            const row = document.createElement('div');
            row.className = 'row container';

            const col = document.createElement('div');
            col.className = 'col';

            const title = document.createElement('h3');
            title.id = 'title';
            title.textContent = posts[i].title;

            const author = document.createElement('h5');
            author.id = author;
            author.textContent = posts[i].author;

            const rating = document.createElement('div');
            rating.id = 'rating';

            let ratingInt = parseInt(posts[i].rating * 2);

            let ratingHTML = '';
            for(let j = 0; j < 5; j++) {
                if(ratingInt >= 2) {
                    ratingHTML += '<i class="fas fa-star"></i>'
                    ratingInt -= 2;
                } else if(ratingInt >= 1) {
                    ratingHTML += '<i class="fas fa-star-half-alt"></i>'
                    ratingInt -= 1;
                } else {
                    ratingHTML += '<i class="far fa-star"></i>'
                }
            }

            rating.innerHTML = ratingHTML;
            console.log(rating.innerHTML);

            const date = document.createElement('h5');
            date.id = 'date';
            date.textContent = posts[i].date;

            const body = document.createElement('p');
            body.id = 'body';
            body.textContent = posts[i].body;

            const img = document.createElement('img');
            img.src = posts[i].imageUrl;

            div.appendChild(row);
            row.appendChild(col);

            col.appendChild(title);
            col.appendChild(author);
            col.appendChild(rating);
            col.appendChild(date);
            col.appendChild(body);

            div.appendChild(img);

            postsElement.appendChild(div);
        }
    });