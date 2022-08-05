/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    // first we set up the table and loop through each item 
    const freq1 = {}
    for(const num of nums){
        freq1[num] = freq1[num] + 1 || 1
        
    }
    // best way to solve this is with bucket sort 
    const bucketSort = Array.from( new Array(nums.length + 1), function() { return []; } );
    for(const key in freq1){
        const freq2 = freq1[key]
        const number = parseInt(key)
        bucketSort[freq2].push(number)
    }
    
    const solution = []
    for(let i=bucketSort.length - 1; i>= 0; i--){
        const bucket = bucketSort[i]
        for(let j=0; j < bucket.length; j++){
            solution.push(bucket[j])
        }
    }
    
    return solution.slice(0, k)
   
    //time O(n)
    //space O(n)
};