function func(str,a,b)
{
let aIndex = -1 
let bIndex = -1
if(str === "")
{
return -1
}
let s = (str.split("").reverse().join("")) 
if(s.indexOf('a')>s.indexOf('b'))
{
return(s.indexOf('a'))
}
else if(s.indexOf('a')<s.indexOf('b'))
{
return(s.indexOf('b'))
}
else return -1
}

[Приложение](https://test-task-liart-kappa.vercel.app/)
