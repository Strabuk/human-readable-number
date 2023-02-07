
module.exports = function toReadable (number) {

    var n = number; b = Math.trunc(n/10); c = n-(b*10); d = Math.trunc(n/100);  a = (n/10-b);  e = (b - 11); f =d*100; 

        A1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']; 
    
    if (n === 0) return ('zero');

    if ( n < 100 && a === 0) return A3[n-(n+1-b)];

    if ( n > 100 && a === 0) return A4[d-1]+' '+A3[b-(d*10+1)];

    if ( n === f ) return A4[d-1];

    if (n > 0 && n < 10) return A1[n];

    if (n > 10 && n < 20) return A2[n-11];

    if (n > 20 && n < 100) return A3[b-1]+' '+A1[c];

    if (n > 100 && n < 110) return A4[d-1]+' '+A1[c];

    if (n > 200 && n < 210) return A4[d-1]+' '+A1[c];

    if (n > 300 && n < 310) return A4[d-1]+' '+A1[c];

    if (n > 400 && n < 410) return A4[d-1]+' '+A1[c];

    if (n > 500 && n < 510) return A4[d-1]+' '+A1[c];

    if (n > 600 && n < 610) return A4[d-1]+' '+A1[c];

    if (n > 700 && n < 710) return A4[d-1]+' '+A1[c];

    if (n > 800 && n < 810) return A4[d-1]+' '+A1[c];

    if (n > 900 && n < 910) return A4[d-1]+' '+A1[c];

    if (n > 110 && n < 120) return A4[d-1]+' '+A2[c-1];

    if (n > 210 && n < 220) return A4[d-1]+' '+A2[c-1];
    
    if (n > 310 && n < 320) return A4[d-1]+' '+A2[c-1];

    if (n > 410 && n < 420) return A4[d-1]+' '+A2[c-1];

    if (n > 510 && n < 520) return A4[d-1]+' '+A2[c-1];

    if (n > 610 && n < 620) return A4[d-1]+' '+A2[c-1];

    if (n > 710 && n < 720) return A4[d-1]+' '+A2[c-1];

    if (n > 810 && n < 820) return A4[d-1]+' '+A2[c-1];

    if (n > 910 && n < 920) return A4[d-1]+' '+A2[c-1];
    
    if (n > 120 && n < 1000) return A4[d-1]+' '+A3[b-(d*10+1)]+' '+A1[c];

}
