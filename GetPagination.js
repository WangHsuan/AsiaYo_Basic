function getPagination(offset, limit, total){
    //get total pages
    let totalPages = Math.ceil(total/limit);
    //get current page
    let currentPage = Math.floor(offset/limit)+1
    //render pages
    let renderPages = [];
    for(let i = 1; i<totalPages;i++){
        renderPages.push(i)
    }

    renderPages = currentPage<(Math.ceil(totalPages/2))?renderPages.slice(0,5):renderPages.slice(totalPage-5);

    return {
        currentPage:currentPage,
        totalPage:totalPages,
        renderPages:renderPages
    }
}

module.exports = {
    getPagination
}