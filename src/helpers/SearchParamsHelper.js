const createSearchParamsHelper=(filterParams)=>{
    const queryParams=[]

    for(const [key,value] of Object.entries(filterParams)){
        if(Array.isArray(value)&& value.length >0){
            const paramsValue = value.join(',')
            queryParams.push(`${key}=${encodeURIComponent(paramsValue)}`)
        }
    }
    console.log('query',queryParams);
    
    return queryParams.join('&')
}
export default createSearchParamsHelper