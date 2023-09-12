/*! Retype v3.4.1 | retype.com | Copyright 2023. Object.NET, Inc. All rights reserved. */

/*! For license information please see lunr.js.LICENSE.txt */
(()=>{var e={1336:(e,t,r)=>{var i,n;!function(){var s,o,a,u,l,c,h,d,f,p,y,m,g,x,v,w,Q,k,S,b,E,L,P,T,O,I,R,F,_,N,j=function(e){var t=new j.Builder;return t.pipeline.add(j.trimmer,j.stopWordFilter,j.stemmer),t.searchPipeline.add(j.stemmer),e.call(t,t),t.build()};j.version="2.3.9",j.utils={},j.utils.warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),j.utils.asString=function(e){return null==e?"":e.toString()},j.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),i=0;i<r.length;i++){var n=r[i],s=e[n];if(Array.isArray(s))t[n]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[n]=s}}return t},j.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},j.FieldRef.joiner="/",j.FieldRef.fromString=function(e){var t=e.indexOf(j.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),i=e.slice(t+1);return new j.FieldRef(i,r,e)},j.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+j.FieldRef.joiner+this.docRef),this._stringValue},j.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},j.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},j.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},j.Set.prototype.contains=function(e){return!!this.elements[e]},j.Set.prototype.intersect=function(e){var t,r,i,n=[];if(e===j.Set.complete)return this;if(e===j.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),i=Object.keys(t.elements);for(var s=0;s<i.length;s++){var o=i[s];o in r.elements&&n.push(o)}return new j.Set(n)},j.Set.prototype.union=function(e){return e===j.Set.complete?j.Set.complete:e===j.Set.empty?this:new j.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},j.idf=function(e,t){var r=0;for(var i in e)"_index"!=i&&(r+=Object.keys(e[i]).length);var n=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(n))},j.Token=function(e,t){this.str=e||"",this.metadata=t||{}},j.Token.prototype.toString=function(){return this.str},j.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},j.Token.prototype.clone=function(e){return e=e||function(e){return e},new j.Token(e(this.str,this.metadata),this.metadata)},j.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new j.Token(j.utils.asString(e).toLowerCase(),j.utils.clone(t))}));for(var r=e.toString().toLowerCase(),i=r.length,n=[],s=0,o=0;s<=i;s++){var a=s-o;if(r.charAt(s).match(j.tokenizer.separator)||s==i){if(a>0){var u=j.utils.clone(t)||{};u.position=[o,a],u.index=n.length,n.push(new j.Token(r.slice(o,s),u))}o=s+1}}return n},j.tokenizer.separator=/[\s\-]+/,j.Pipeline=function(){this._stack=[]},j.Pipeline.registeredFunctions=Object.create(null),j.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&j.utils.warn("Overwriting existing registered function: "+t),e.label=t,j.Pipeline.registeredFunctions[e.label]=e},j.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||j.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},j.Pipeline.load=function(e){var t=new j.Pipeline;return e.forEach((function(e){var r=j.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},j.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach((function(e){j.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},j.Pipeline.prototype.after=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},j.Pipeline.prototype.before=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},j.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},j.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var i=this._stack[r],n=[],s=0;s<e.length;s++){var o=i(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)n.push(o[a]);else n.push(o)}e=n}return e},j.Pipeline.prototype.runString=function(e,t){var r=new j.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},j.Pipeline.prototype.reset=function(){this._stack=[]},j.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return j.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},j.Vector=function(e){this._magnitude=0,this.elements=e||[]},j.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,i=r-t,n=Math.floor(i/2),s=this.elements[2*n];i>1&&(s<e&&(t=n),s>e&&(r=n),s!=e);)i=r-t,n=t+Math.floor(i/2),s=this.elements[2*n];return s==e||s>e?2*n:s<e?2*(n+1):void 0},j.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},j.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var i=this.positionForIndex(e);this.elements[i]==e?this.elements[i+1]=r(this.elements[i+1],t):this.elements.splice(i,0,e,t)},j.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var i=this.elements[r];e+=i*i}return this._magnitude=Math.sqrt(e)},j.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,i=e.elements,n=r.length,s=i.length,o=0,a=0,u=0,l=0;u<n&&l<s;)(o=r[u])<(a=i[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*i[l+1],u+=2,l+=2);return t},j.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},j.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},j.Vector.prototype.toJSON=function(){return this.elements},j.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},h="^("+(l="[^aeiou][^aeiouy]*")+")?"+(c=(u="[aeiouy]")+"[aeiou]*")+l+"("+c+")?$",d="^("+l+")?"+c+l+c+l,f="^("+l+")?"+u,p=new RegExp("^("+l+")?"+c+l),y=new RegExp(d),m=new RegExp(h),g=new RegExp(f),x=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,w=/^(.+?)eed$/,Q=/^(.+?)(ed|ing)$/,k=/.$/,S=/(at|bl|iz)$/,b=new RegExp("([^aeiouylsz])\\1$"),E=new RegExp("^"+l+u+"[^aeiouwxy]$"),L=/^(.+?[^aeiou])y$/,P=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,T=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,O=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,I=/^(.+?)(s|t)(ion)$/,R=/^(.+?)e$/,F=/ll$/,_=new RegExp("^"+l+u+"[^aeiouwxy]$"),N=function(e){var t,r,i,n,s,u,l;if(e.length<3)return e;if("y"==(i=e.substr(0,1))&&(e=i.toUpperCase()+e.substr(1)),s=v,(n=x).test(e)?e=e.replace(n,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=Q,(n=w).test(e)){var c=n.exec(e);(n=p).test(c[1])&&(n=k,e=e.replace(n,""))}else s.test(e)&&(t=(c=s.exec(e))[1],(s=g).test(t)&&(u=b,l=E,(s=S).test(e=t)?e+="e":u.test(e)?(n=k,e=e.replace(n,"")):l.test(e)&&(e+="e")));return(n=L).test(e)&&(e=(t=(c=n.exec(e))[1])+"i"),(n=P).test(e)&&(t=(c=n.exec(e))[1],r=c[2],(n=p).test(t)&&(e=t+o[r])),(n=T).test(e)&&(t=(c=n.exec(e))[1],r=c[2],(n=p).test(t)&&(e=t+a[r])),s=I,(n=O).test(e)?(t=(c=n.exec(e))[1],(n=y).test(t)&&(e=t)):s.test(e)&&(t=(c=s.exec(e))[1]+c[2],(s=y).test(t)&&(e=t)),(n=R).test(e)&&(t=(c=n.exec(e))[1],s=m,u=_,((n=y).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=y,(n=F).test(e)&&s.test(e)&&(n=k,e=e.replace(n,"")),"y"==i&&(e=i.toLowerCase()+e.substr(1)),e},function(e){return e.update(N)}),j.Pipeline.registerFunction(j.stemmer,"stemmer"),j.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},j.stopWordFilter=j.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),j.Pipeline.registerFunction(j.stopWordFilter,"stopWordFilter"),j.trimmer=function(e){return e.update((function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")}))},j.Pipeline.registerFunction(j.trimmer,"trimmer"),j.TokenSet=function(){this.final=!1,this.edges={},this.id=j.TokenSet._nextId,j.TokenSet._nextId+=1},j.TokenSet._nextId=1,j.TokenSet.fromArray=function(e){for(var t=new j.TokenSet.Builder,r=0,i=e.length;r<i;r++)t.insert(e[r]);return t.finish(),t.root},j.TokenSet.fromClause=function(e){return"editDistance"in e?j.TokenSet.fromFuzzyString(e.term,e.editDistance):j.TokenSet.fromString(e.term)},j.TokenSet.fromFuzzyString=function(e,t){for(var r=new j.TokenSet,i=[{node:r,editsRemaining:t,str:e}];i.length;){var n=i.pop();if(n.str.length>0){var s,o=n.str.charAt(0);o in n.node.edges?s=n.node.edges[o]:(s=new j.TokenSet,n.node.edges[o]=s),1==n.str.length&&(s.final=!0),i.push({node:s,editsRemaining:n.editsRemaining,str:n.str.slice(1)})}if(0!=n.editsRemaining){if("*"in n.node.edges)var a=n.node.edges["*"];else a=new j.TokenSet,n.node.edges["*"]=a;if(0==n.str.length&&(a.final=!0),i.push({node:a,editsRemaining:n.editsRemaining-1,str:n.str}),n.str.length>1&&i.push({node:n.node,editsRemaining:n.editsRemaining-1,str:n.str.slice(1)}),1==n.str.length&&(n.node.final=!0),n.str.length>=1){if("*"in n.node.edges)var u=n.node.edges["*"];else u=new j.TokenSet,n.node.edges["*"]=u;1==n.str.length&&(u.final=!0),i.push({node:u,editsRemaining:n.editsRemaining-1,str:n.str.slice(1)})}if(n.str.length>1){var l,c=n.str.charAt(0),h=n.str.charAt(1);h in n.node.edges?l=n.node.edges[h]:(l=new j.TokenSet,n.node.edges[h]=l),1==n.str.length&&(l.final=!0),i.push({node:l,editsRemaining:n.editsRemaining-1,str:c+n.str.slice(2)})}}}return r},j.TokenSet.fromString=function(e){for(var t=new j.TokenSet,r=t,i=0,n=e.length;i<n;i++){var s=e[i],o=i==n-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new j.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},j.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),i=Object.keys(r.node.edges),n=i.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<n;s++){var o=i[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},j.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,i=0;i<r;i++){var n=t[i];e=e+n+this.edges[n].id}return e},j.TokenSet.prototype.intersect=function(e){for(var t=new j.TokenSet,r=void 0,i=[{qNode:e,output:t,node:this}];i.length;){r=i.pop();for(var n=Object.keys(r.qNode.edges),s=n.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=n[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new j.TokenSet).final=p,r.output.edges[h]=y),i.push({qNode:f,output:y,node:d})}}}return t},j.TokenSet.Builder=function(){this.previousWord="",this.root=new j.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},j.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var i=0;i<e.length&&i<this.previousWord.length&&e[i]==this.previousWord[i];i++)r++;for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,i=r;i<e.length;i++){var n=new j.TokenSet,s=e[i];t.edges[s]=n,this.uncheckedNodes.push({parent:t,char:s,child:n}),t=n}t.final=!0,this.previousWord=e},j.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},j.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],i=r.child.toString();i in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[i]:(r.child._str=i,this.minimizedNodes[i]=r.child),this.uncheckedNodes.pop()}},j.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},j.Index.prototype.search=function(e){return this.query((function(t){new j.QueryParser(e,t).parse()}))},j.Index.prototype.query=function(e){for(var t=new j.Query(this.fields),r=Object.create(null),i=Object.create(null),n=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)i[this.fields[a]]=new j.Vector;for(e.call(t,t),a=0;a<t.clauses.length;a++){var u,l=t.clauses[a],c=j.Set.empty;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var h=0;h<u.length;h++){var d=u[h];l.term=d;var f=j.TokenSet.fromClause(l),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&l.presence===j.Query.presence.REQUIRED){for(var y=0;y<l.fields.length;y++)s[R=l.fields[y]]=j.Set.empty;break}for(var m=0;m<p.length;m++){var g=p[m],x=this.invertedIndex[g],v=x._index;for(y=0;y<l.fields.length;y++){var w=x[R=l.fields[y]],Q=Object.keys(w),k=g+"/"+R,S=new j.Set(Q);if(l.presence==j.Query.presence.REQUIRED&&(c=c.union(S),void 0===s[R]&&(s[R]=j.Set.complete)),l.presence!=j.Query.presence.PROHIBITED){if(i[R].upsert(v,l.boost,(function(e,t){return e+t})),!n[k]){for(var b=0;b<Q.length;b++){var E,L=Q[b],P=new j.FieldRef(L,R),T=w[L];void 0===(E=r[P])?r[P]=new j.MatchData(g,R,T):E.add(g,R,T)}n[k]=!0}}else void 0===o[R]&&(o[R]=j.Set.empty),o[R]=o[R].union(S)}}}if(l.presence===j.Query.presence.REQUIRED)for(y=0;y<l.fields.length;y++)s[R=l.fields[y]]=s[R].intersect(c)}var O=j.Set.complete,I=j.Set.empty;for(a=0;a<this.fields.length;a++){var R;s[R=this.fields[a]]&&(O=O.intersect(s[R])),o[R]&&(I=I.union(o[R]))}var F=Object.keys(r),_=[],N=Object.create(null);if(t.isNegated())for(F=Object.keys(this.fieldVectors),a=0;a<F.length;a++){P=F[a];var C=j.FieldRef.fromString(P);r[P]=new j.MatchData}for(a=0;a<F.length;a++){var D=(C=j.FieldRef.fromString(F[a])).docRef;if(O.contains(D)&&!I.contains(D)){var A,B=this.fieldVectors[C],z=i[C.fieldName].similarity(B);if(void 0!==(A=N[D]))A.score+=z,A.matchData.combine(r[C]);else{var V={ref:D,score:z,matchData:r[C]};N[D]=V,_.push(V)}}}return _.sort((function(e,t){return t.score-e.score}))},j.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:j.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},j.Index.load=function(e){var t={},r={},i=e.fieldVectors,n=Object.create(null),s=e.invertedIndex,o=new j.TokenSet.Builder,a=j.Pipeline.load(e.pipeline);e.version!=j.version&&j.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+j.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<i.length;u++){var l=(h=i[u])[0],c=h[1];r[l]=new j.Vector(c)}for(u=0;u<s.length;u++){var h,d=(h=s[u])[0],f=h[1];o.insert(d),n[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=n,t.tokenSet=o.root,t.pipeline=a,new j.Index(t)},j.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=j.tokenizer,this.pipeline=new j.Pipeline,this.searchPipeline=new j.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},j.Builder.prototype.ref=function(e){this._ref=e},j.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},j.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},j.Builder.prototype.k1=function(e){this._k1=e},j.Builder.prototype.add=function(e,t){var r=e[this._ref],i=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var n=0;n<i.length;n++){var s=i[n],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new j.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(null==h[f]&&(h[f]=0),h[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<i.length;y++)p[i[y]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],x=f.metadata[g];null==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(x)}}}},j.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},i={},n=0;n<t;n++){var s=j.FieldRef.fromString(e[n]),o=s.fieldName;i[o]||(i[o]=0),i[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(n=0;n<a.length;n++){var u=a[n];r[u]=r[u]/i[u]}this.averageFieldLength=r},j.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,i=Object.create(null),n=0;n<r;n++){for(var s=j.FieldRef.fromString(t[n]),o=s.fieldName,a=this.fieldLengths[s],u=new j.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,g,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===i[x]?(y=j.idf(this.invertedIndex[x],this.documentCount),i[x]=y):y=i[x],m=y*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),m*=d,m*=f,g=Math.round(1e3*m)/1e3,u.insert(w,g)}e[s]=u}this.fieldVectors=e},j.Builder.prototype.createTokenSet=function(){this.tokenSet=j.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},j.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new j.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},j.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},j.MatchData=function(e,t,r){for(var i=Object.create(null),n=Object.keys(r||{}),s=0;s<n.length;s++){var o=n[s];i[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=i)},j.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var i=t[r],n=Object.keys(e.metadata[i]);null==this.metadata[i]&&(this.metadata[i]=Object.create(null));for(var s=0;s<n.length;s++){var o=n[s],a=Object.keys(e.metadata[i][o]);null==this.metadata[i][o]&&(this.metadata[i][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[i][o][l]?this.metadata[i][o][l]=e.metadata[i][o][l]:this.metadata[i][o][l]=this.metadata[i][o][l].concat(e.metadata[i][o][l])}}}},j.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var i=Object.keys(r),n=0;n<i.length;n++){var s=i[n];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},j.Query=function(e){this.clauses=[],this.allFields=e},j.Query.wildcard=new String("*"),j.Query.wildcard.NONE=0,j.Query.wildcard.LEADING=1,j.Query.wildcard.TRAILING=2,j.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},j.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=j.Query.wildcard.NONE),e.wildcard&j.Query.wildcard.LEADING&&e.term.charAt(0)!=j.Query.wildcard&&(e.term="*"+e.term),e.wildcard&j.Query.wildcard.TRAILING&&e.term.slice(-1)!=j.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=j.Query.presence.OPTIONAL),this.clauses.push(e),this},j.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=j.Query.presence.PROHIBITED)return!1;return!0},j.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,j.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},j.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},j.QueryParseError.prototype=new Error,j.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},j.QueryLexer.prototype.run=function(){for(var e=j.QueryLexer.lexText;e;)e=e(this)},j.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,i=0;i<this.escapeCharPositions.length;i++)r=this.escapeCharPositions[i],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},j.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},j.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},j.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return j.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},j.QueryLexer.prototype.width=function(){return this.pos-this.start},j.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},j.QueryLexer.prototype.backup=function(){this.pos-=1},j.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=j.QueryLexer.EOS&&this.backup()},j.QueryLexer.prototype.more=function(){return this.pos<this.length},j.QueryLexer.EOS="EOS",j.QueryLexer.FIELD="FIELD",j.QueryLexer.TERM="TERM",j.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",j.QueryLexer.BOOST="BOOST",j.QueryLexer.PRESENCE="PRESENCE",j.QueryLexer.lexField=function(e){return e.backup(),e.emit(j.QueryLexer.FIELD),e.ignore(),j.QueryLexer.lexText},j.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(j.QueryLexer.TERM)),e.ignore(),e.more())return j.QueryLexer.lexText},j.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.EDIT_DISTANCE),j.QueryLexer.lexText},j.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.BOOST),j.QueryLexer.lexText},j.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(j.QueryLexer.TERM)},j.QueryLexer.termSeparator=j.tokenizer.separator,j.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==j.QueryLexer.EOS)return j.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return j.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if(t.match(j.QueryLexer.termSeparator))return j.QueryLexer.lexTerm}else e.escapeCharacter()}},j.QueryParser=function(e,t){this.lexer=new j.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},j.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=j.QueryParser.parseClause;e;)e=e(this);return this.query},j.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},j.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},j.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},j.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case j.QueryLexer.PRESENCE:return j.QueryParser.parsePresence;case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new j.QueryParseError(r,t.start,t.end)}},j.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=j.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=j.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new j.QueryParseError(r,t.start,t.end)}var i=e.peekLexeme();if(null==i)throw r="expecting term or field, found nothing",new j.QueryParseError(r,t.start,t.end);switch(i.type){case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:throw r="expecting term or field, found '"+i.type+"'",new j.QueryParseError(r,i.start,i.end)}}},j.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),i="unrecognised field '"+t.str+"', possible fields: "+r;throw new j.QueryParseError(i,t.start,t.end)}e.currentClause.fields=[t.str];var n=e.peekLexeme();if(null==n)throw i="expecting term, found nothing",new j.QueryParseError(i,t.start,t.end);if(n.type===j.QueryLexer.TERM)return j.QueryParser.parseTerm;throw i="expecting term, found '"+n.type+"'",new j.QueryParseError(i,n.start,n.end)}},j.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+r.type+"'";throw new j.QueryParseError(i,r.start,r.end)}else e.nextClause()}},j.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var i="edit distance must be numeric";throw new j.QueryParseError(i,t.start,t.end)}e.currentClause.editDistance=r;var n=e.peekLexeme();if(null!=n)switch(n.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:throw i="Unexpected lexeme type '"+n.type+"'",new j.QueryParseError(i,n.start,n.end)}else e.nextClause()}},j.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var i="boost must be numeric";throw new j.QueryParseError(i,t.start,t.end)}e.currentClause.boost=r;var n=e.peekLexeme();if(null!=n)switch(n.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:throw i="Unexpected lexeme type '"+n.type+"'",new j.QueryParseError(i,n.start,n.end)}else e.nextClause()}},void 0===(n="function"==typeof(i=function(){return j})?i.call(t,r,t,e):i)||(e.exports=n)}()}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";r.r(i),r.d(i,{default:()=>s});var e=r(1336),t=r.n(e),n=function(){return n=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};const s={init:function(e){e(t())},createIndex:function(e){return t()((function(){var r=this;this.ref("id"),this.field("text"),t().multiLanguage&&t().languages&&this.use(t().multiLanguage.apply(t(),t().languages)),this.metadataWhitelist=["position"],this.pipeline.remove(t().stemmer),this.searchPipeline.remove(t().stemmer),e.forEach((function(e){r.add(n({id:e[0]},e[1]))}))}))},loadIndex:function(e){return t().multiLanguage&&t().languages&&t().multiLanguage.apply(t(),t().languages),t().Index.load(e)},query:function(e,r){return e.query((function(e){e.term(t().tokenizer(r),{boost:100,usePipeline:!0}),e.term(t().tokenizer(r),{boost:10,usePipeline:!1,wildcard:t().Query.wildcard.LEADING|t().Query.wildcard.TRAILING}),e.term(t().tokenizer(r),{boost:1,editDistance:1})}))}}})(),window.__DOCS_LUNR__=i})();window.__DOCS_LUNR__.default.init(function(x){(function(){/*!
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

