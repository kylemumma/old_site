$(document).ready(() => {
    $("form").submit((event) => {
        event.preventDefault();

        const months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
        const date = new Date();
        const currentDay = date.getDate().toString();
        const month = months[date.getMonth()];
        const year = date.getFullYear().toString();

        const currentDate =  `${month} ${currentDay} ${year}`;

        let title = $("#title").val();
        let image = $("#image").val();
        let day = $("#day").val();
        let caption = $("#caption").val();

        const dbURL = 'https://programming-blog-backend.herokuapp.com/posts';
        
        if(title === '' && image === '' && day === '' && caption === '') {
            getMostRecentPost()
            .then((res) => {
                let postBody = res.edge_media_to_caption.edges[0].node.text;

                title = postBody.substring(postBody.indexOf('<') + 1, postBody.indexOf('>'));
                image = res.display_url;
                day =postBody.substring(postBody.indexOf('[') + 1, postBody.indexOf(']'));
                caption = postBody.substring(postBody.indexOf(']') + 2, postBody.length);

                const post = {
                    id: 0,
                    date_posted: currentDate,
                    title: title,
                    day: day,
                    image: image,
                    caption: caption
                };
        
                // post to api
                $.ajax({
                    type: "POST",
                    url: dbURL,
                    data: JSON.stringify(post),
                    success: console.log("success"),
                    contentType: 'application/json'
                });              
            });
        } else {
            const post = {
                id: 0,
                date_posted: currentDate,
                title: title,
                day: day,
                image: image,
                caption: caption
            };
            
            // post to api
            $.ajax({
                type: "POST",
                url: dbURL,
                data: JSON.stringify(post),
                success: alert("posted successfully"),
                contentType: 'application/json'
            });
        }
    });
});

async function getInstagramData() {
    const response = await fetch('https://www.instagram.com/kylemummacodes/?__a=1');
    const instagramData = await response.json();

    // gets array of 12 most recent posts
    return instagramData.graphql.user.edge_owner_to_timeline_media.edges;
}

async function getMostRecentPost() {
    const instagramData = await getInstagramData();

    return instagramData[0].node;
}