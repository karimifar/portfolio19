function updateParam(s)
{
	document.querySelector("textarea"+s).style.fontSize = document.querySelector("input"+s).value+"px";
}

function updatePersian()
{
	var en = document.querySelector("textarea.marfa.en");
	var fa = document.querySelector("textarea.marfa.fa");

	var alphabet = "ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی";

	if(fa.value.length > en.value.length)
		fa.value = fa.value.slice(0, en.value.length);

	for(var i=0; i<en.value.length; ++i)
	{
		if(en.value.charAt(i) == " ")
		{
			setFa(i, " ");
			console.log("space");
		}
		else
			setFa(i, alphabet.charAt(Math.random()*32));
	}
}

function setFa(i, c)
{
	var fa = document.querySelector("textarea.marfa.fa");

	if(i>fa.value.length)
	{
		fa.value += c;
	}
	else
	{
		fa.value.replaceAt(i,c);
	}
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}