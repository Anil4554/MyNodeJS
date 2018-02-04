var http = require('http')
var url = 'http://www.jetbrains.com/webstorm/'



http.get(url, (response)=>
{
	let c = 0
	response.on('data', (chunk)=>
	{
		console.log(chunk.toString('utf-8'))
		c++;
	})
	response.on('end', ()=>
		{
			console.log('function ended with ${c} chunks')
		})
}
).on('error', ()=>
	{
		console.error('Got error:${error.message}')
	})