!function(r,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():t()(r.lunr)}(this,function(){return function(r){r.stemmerSupport={Among:function(r,t,i,s){if(this.toCharArray=function(r){for(var t=r.length,i=new Array(t),s=0;s<t;s++)i[s]=r.charCodeAt(s);return i},!r&&""!=r||!t&&0!=t||!i)throw"Bad Among initialisation: s:"+r+", substring_i: "+t+", result: "+i;this.s_size=r.length,this.s=this.toCharArray(r),this.substring_i=t,this.result=i,this.method=s},SnowballProgram:function(){var r;return{bra:0,ket:0,limit:0,cursor:0,limit_backward:0,setCurrent:function(t){r=t,this.cursor=0,this.limit=t.length,this.limit_backward=0,this.bra=this.cursor,this.ket=this.limit},getCurrent:function(){var t=r;return r=null,t},in_grouping:function(t,i,s){if(this.cursor<this.limit){var e=r.charCodeAt(this.cursor);if(e<=s&&e>=i&&(e-=i,t[e>>3]&1<<(7&e)))return this.cursor++,!0}return!1},in_grouping_b:function(t,i,s){if(this.cursor>this.limit_backward){var e=r.charCodeAt(this.cursor-1);if(e<=s&&e>=i&&(e-=i,t[e>>3]&1<<(7&e)))return this.cursor--,!0}return!1},out_grouping:function(t,i,s){if(this.cursor<this.limit){var e=r.charCodeAt(this.cursor);if(e>s||e<i)return this.cursor++,!0;if(e-=i,!(t[e>>3]&1<<(7&e)))return this.cursor++,!0}return!1},out_grouping_b:function(t,i,s){if(this.cursor>this.limit_backward){var e=r.charCodeAt(this.cursor-1);if(e>s||e<i)return this.cursor--,!0;if(e-=i,!(t[e>>3]&1<<(7&e)))return this.cursor--,!0}return!1},eq_s:function(t,i){if(this.limit-this.cursor<t)return!1;for(var s=0;s<t;s++)if(r.charCodeAt(this.cursor+s)!=i.charCodeAt(s))return!1;return this.cursor+=t,!0},eq_s_b:function(t,i){if(this.cursor-this.limit_backward<t)return!1;for(var s=0;s<t;s++)if(r.charCodeAt(this.cursor-t+s)!=i.charCodeAt(s))return!1;return this.cursor-=t,!0},find_among:function(t,i){for(var s=0,e=i,n=this.cursor,u=this.limit,o=0,h=0,c=!1;;){for(var a=s+(e-s>>1),f=0,l=o<h?o:h,_=t[a],m=l;m<_.s_size;m++){if(n+l==u){f=-1;break}if(f=r.charCodeAt(n+l)-_.s[m])break;l++}if(f<0?(e=a,h=l):(s=a,o=l),e-s<=1){if(s>0||e==s||c)break;c=!0}}for(;;){var _=t[s];if(o>=_.s_size){if(this.cursor=n+_.s_size,!_.method)return _.result;var b=_.method();if(this.cursor=n+_.s_size,b)return _.result}if((s=_.substring_i)<0)return 0}},find_among_b:function(t,i){for(var s=0,e=i,n=this.cursor,u=this.limit_backward,o=0,h=0,c=!1;;){for(var a=s+(e-s>>1),f=0,l=o<h?o:h,_=t[a],m=_.s_size-1-l;m>=0;m--){if(n-l==u){f=-1;break}if(f=r.charCodeAt(n-1-l)-_.s[m])break;l++}if(f<0?(e=a,h=l):(s=a,o=l),e-s<=1){if(s>0||e==s||c)break;c=!0}}for(;;){var _=t[s];if(o>=_.s_size){if(this.cursor=n-_.s_size,!_.method)return _.result;var b=_.method();if(this.cursor=n-_.s_size,b)return _.result}if((s=_.substring_i)<0)return 0}},replace_s:function(t,i,s){var e=s.length-(i-t),n=r.substring(0,t),u=r.substring(i);return r=n+s+u,this.limit+=e,this.cursor>=i?this.cursor+=e:this.cursor>t&&(this.cursor=t),e},slice_check:function(){if(this.bra<0||this.bra>this.ket||this.ket>this.limit||this.limit>r.length)throw"faulty slice operation"},slice_from:function(r){this.slice_check(),this.replace_s(this.bra,this.ket,r)},slice_del:function(){this.slice_from("")},insert:function(r,t,i){var s=this.replace_s(r,t,i);r<=this.bra&&(this.bra+=s),r<=this.ket&&(this.ket+=s)},slice_to:function(){return this.slice_check(),r.substring(this.bra,this.ket)},eq_v_b:function(r){return this.eq_s_b(r.length,r)}}}},r.trimmerSupport={generateTrimmer:function(r){var t=new RegExp("^[^"+r+"]+"),i=new RegExp("[^"+r+"]+$");return function(r){return"function"==typeof r.update?r.update(function(r){return r.replace(t,"").replace(i,"")}):r.replace(t,"").replace(i,"")}}}}});}).call({lunr: x});});window.__DOCS_LUNR__.default.init(function(x){(function(){!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(e){if(void 0===e)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");e.ko=function(){this.pipeline.reset(),this.pipeline.add(e.ko.trimmer,e.ko.stopWordFilter)},e.ko.wordCharacters="[A-Za-z가-힯a]",e.ko.trimmer=e.trimmerSupport.generateTrimmer(e.ko.wordCharacters),e.Pipeline.registerFunction(e.ko.trimmer,"trimmer-ko"),e.ko.stopWordFilter=e.generateStopWordFilter("아 휴 아이구 아이쿠 아이고 어 나 우리 저희 따라 의해 을 를 에 의 가 으로 로 에게 뿐이다 의거하여 근거하여 입각하여 기준으로 예하면 예를 들면 예를 들자면 저 소인 소생 저희 지말고 하지마 하지마라 다른 물론 또한 그리고 비길수 없다 해서는 안된다 뿐만 아니라 만이 아니다 만은 아니다 막론하고 관계없이 그치지 않다 그러나 그런데 하지만 든간에 논하지 않다 따지지 않다 설사 비록 더라도 아니면 만 못하다 하는 편이 낫다 불문하고 향하여 향해서 향하다 쪽으로 틈타 이용하여 타다 오르다 제외하고 이 외에 이 밖에 하여야 비로소 한다면 몰라도 외에도 이곳 여기 부터 기점으로 따라서 할 생각이다 하려고하다 이리하여 그리하여 그렇게 함으로써 하지만 일때 할때 앞에서 중에서 보는데서 으로써 로써 까지 해야한다 일것이다 반드시 할줄알다 할수있다 할수있어 임에 틀림없다 한다면 등 등등 제 겨우 단지 다만 할뿐 딩동 댕그 대해서 대하여 대하면 훨씬 얼마나 얼마만큼 얼마큼 남짓 여 얼마간 약간 다소 좀 조금 다수 몇 얼마 지만 하물며 또한 그러나 그렇지만 하지만 이외에도 대해 말하자면 뿐이다 다음에 반대로 반대로 말하자면 이와 반대로 바꾸어서 말하면 바꾸어서 한다면 만약 그렇지않으면 까악 툭 딱 삐걱거리다 보드득 비걱거리다 꽈당 응당 해야한다 에 가서 각 각각 여러분 각종 각자 제각기 하도록하다 와 과 그러므로 그래서 고로 한 까닭에 하기 때문에 거니와 이지만 대하여 관하여 관한 과연 실로 아니나다를가 생각한대로 진짜로 한적이있다 하곤하였다 하 하하 허허 아하 거바 와 오 왜 어째서 무엇때문에 어찌 하겠는가 무슨 어디 어느곳 더군다나 하물며 더욱이는 어느때 언제 야 이봐 어이 여보시오 흐흐 흥 휴 헉헉 헐떡헐떡 영차 여차 어기여차 끙끙 아야 앗 아야 콸콸 졸졸 좍좍 뚝뚝 주룩주룩 솨 우르르 그래도 또 그리고 바꾸어말하면 바꾸어말하자면 혹은 혹시 답다 및 그에 따르는 때가 되어 즉 지든지 설령 가령 하더라도 할지라도 일지라도 지든지 몇 거의 하마터면 인젠 이젠 된바에야 된이상 만큼\t어찌됏든 그위에 게다가 점에서 보아 비추어 보아 고려하면 하게될것이다 일것이다 비교적 좀 보다더 비하면 시키다 하게하다 할만하다 의해서 연이서 이어서 잇따라 뒤따라 뒤이어 결국 의지하여 기대여 통하여 자마자 더욱더 불구하고 얼마든지 마음대로 주저하지 않고 곧 즉시 바로 당장 하자마자 밖에 안된다 하면된다 그래 그렇지 요컨대 다시 말하자면 바꿔 말하면 즉 구체적으로 말하자면 시작하여 시초에 이상 허 헉 허걱 바와같이 해도좋다 해도된다 게다가 더구나 하물며 와르르 팍 퍽 펄렁 동안 이래 하고있었다 이었다 에서 로부터 까지 예하면 했어요 해요 함께 같이 더불어 마저 마저도 양자 모두 습니다 가까스로 하려고하다 즈음하여 다른 다른 방면으로 해봐요 습니까 했어요 말할것도 없고 무릎쓰고 개의치않고 하는것만 못하다 하는것이 낫다 매 매번 들 모 어느것 어느 로써 갖고말하자면 어디 어느쪽 어느것 어느해 어느 년도 라 해도 언젠가 어떤것 어느것 저기 저쪽 저것 그때 그럼 그러면 요만한걸 그래 그때 저것만큼 그저 이르기까지 할 줄 안다 할 힘이 있다 너 너희 당신 어찌 설마 차라리 할지언정 할지라도 할망정 할지언정 구토하다 게우다 토하다 메쓰겁다 옆사람 퉤 쳇 의거하여 근거하여 의해 따라 힘입어 그 다음 버금 두번째로 기타 첫번째로 나머지는 그중에서 견지에서 형식으로 쓰여 입장에서 위해서 단지 의해되다 하도록시키다 뿐만아니라 반대로 전후 전자 앞의것 잠시 잠깐 하면서 그렇지만 다음에 그러한즉 그런즉 남들 아무거나 어찌하든지 같다 비슷하다 예컨대 이럴정도로 어떻게 만약 만일 위에서 서술한바와같이 인 듯하다 하지 않는다면 만약에 무엇 무슨 어느 어떤 아래윗 조차 한데 그럼에도 불구하고 여전히 심지어 까지도 조차도 하지 않도록 않기 위하여 때 시각 무렵 시간 동안 어때 어떠한 하여금 네 예 우선 누구 누가 알겠는가 아무도 줄은모른다 줄은 몰랏다 하는 김에 겸사겸사 하는바 그런 까닭에 한 이유는 그러니 그러니까 때문에 그 너희 그들 너희들 타인 것 것들 너 위하여 공동으로 동시에 하기 위하여 어찌하여 무엇때문에 붕붕 윙윙 나 우리 엉엉 휘익 윙윙 오호 아하 어쨋든 만 못하다\t하기보다는 차라리 하는 편이 낫다 흐흐 놀라다 상대적으로 말하자면 마치 아니라면 쉿 그렇지 않으면 그렇지 않다면 안 그러면 아니었다면 하든지 아니면 이라면 좋아 알았어 하는것도 그만이다 어쩔수 없다 하나 일 일반적으로 일단 한켠으로는 오자마자 이렇게되면 이와같다면 전부 한마디 한항목 근거로 하기에 아울러 하지 않도록 않기 위해서 이르기까지 이 되다 로 인하여 까닭으로 이유만으로 이로 인하여 그래서 이 때문에 그러므로 그런 까닭에 알 수 있다 결론을 낼 수 있다 으로 인하여 있다 어떤것 관계가 있다 관련이 있다 연관되다 어떤것들 에 대해 이리하여 그리하여 여부 하기보다는 하느니 하면 할수록 운운 이러이러하다 하구나 하도다 다시말하면 다음으로 에 있다 에 달려 있다 우리 우리들 오히려 하기는한데 어떻게 어떻해 어찌됏어 어때 어째서 본대로 자 이 이쪽 여기 이것 이번 이렇게말하자면 이런 이러한 이와 같은 요만큼 요만한 것 얼마 안 되는 것 이만큼 이 정도의 이렇게 많은 것 이와 같다 이때 이렇구나 것과 같이 끼익 삐걱 따위 와 같은 사람들 부류의 사람들 왜냐하면 중의하나 오직 오로지 에 한하다 하기만 하면 도착하다 까지 미치다 도달하다 정도에 이르다 할 지경이다 결과에 이르다 관해서는 여러분 하고 있다 한 후 혼자 자기 자기집 자신 우에 종합한것과같이 총적으로 보면 총적으로 말하면 총적으로 대로 하다 으로서 참 그만이다 할 따름이다 쿵 탕탕 쾅쾅 둥둥 봐 봐라 아이야 아니 와아 응 아이 참나 년 월 일 령 영 일 이 삼 사 오 육 륙 칠 팔 구 이천육 이천칠 이천팔 이천구 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 령 영".split(" ")),e.Pipeline.registerFunction(e.ko.stopWordFilter,"stopWordFilter-ko"),e.ko.stemmer=function(){return function(e){return"function"==typeof e.update?e.update(function(e){return e}):e}}(),e.Pipeline.registerFunction(e.ko.stemmer,"stemmer-ko")}});}).call({lunr: x});});window.__DOCS_LUNR__.default.init(function(x){(function(){!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():t()(e.lunr)}(this,function(){return function(e){e.multiLanguage=function(){for(var t=Array.prototype.slice.call(arguments),i=t.join("-"),r="",n=[],s=[],p=0;p<t.length;++p)"en"==t[p]?(r+="\\w",n.unshift(e.stopWordFilter),n.push(e.stemmer),s.push(e.stemmer)):(r+=e[t[p]].wordCharacters,e[t[p]].stopWordFilter&&n.unshift(e[t[p]].stopWordFilter),e[t[p]].stemmer&&(n.push(e[t[p]].stemmer),s.push(e[t[p]].stemmer)));var o=e.trimmerSupport.generateTrimmer(r);return e.Pipeline.registerFunction(o,"lunr-multi-trimmer-"+i),n.unshift(o),function(){this.pipeline.reset(),this.pipeline.add.apply(this.pipeline,n),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add.apply(this.searchPipeline,s))}}}});}).call({lunr: x});});
window.__DOCS_LUNR__.default.init(function(x){x.languages=["en","ko"];});