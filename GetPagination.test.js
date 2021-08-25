const Pagination = require('./GetPagination');

const {getPagination} = Pagination;

test('test pagination function',()=>{
    expect(getPagination(10,5,33)).toEqual({currentPage:3,totalPage:7,renderPages:[1,2,3,4,5]})
})