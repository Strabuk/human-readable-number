module.exports = function toReadable (number) {

    var n = number; b = Math.trunc(n/10); c = n-(b*10); d = Math.trunc(n/100);  a = (n/10-b);  e = (b - 11); f = n-((n+1)-b);

        A1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eigth hundred', 'nine hundred']; 
    
    if (n === 0) return ('zero');

    if ( n < 100 && a === 0) return A3[n-(n+1-b)];

    if (n > 0 && n < 10) return A1[n];

    if (n > 10 && n < 20) return A2[n-11];

    if (n > 20 && n < 100) return A3[b-1]+' '+A1[c];

    if (n > 100 && n < 110) return A4[d-1]+' '+A1[c];

    if (n > 110 && n < 120) return A4[d-1]+' '+A2[c];
    
    if (n > 120 && n < 999) return A4[d-1]+' '+A3[b-(d*10+1)]+' '+A1[c];

}
