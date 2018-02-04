var https = require('https');
url = 'https://www.google.co.in/?gfe_rd=cr&amp;dcr=0&amp;ei=MC10Wom_LvGK8QeR3Jf4Bg'
buffr = ''
chunk = ''
https.get(url, (response)=>{
    response.on('data',(chunk)=>{buffr+=chunk})
    response.on('error',(err)=>{console.error(err)})
    response.on('end',()=>{
        console.log(buffr.toString('utf-8'));
    })
}).on('error',()=>{console.error(error)})