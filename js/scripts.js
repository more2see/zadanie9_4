var treeHeight = 10;
function drawTree () {
	for ( i = 0 ; i < treeHeight ; i++) {
		star = '';
		for ( j = 0 ; j < treeHeight ; j++) {
			star += '*';
	    	if (j == i) {
        		break;
    		}
		}
	console.log(star);
	}
}
drawTree();