var s=Object.defineProperty;var n=(a,t)=>s(a,"name",{value:t,configurable:!0});import{_ as d,g as l,h as f,a7 as m}from"./es.object.get-own-property-descriptor-c4a71770.js";var u=d,C=l,h=f,x=m,c=C.RangeError,i=String.fromCharCode,g=String.fromCodePoint,b=h([].join),E=!!g&&g.length!=1;u({target:"String",stat:!0,arity:1,forced:E},{fromCodePoint:n(function(t){for(var e=[],v=arguments.length,o=0,r;v>o;){if(r=+arguments[o++],x(r,1114111)!==r)throw c(r+" is not a valid code point");e[o]=r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320)}return b(e,"")},"fromCodePoint")});
