import { expect } from 'chai'
import DataStore from '../src'

describe('Default module', () => {
	it('Should have content', () => {
		const testVar = new DataStore()
		expect(testVar).to.not.be.empty
	})
})