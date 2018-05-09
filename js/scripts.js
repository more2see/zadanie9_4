function drawTree(treeHeight) {
	for (var i = 0; i < treeHeight; i++) {
		var star = '';
		for (var j = 0; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(8);
/*
2) gdy i == j to break czyli przerwij pętlę. Do tego jest przeznaczone właśnie drugie miejsce w forze. Postaraj się zatem przerobić nieco drugą pętlę.
*/
/* Bylo:
var treeHeight;
function drawTree (treeHeight) {
	for ( i = 0 ; i < treeHeight ; i++) {
		var star = '';
		for ( j = 0 ; j < treeHeight ; j++) {
			star += '*';
	    	if (j == i) {
        		break; 
    		}
		}
	console.log(star);
	}
}
drawTree(7);
*/