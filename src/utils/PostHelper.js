
const splitPosts = async(posts) => {
    let filteredPosts = {};
    // will hold post arrays in an array
    // first index of any array is the tag corresponding to that array
    let formattedPosts = [];
    const tags = new Set();

    // get all unique tags by putting tags into a set
    for (let item of posts) {
        tags.add(item.tag)
    }

    // assign keys for filteredPosts dict -> gets sorted into corresponding tag key value
    for (let item of tags.keys()) {
        filteredPosts[item] = [];
    };

    // add blog post to correct tag array
    for (let item of posts) {
        filteredPosts[item.tag].push(item);
    }

    // reformat posts to allow for frontend display
    for (let [tag, posts] of Object.entries(filteredPosts)) {
        // add tag to start of 
        posts.unshift(tag);
        formattedPosts.push(posts);
    }
    return formattedPosts;
}

export { splitPosts };