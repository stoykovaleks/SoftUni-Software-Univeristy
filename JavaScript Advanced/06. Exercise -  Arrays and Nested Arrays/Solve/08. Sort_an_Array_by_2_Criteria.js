function sortByTwoCriteria(array){
    return array.sort((a,b) =>{
        if(a.length !== b.length){
            return a.length - b.length
        }
        return a.localCompare(b)
    }).join("\n")
}

sortByTwoCriteria([
'alpha', 
'beta', 
'gamma']
)