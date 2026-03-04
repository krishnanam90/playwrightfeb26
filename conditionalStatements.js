
function launchbrowser(browser){
    if(browser=="chrome"){
        console.log("chrome browser launched")
    }
    else if(browser=="edge"){
        console.log("edge browser launched")
    }
    else if(browser=="webkit"){
        console.log("webkit browser launched")
    }
}
launchbrowser("chrome")
launchbrowser("edge")
launchbrowser("webkit")

function runTests(type) {
	switch(type) {
		case "smoke":
			console.log("Running smoke tests")
			break
		case "sanity":
			console.log("Running sanity tests")
			break
		case "regression":
			console.log("Running regression tests")
			break
		default:
			console.log("Default smoke tests running")
	}
}   
runTests('smoke')
runTests('sanity')
runTests('regression')
runTests('')