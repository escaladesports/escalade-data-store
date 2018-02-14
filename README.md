# escalade-data-store

An event-based store system for getting Escalade Sports pricing, stock, or other data. Stores all fetched data in a cookie for quick retrieval.

## Installation

```bash
yarn add escalade-data-store
```

## Usage

```javascript
import DataStore from 'escalade-data-store'

class PriceStore extends DataStore{
	...
}
```