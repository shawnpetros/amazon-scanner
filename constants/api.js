const key = '9ybp9pedc05gvxo2qpub7sp8xfaw7g'
const expended_key = 'bfgw1oipo87nvnpfmvg7quib42fgq6'
const url = 'https://api.barcodelookup.com/v2/products'

export const API_URL_BUILDER = code => `${url}?barcode=${code}&key=${key}`
