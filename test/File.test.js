const File = artifacts.require("File");

require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('File', (accounts) => {
	let file
	before(async ()=> { 
		file = await File.deployed()

	})
	describe('deployment', async () => {
		it('Deploys Successfully', async ()=>{
		const address = file.address
		assert.notEqual(address, 0x0)
		assert.notEqual(address, '')
		assert.notEqual(address, null)
		assert.notEqual(address, undefined)
		// const address = //
		})
	})
	describe('storage', async ()=>{
		it('updates the fileHash', async ()=>{
			let fileHash
			fileHash = 'abc123'
			await file.set(fileHash)
			const result = await file.get()
			assert.equal(result, fileHash)
		})
	})
})