import { expect } from 'chai'
const theModule = require('../src')

console.log('MODULE:', theModule)

describe('Default module', () => {
	it('Should have content', () => {
		const testVar = new theModule()
		expect(testVar).to.not.be.empty
	})
})