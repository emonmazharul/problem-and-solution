
mocha.setup('bdd');
const {
    assert
} = chai;


describe('should calcucalte fibonacci correctly', () => {

    it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(1), [1]);
    })
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(2), [1, 1]);
    })
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(3), [1, 1, 2]);
    })
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(4), [1, 1, 2, 3]);
    })
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(5),[1, 1, 2, 3, 5] );
    })
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(6), [1, 1, 2, 3, 5, 8]);
    })	
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(7),[1, 1, 2, 3, 5, 8, 13] );
    })
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(8),[1, 1, 2, 3, 5, 8, 13, 21] );
    })
   	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(9), [1, 1, 2, 3, 5, 8, 13, 21, 34]);
    })
	it('should find correct fabonacci', () => {
    	assert.equal(fibonacci(10),[1, 1, 2, 3, 5, 8, 13, 21, 34, 55] );
    })
})



function fibonacci(n) {
    let res = [1];
    for (let i = 1; i < n; i++) {
    	console.log(res[res.length-1], res[res.length-2])
    	res.push((res[res.length-1])+(res[res.length-2] || 0) )       
    }

    return res;
}


mocha.run()

