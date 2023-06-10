function SortAnArrayByToCriteria(array){
    let sorted = array.sort((a,b)=>{
        if (a.length !== b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    })
    console.log(sorted.join("\n"));
}

SortAnArrayByToCriteria(['alpha',
'beta',
'gamma'])
