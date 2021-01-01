export function chunkArray(arr, chunkSize) {
    var chunks = []
    if (chunkSize <= 0) return chunks
    for (var i=0,len=arr.length; i<len; i+=chunkSize)
      chunks.push(arr.slice(i,i+chunkSize))
    return chunks
}
