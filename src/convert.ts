export const removeDiacritics = (value: string): string => {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const glyphToName = (glyph: string): string => {
    return unicodeToName[decimalToHex(glyph.charCodeAt(0), 4)];
};

export const isVowel = (glyphs: string): boolean => {
    const regex = /[\u0391\u0395\u0397\u0399\u039F\u03A5\u03A9]/g;
    const normalizedFirstGlyph = glyphs.toUpperCase().normalize('NFD')[0];
    return regex.test(normalizedFirstGlyph);
    // const glyphName = glyphToName(glyph);
    // return glyphName.indexOf(' ALPHA') > -1 || glyphName.indexOf(' EPSILON') > -1 || glyphName.indexOf(' OMICRON') > -1 || glyphName.indexOf(' OMEGA') > -1 || glyphName.indexOf(' UPSILON') > -1 || glyphName.indexOf(' ETA') > -1 || glyphName.indexOf(' IOTA') > -1;
};

export const isEqualWithoutDiacritics = (a: string, b:string): boolean => {
    console.log(decimalToHex(a.toUpperCase().normalize('NFD').codePointAt(1), 0) , decimalToHex(b.toUpperCase().normalize('NFD').codePointAt(1), 0));
    return a.toUpperCase().normalize('NFD') === b.toUpperCase().normalize('NFD');
};


export const getSimpleGlyphName = (glyph: string, withIotaSubscript: boolean = false): string => {
    const glyphName = glyphToName(glyph);
    const simpleGlyphNames = / ALPHA| BETA| GAMMA| DELTA| EPSILON| ZETA| ETA| THETA| IOTA| KAPPA| LAMBDA| MU| NU| XI| OMICRON| PI| RHO| SIGMA| TAU| UPSILON| PHI| CHI| PSI| OMEGA/;
    const matches = glyphName.match(simpleGlyphNames);
    if (!glyphName || !matches || matches.length === 0)
        return '';

    return matches[0].substring(1) + (withIotaSubscript && glyphName.match(/WITH YPOGEGRAMMENI/) ? ' WITH YPOGEGRAMMENI'  : '');
};

const decimalToHex = (d: any, padding: any) => {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = '0' + hex;
    }

    return hex.toUpperCase();
};

const unicodeToName = {
    '007B': 'LEFT CURLY BRACKET',
    '007D': 'RIGHT CURLY BRACKET',
    '000D': 'CARRIAGE RETURN',
    '000A': 'LINE FEED',
    '005B': 'LEFT SQUARE BRACKET',
    '005D': 'RIGHT SQUARE BRACKET',
    '002E': 'FULL STOP',
    '0030': 'DIGIT ZERO',
    '0031': 'DIGIT ONE',
    '0032': 'DIGIT TWO',
    '0033': 'DIGIT THREE',
    '0034': 'DIGIT FOUR',
    '0035': 'DIGIT FIVE',
    '0036': 'DIGIT SIX',
    '0037': 'DIGIT SEVEN',
    '0038': 'DIGIT EIGHT',
    '0039': 'DIGIT NINE',
    '003A': 'COLON',
    '0020': 'SPACE',
    '002C': 'COMMA',
    '003B': 'SEMICOLON',
    '0342': 'COMBINING GREEK PERISPOMENI',
    '0343': 'COMBINING GREEK KORONIS',
    '0344': 'COMBINING GREEK DIALYTIKA TONOS',
    '0345': 'COMBINING GREEK YPOGEGRAMMENI',
    '0370': 'GREEK CAPITAL LETTER HETA',
    '0371': 'GREEK SMALL LETTER HETA',
    '0372': 'GREEK CAPITAL LETTER ARCHAIC SAMPI',
    '0373': 'GREEK SMALL LETTER ARCHAIC SAMPI',
    '0374': 'GREEK NUMERAL SIGN',
    '0375': 'GREEK LOWER NUMERAL SIGN',
    '0376': 'GREEK CAPITAL LETTER PAMPHYLIAN DIGAMMA',
    '0377': 'GREEK SMALL LETTER PAMPHYLIAN DIGAMMA',
    '037A': 'GREEK YPOGEGRAMMENI',
    '037B': 'GREEK SMALL REVERSED LUNATE SIGMA SYMBOL',
    '037C': 'GREEK SMALL DOTTED LUNATE SIGMA SYMBOL',
    '037D': 'GREEK SMALL REVERSED DOTTED LUNATE SIGMA SYMBOL',
    '037E': 'GREEK QUESTION MARK',
    '037F': 'GREEK CAPITAL LETTER YOT',
    '0384': 'GREEK TONOS',
    '0385': 'GREEK DIALYTIKA TONOS',
    '0386': 'GREEK CAPITAL LETTER ALPHA WITH TONOS',
    '0387': 'GREEK ANO TELEIA',
    '0388': 'GREEK CAPITAL LETTER EPSILON WITH TONOS',
    '0389': 'GREEK CAPITAL LETTER ETA WITH TONOS',
    '038A': 'GREEK CAPITAL LETTER IOTA WITH TONOS',
    '038C': 'GREEK CAPITAL LETTER OMICRON WITH TONOS',
    '038E': 'GREEK CAPITAL LETTER UPSILON WITH TONOS',
    '038F': 'GREEK CAPITAL LETTER OMEGA WITH TONOS',
    '0390': 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS',
    '0391': 'GREEK CAPITAL LETTER ALPHA',
    '0392': 'GREEK CAPITAL LETTER BETA',
    '0393': 'GREEK CAPITAL LETTER GAMMA',
    '0394': 'GREEK CAPITAL LETTER DELTA',
    '0395': 'GREEK CAPITAL LETTER EPSILON',
    '0396': 'GREEK CAPITAL LETTER ZETA',
    '0397': 'GREEK CAPITAL LETTER ETA',
    '0398': 'GREEK CAPITAL LETTER THETA',
    '0399': 'GREEK CAPITAL LETTER IOTA',
    '039A': 'GREEK CAPITAL LETTER KAPPA',
    '039B': 'GREEK CAPITAL LETTER LAMDA',
    '039C': 'GREEK CAPITAL LETTER MU',
    '039D': 'GREEK CAPITAL LETTER NU',
    '039E': 'GREEK CAPITAL LETTER XI',
    '039F': 'GREEK CAPITAL LETTER OMICRON',
    '03A0': 'GREEK CAPITAL LETTER PI',
    '03A1': 'GREEK CAPITAL LETTER RHO',
    '03A3': 'GREEK CAPITAL LETTER SIGMA',
    '03A4': 'GREEK CAPITAL LETTER TAU',
    '03A5': 'GREEK CAPITAL LETTER UPSILON',
    '03A6': 'GREEK CAPITAL LETTER PHI',
    '03A7': 'GREEK CAPITAL LETTER CHI',
    '03A8': 'GREEK CAPITAL LETTER PSI',
    '03A9': 'GREEK CAPITAL LETTER OMEGA',
    '03AA': 'GREEK CAPITAL LETTER IOTA WITH DIALYTIKA',
    '03AB': 'GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA',
    '03AC': 'GREEK SMALL LETTER ALPHA WITH TONOS',
    '03AD': 'GREEK SMALL LETTER EPSILON WITH TONOS',
    '03AE': 'GREEK SMALL LETTER ETA WITH TONOS',
    '03AF': 'GREEK SMALL LETTER IOTA WITH TONOS',
    '03B0': 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS',
    '03B1': 'GREEK SMALL LETTER ALPHA',
    '03B2': 'GREEK SMALL LETTER BETA',
    '03B3': 'GREEK SMALL LETTER GAMMA',
    '03B4': 'GREEK SMALL LETTER DELTA',
    '03B5': 'GREEK SMALL LETTER EPSILON',
    '03B6': 'GREEK SMALL LETTER ZETA',
    '03B7': 'GREEK SMALL LETTER ETA',
    '03B8': 'GREEK SMALL LETTER THETA',
    '03B9': 'GREEK SMALL LETTER IOTA',
    '03BA': 'GREEK SMALL LETTER KAPPA',
    '03BB': 'GREEK SMALL LETTER LAMDA',
    '03BC': 'GREEK SMALL LETTER MU',
    '03BD': 'GREEK SMALL LETTER NU',
    '03BE': 'GREEK SMALL LETTER XI',
    '03BF': 'GREEK SMALL LETTER OMICRON',
    '03C0': 'GREEK SMALL LETTER PI',
    '03C1': 'GREEK SMALL LETTER RHO',
    '03C2': 'GREEK SMALL LETTER FINAL SIGMA',
    '03C3': 'GREEK SMALL LETTER SIGMA',
    '03C4': 'GREEK SMALL LETTER TAU',
    '03C5': 'GREEK SMALL LETTER UPSILON',
    '03C6': 'GREEK SMALL LETTER PHI',
    '03C7': 'GREEK SMALL LETTER CHI',
    '03C8': 'GREEK SMALL LETTER PSI',
    '03C9': 'GREEK SMALL LETTER OMEGA',
    '03CA': 'GREEK SMALL LETTER IOTA WITH DIALYTIKA',
    '03CB': 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA',
    '03CC': 'GREEK SMALL LETTER OMICRON WITH TONOS',
    '03CD': 'GREEK SMALL LETTER UPSILON WITH TONOS',
    '03CE': 'GREEK SMALL LETTER OMEGA WITH TONOS',
    '03CF': 'GREEK CAPITAL KAI SYMBOL',
    '03D0': 'GREEK BETA SYMBOL',
    '03D1': 'GREEK THETA SYMBOL',
    '03D2': 'GREEK UPSILON WITH HOOK SYMBOL',
    '03D3': 'GREEK UPSILON WITH ACUTE AND HOOK SYMBOL',
    '03D4': 'GREEK UPSILON WITH DIAERESIS AND HOOK SYMBOL',
    '03D5': 'GREEK PHI SYMBOL',
    '03D6': 'GREEK PI SYMBOL',
    '03D7': 'GREEK KAI SYMBOL',
    '03D8': 'GREEK LETTER ARCHAIC KOPPA',
    '03D9': 'GREEK SMALL LETTER ARCHAIC KOPPA',
    '03DA': 'GREEK LETTER STIGMA',
    '03DB': 'GREEK SMALL LETTER STIGMA',
    '03DC': 'GREEK LETTER DIGAMMA',
    '03DD': 'GREEK SMALL LETTER DIGAMMA',
    '03DE': 'GREEK LETTER KOPPA',
    '03DF': 'GREEK SMALL LETTER KOPPA',
    '03E0': 'GREEK LETTER SAMPI',
    '03E1': 'GREEK SMALL LETTER SAMPI',
    '03F0': 'GREEK KAPPA SYMBOL',
    '03F1': 'GREEK RHO SYMBOL',
    '03F2': 'GREEK LUNATE SIGMA SYMBOL',
    '03F3': 'GREEK LETTER YOT',
    '03F4': 'GREEK CAPITAL THETA SYMBOL',
    '03F5': 'GREEK LUNATE EPSILON SYMBOL',
    '03F6': 'GREEK REVERSED LUNATE EPSILON SYMBOL',
    '03F7': 'GREEK CAPITAL LETTER SHO',
    '03F8': 'GREEK SMALL LETTER SHO',
    '03F9': 'GREEK CAPITAL LUNATE SIGMA SYMBOL',
    '03FA': 'GREEK CAPITAL LETTER SAN',
    '03FB': 'GREEK SMALL LETTER SAN',
    '03FC': 'GREEK RHO WITH STROKE SYMBOL',
    '03FD': 'GREEK CAPITAL REVERSED LUNATE SIGMA SYMBOL',
    '03FE': 'GREEK CAPITAL DOTTED LUNATE SIGMA SYMBOL',
    '03FF': 'GREEK CAPITAL REVERSED DOTTED LUNATE SIGMA SYMBOL',
    '1D26': 'GREEK LETTER SMALL CAPITAL GAMMA',
    '1D27': 'GREEK LETTER SMALL CAPITAL LAMDA',
    '1D28': 'GREEK LETTER SMALL CAPITAL PI',
    '1D29': 'GREEK LETTER SMALL CAPITAL RHO',
    '1D2A': 'GREEK LETTER SMALL CAPITAL PSI',
    '1D5E': 'MODIFIER LETTER SMALL GREEK GAMMA',
    '1D60': 'MODIFIER LETTER SMALL GREEK PHI',
    '1D66': 'GREEK SUBSCRIPT SMALL LETTER BETA',
    '1D67': 'GREEK SUBSCRIPT SMALL LETTER GAMMA',
    '1D68': 'GREEK SUBSCRIPT SMALL LETTER RHO',
    '1D69': 'GREEK SUBSCRIPT SMALL LETTER PHI',
    '1D6A': 'GREEK SUBSCRIPT SMALL LETTER CHI',
    '1F00': 'GREEK SMALL LETTER ALPHA WITH PSILI',
    '1F01': 'GREEK SMALL LETTER ALPHA WITH DASIA',
    '1F02': 'GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA',
    '1F03': 'GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA',
    '1F04': 'GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA',
    '1F05': 'GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA',
    '1F06': 'GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI',
    '1F07': 'GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI',
    '1F08': 'GREEK CAPITAL LETTER ALPHA WITH PSILI',
    '1F09': 'GREEK CAPITAL LETTER ALPHA WITH DASIA',
    '1F0A': 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA',
    '1F0B': 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA',
    '1F0C': 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA',
    '1F0D': 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA',
    '1F0E': 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI',
    '1F0F': 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI',
    '1F10': 'GREEK SMALL LETTER EPSILON WITH PSILI',
    '1F11': 'GREEK SMALL LETTER EPSILON WITH DASIA',
    '1F12': 'GREEK SMALL LETTER EPSILON WITH PSILI AND VARIA',
    '1F13': 'GREEK SMALL LETTER EPSILON WITH DASIA AND VARIA',
    '1F14': 'GREEK SMALL LETTER EPSILON WITH PSILI AND OXIA',
    '1F15': 'GREEK SMALL LETTER EPSILON WITH DASIA AND OXIA',
    '1F18': 'GREEK CAPITAL LETTER EPSILON WITH PSILI',
    '1F19': 'GREEK CAPITAL LETTER EPSILON WITH DASIA',
    '1F1A': 'GREEK CAPITAL LETTER EPSILON WITH PSILI AND VARIA',
    '1F1B': 'GREEK CAPITAL LETTER EPSILON WITH DASIA AND VARIA',
    '1F1C': 'GREEK CAPITAL LETTER EPSILON WITH PSILI AND OXIA',
    '1F1D': 'GREEK CAPITAL LETTER EPSILON WITH DASIA AND OXIA',
    '1F20': 'GREEK SMALL LETTER ETA WITH PSILI',
    '1F21': 'GREEK SMALL LETTER ETA WITH DASIA',
    '1F22': 'GREEK SMALL LETTER ETA WITH PSILI AND VARIA',
    '1F23': 'GREEK SMALL LETTER ETA WITH DASIA AND VARIA',
    '1F24': 'GREEK SMALL LETTER ETA WITH PSILI AND OXIA',
    '1F25': 'GREEK SMALL LETTER ETA WITH DASIA AND OXIA',
    '1F26': 'GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI',
    '1F27': 'GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI',
    '1F28': 'GREEK CAPITAL LETTER ETA WITH PSILI',
    '1F29': 'GREEK CAPITAL LETTER ETA WITH DASIA',
    '1F2A': 'GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA',
    '1F2B': 'GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA',
    '1F2C': 'GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA',
    '1F2D': 'GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA',
    '1F2E': 'GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI',
    '1F2F': 'GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI',
    '1F30': 'GREEK SMALL LETTER IOTA WITH PSILI',
    '1F31': 'GREEK SMALL LETTER IOTA WITH DASIA',
    '1F32': 'GREEK SMALL LETTER IOTA WITH PSILI AND VARIA',
    '1F33': 'GREEK SMALL LETTER IOTA WITH DASIA AND VARIA',
    '1F34': 'GREEK SMALL LETTER IOTA WITH PSILI AND OXIA',
    '1F35': 'GREEK SMALL LETTER IOTA WITH DASIA AND OXIA',
    '1F36': 'GREEK SMALL LETTER IOTA WITH PSILI AND PERISPOMENI',
    '1F37': 'GREEK SMALL LETTER IOTA WITH DASIA AND PERISPOMENI',
    '1F38': 'GREEK CAPITAL LETTER IOTA WITH PSILI',
    '1F39': 'GREEK CAPITAL LETTER IOTA WITH DASIA',
    '1F3A': 'GREEK CAPITAL LETTER IOTA WITH PSILI AND VARIA',
    '1F3B': 'GREEK CAPITAL LETTER IOTA WITH DASIA AND VARIA',
    '1F3C': 'GREEK CAPITAL LETTER IOTA WITH PSILI AND OXIA',
    '1F3D': 'GREEK CAPITAL LETTER IOTA WITH DASIA AND OXIA',
    '1F3E': 'GREEK CAPITAL LETTER IOTA WITH PSILI AND PERISPOMENI',
    '1F3F': 'GREEK CAPITAL LETTER IOTA WITH DASIA AND PERISPOMENI',
    '1F40': 'GREEK SMALL LETTER OMICRON WITH PSILI',
    '1F41': 'GREEK SMALL LETTER OMICRON WITH DASIA',
    '1F42': 'GREEK SMALL LETTER OMICRON WITH PSILI AND VARIA',
    '1F43': 'GREEK SMALL LETTER OMICRON WITH DASIA AND VARIA',
    '1F44': 'GREEK SMALL LETTER OMICRON WITH PSILI AND OXIA',
    '1F45': 'GREEK SMALL LETTER OMICRON WITH DASIA AND OXIA',
    '1F48': 'GREEK CAPITAL LETTER OMICRON WITH PSILI',
    '1F49': 'GREEK CAPITAL LETTER OMICRON WITH DASIA',
    '1F4A': 'GREEK CAPITAL LETTER OMICRON WITH PSILI AND VARIA',
    '1F4B': 'GREEK CAPITAL LETTER OMICRON WITH DASIA AND VARIA',
    '1F4C': 'GREEK CAPITAL LETTER OMICRON WITH PSILI AND OXIA',
    '1F4D': 'GREEK CAPITAL LETTER OMICRON WITH DASIA AND OXIA',
    '1F50': 'GREEK SMALL LETTER UPSILON WITH PSILI',
    '1F51': 'GREEK SMALL LETTER UPSILON WITH DASIA',
    '1F52': 'GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA',
    '1F53': 'GREEK SMALL LETTER UPSILON WITH DASIA AND VARIA',
    '1F54': 'GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA',
    '1F55': 'GREEK SMALL LETTER UPSILON WITH DASIA AND OXIA',
    '1F56': 'GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI',
    '1F57': 'GREEK SMALL LETTER UPSILON WITH DASIA AND PERISPOMENI',
    '1F59': 'GREEK CAPITAL LETTER UPSILON WITH DASIA',
    '1F5B': 'GREEK CAPITAL LETTER UPSILON WITH DASIA AND VARIA',
    '1F5D': 'GREEK CAPITAL LETTER UPSILON WITH DASIA AND OXIA',
    '1F5F': 'GREEK CAPITAL LETTER UPSILON WITH DASIA AND PERISPOMENI',
    '1F60': 'GREEK SMALL LETTER OMEGA WITH PSILI',
    '1F61': 'GREEK SMALL LETTER OMEGA WITH DASIA',
    '1F62': 'GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA',
    '1F63': 'GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA',
    '1F64': 'GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA',
    '1F65': 'GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA',
    '1F66': 'GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI',
    '1F67': 'GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI',
    '1F68': 'GREEK CAPITAL LETTER OMEGA WITH PSILI',
    '1F69': 'GREEK CAPITAL LETTER OMEGA WITH DASIA',
    '1F6A': 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA',
    '1F6B': 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA',
    '1F6C': 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA',
    '1F6D': 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA',
    '1F6E': 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI',
    '1F6F': 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI',
    '1F70': 'GREEK SMALL LETTER ALPHA WITH VARIA',
    '1F71': 'GREEK SMALL LETTER ALPHA WITH OXIA',
    '1F72': 'GREEK SMALL LETTER EPSILON WITH VARIA',
    '1F73': 'GREEK SMALL LETTER EPSILON WITH OXIA',
    '1F74': 'GREEK SMALL LETTER ETA WITH VARIA',
    '1F75': 'GREEK SMALL LETTER ETA WITH OXIA',
    '1F76': 'GREEK SMALL LETTER IOTA WITH VARIA',
    '1F77': 'GREEK SMALL LETTER IOTA WITH OXIA',
    '1F78': 'GREEK SMALL LETTER OMICRON WITH VARIA',
    '1F79': 'GREEK SMALL LETTER OMICRON WITH OXIA',
    '1F7A': 'GREEK SMALL LETTER UPSILON WITH VARIA',
    '1F7B': 'GREEK SMALL LETTER UPSILON WITH OXIA',
    '1F7C': 'GREEK SMALL LETTER OMEGA WITH VARIA',
    '1F7D': 'GREEK SMALL LETTER OMEGA WITH OXIA',
    '1F80': 'GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI',
    '1F81': 'GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI',
    '1F82': 'GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI',
    '1F83': 'GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI',
    '1F84': 'GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI',
    '1F85': 'GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI',
    '1F86': 'GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI',
    '1F87': 'GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI',
    '1F88': 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI',
    '1F89': 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI',
    '1F8A': 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI',
    '1F8B': 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI',
    '1F8C': 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI',
    '1F8D': 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI',
    '1F8E': 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI',
    '1F8F': 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI',
    '1F90': 'GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI',
    '1F91': 'GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI',
    '1F92': 'GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI',
    '1F93': 'GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI',
    '1F94': 'GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI',
    '1F95': 'GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI',
    '1F96': 'GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI',
    '1F97': 'GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI',
    '1F98': 'GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI',
    '1F99': 'GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI',
    '1F9A': 'GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI',
    '1F9B': 'GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI',
    '1F9C': 'GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI',
    '1F9D': 'GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI',
    '1F9E': 'GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI',
    '1F9F': 'GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI',
    '1FA0': 'GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI',
    '1FA1': 'GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI',
    '1FA2': 'GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI',
    '1FA3': 'GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI',
    '1FA4': 'GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI',
    '1FA5': 'GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI',
    '1FA6': 'GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI',
    '1FA7': 'GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI',
    '1FA8': 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI',
    '1FA9': 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI',
    '1FAA': 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI',
    '1FAB': 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI',
    '1FAC': 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI',
    '1FAD': 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI',
    '1FAE': 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI',
    '1FAF': 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI',
    '1FB0': 'GREEK SMALL LETTER ALPHA WITH VRACHY',
    '1FB1': 'GREEK SMALL LETTER ALPHA WITH MACRON',
    '1FB2': 'GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI',
    '1FB3': 'GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI',
    '1FB4': 'GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI',
    '1FB6': 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI',
    '1FB7': 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI',
    '1FB8': 'GREEK CAPITAL LETTER ALPHA WITH VRACHY',
    '1FB9': 'GREEK CAPITAL LETTER ALPHA WITH MACRON',
    '1FBA': 'GREEK CAPITAL LETTER ALPHA WITH VARIA',
    '1FBB': 'GREEK CAPITAL LETTER ALPHA WITH OXIA',
    '1FBC': 'GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI',
    '1FBD': 'GREEK KORONIS',
    '1FBE': 'GREEK PROSGEGRAMMENI',
    '1FBF': 'GREEK PSILI',
    '1FC0': 'GREEK PERISPOMENI',
    '1FC1': 'GREEK DIALYTIKA AND PERISPOMENI',
    '1FC2': 'GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI',
    '1FC3': 'GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI',
    '1FC4': 'GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI',
    '1FC6': 'GREEK SMALL LETTER ETA WITH PERISPOMENI',
    '1FC7': 'GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI',
    '1FC8': 'GREEK CAPITAL LETTER EPSILON WITH VARIA',
    '1FC9': 'GREEK CAPITAL LETTER EPSILON WITH OXIA',
    '1FCA': 'GREEK CAPITAL LETTER ETA WITH VARIA',
    '1FCB': 'GREEK CAPITAL LETTER ETA WITH OXIA',
    '1FCC': 'GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI',
    '1FCD': 'GREEK PSILI AND VARIA',
    '1FCE': 'GREEK PSILI AND OXIA',
    '1FCF': 'GREEK PSILI AND PERISPOMENI',
    '1FD0': 'GREEK SMALL LETTER IOTA WITH VRACHY',
    '1FD1': 'GREEK SMALL LETTER IOTA WITH MACRON',
    '1FD2': 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA',
    '1FD3': 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA',
    '1FD6': 'GREEK SMALL LETTER IOTA WITH PERISPOMENI',
    '1FD7': 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI',
    '1FD8': 'GREEK CAPITAL LETTER IOTA WITH VRACHY',
    '1FD9': 'GREEK CAPITAL LETTER IOTA WITH MACRON',
    '1FDA': 'GREEK CAPITAL LETTER IOTA WITH VARIA',
    '1FDB': 'GREEK CAPITAL LETTER IOTA WITH OXIA',
    '1FDD': 'GREEK DASIA AND VARIA',
    '1FDE': 'GREEK DASIA AND OXIA',
    '1FDF': 'GREEK DASIA AND PERISPOMENI',
    '1FE0': 'GREEK SMALL LETTER UPSILON WITH VRACHY',
    '1FE1': 'GREEK SMALL LETTER UPSILON WITH MACRON',
    '1FE2': 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA',
    '1FE3': 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA',
    '1FE4': 'GREEK SMALL LETTER RHO WITH PSILI',
    '1FE5': 'GREEK SMALL LETTER RHO WITH DASIA',
    '1FE6': 'GREEK SMALL LETTER UPSILON WITH PERISPOMENI',
    '1FE7': 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI',
    '1FE8': 'GREEK CAPITAL LETTER UPSILON WITH VRACHY',
    '1FE9': 'GREEK CAPITAL LETTER UPSILON WITH MACRON',
    '1FEA': 'GREEK CAPITAL LETTER UPSILON WITH VARIA',
    '1FEB': 'GREEK CAPITAL LETTER UPSILON WITH OXIA',
    '1FEC': 'GREEK CAPITAL LETTER RHO WITH DASIA',
    '1FED': 'GREEK DIALYTIKA AND VARIA',
    '1FEE': 'GREEK DIALYTIKA AND OXIA',
    '1FEF': 'GREEK VARIA',
    '1FF2': 'GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI',
    '1FF3': 'GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI',
    '1FF4': 'GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI',
    '1FF6': 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI',
    '1FF7': 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI',
    '1FF8': 'GREEK CAPITAL LETTER OMICRON WITH VARIA',
    '1FF9': 'GREEK CAPITAL LETTER OMICRON WITH OXIA',
    '1FFA': 'GREEK CAPITAL LETTER OMEGA WITH VARIA',
    '1FFB': 'GREEK CAPITAL LETTER OMEGA WITH OXIA',
    '1FFC': 'GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI',
    '1FFD': 'GREEK OXIA',
    '1FFE': 'GREEK DASIA',
    '201C': 'LEFT DOUBLE QUOTATION MARK',
    '201D': 'RIGHT DOUBLE QUOTATION MARK',
    '2129': 'TURNED GREEK SMALL LETTER IOTA',
    '2014': 'EM DASH',
    '2719': 'OUTLINED GREEK CROSS',
    '271A': 'HEAVY GREEK CROSS',
    'AB65': 'GREEK LETTER SMALL CAPITAL OMEGA',
    '10140': 'GREEK ACROPHONIC ATTIC ONE QUARTER',
    '10141': 'GREEK ACROPHONIC ATTIC ONE HALF',
    '10142': 'GREEK ACROPHONIC ATTIC ONE DRACHMA',
    '10143': 'GREEK ACROPHONIC ATTIC FIVE',
    '10144': 'GREEK ACROPHONIC ATTIC FIFTY',
    '10145': 'GREEK ACROPHONIC ATTIC FIVE HUNDRED',
    '10146': 'GREEK ACROPHONIC ATTIC FIVE THOUSAND',
    '10147': 'GREEK ACROPHONIC ATTIC FIFTY THOUSAND',
    '10148': 'GREEK ACROPHONIC ATTIC FIVE TALENTS',
    '10149': 'GREEK ACROPHONIC ATTIC TEN TALENTS',
    '1014A': 'GREEK ACROPHONIC ATTIC FIFTY TALENTS',
    '1014B': 'GREEK ACROPHONIC ATTIC ONE HUNDRED TALENTS',
    '1014C': 'GREEK ACROPHONIC ATTIC FIVE HUNDRED TALENTS',
    '1014D': 'GREEK ACROPHONIC ATTIC ONE THOUSAND TALENTS',
    '1014E': 'GREEK ACROPHONIC ATTIC FIVE THOUSAND TALENTS',
    '1014F': 'GREEK ACROPHONIC ATTIC FIVE STATERS',
    '10150': 'GREEK ACROPHONIC ATTIC TEN STATERS',
    '10151': 'GREEK ACROPHONIC ATTIC FIFTY STATERS',
    '10152': 'GREEK ACROPHONIC ATTIC ONE HUNDRED STATERS',
    '10153': 'GREEK ACROPHONIC ATTIC FIVE HUNDRED STATERS',
    '10154': 'GREEK ACROPHONIC ATTIC ONE THOUSAND STATERS',
    '10155': 'GREEK ACROPHONIC ATTIC TEN THOUSAND STATERS',
    '10156': 'GREEK ACROPHONIC ATTIC FIFTY THOUSAND STATERS',
    '10157': 'GREEK ACROPHONIC ATTIC TEN MNAS',
    '10158': 'GREEK ACROPHONIC HERAEUM ONE PLETHRON',
    '10159': 'GREEK ACROPHONIC THESPIAN ONE',
    '1015A': 'GREEK ACROPHONIC HERMIONIAN ONE',
    '1015B': 'GREEK ACROPHONIC EPIDAUREAN TWO',
    '1015C': 'GREEK ACROPHONIC THESPIAN TWO',
    '1015D': 'GREEK ACROPHONIC CYRENAIC TWO DRACHMAS',
    '1015E': 'GREEK ACROPHONIC EPIDAUREAN TWO DRACHMAS',
    '1015F': 'GREEK ACROPHONIC TROEZENIAN FIVE',
    '10160': 'GREEK ACROPHONIC TROEZENIAN TEN',
    '10161': 'GREEK ACROPHONIC TROEZENIAN TEN ALTERNATE FORM',
    '10162': 'GREEK ACROPHONIC HERMIONIAN TEN',
    '10163': 'GREEK ACROPHONIC MESSENIAN TEN',
    '10164': 'GREEK ACROPHONIC THESPIAN TEN',
    '10165': 'GREEK ACROPHONIC THESPIAN THIRTY',
    '10166': 'GREEK ACROPHONIC TROEZENIAN FIFTY',
    '10167': 'GREEK ACROPHONIC TROEZENIAN FIFTY ALTERNATE FORM',
    '10168': 'GREEK ACROPHONIC HERMIONIAN FIFTY',
    '10169': 'GREEK ACROPHONIC THESPIAN FIFTY',
    '1016A': 'GREEK ACROPHONIC THESPIAN ONE HUNDRED',
    '1016B': 'GREEK ACROPHONIC THESPIAN THREE HUNDRED',
    '1016C': 'GREEK ACROPHONIC EPIDAUREAN FIVE HUNDRED',
    '1016D': 'GREEK ACROPHONIC TROEZENIAN FIVE HUNDRED',
    '1016E': 'GREEK ACROPHONIC THESPIAN FIVE HUNDRED',
    '1016F': 'GREEK ACROPHONIC CARYSTIAN FIVE HUNDRED',
    '10170': 'GREEK ACROPHONIC NAXIAN FIVE HUNDRED',
    '10171': 'GREEK ACROPHONIC THESPIAN ONE THOUSAND',
    '10172': 'GREEK ACROPHONIC THESPIAN FIVE THOUSAND',
    '10173': 'GREEK ACROPHONIC DELPHIC FIVE MNAS',
    '10174': 'GREEK ACROPHONIC STRATIAN FIFTY MNAS',
    '10175': 'GREEK ONE HALF SIGN',
    '10176': 'GREEK ONE HALF SIGN ALTERNATE FORM',
    '10177': 'GREEK TWO THIRDS SIGN',
    '10178': 'GREEK THREE QUARTERS SIGN',
    '10179': 'GREEK YEAR SIGN',
    '1017A': 'GREEK TALENT SIGN',
    '1017B': 'GREEK DRACHMA SIGN',
    '1017C': 'GREEK OBOL SIGN',
    '1017D': 'GREEK TWO OBOLS SIGN',
    '1017E': 'GREEK THREE OBOLS SIGN',
    '1017F': 'GREEK FOUR OBOLS SIGN',
    '10180': 'GREEK FIVE OBOLS SIGN',
    '10181': 'GREEK METRETES SIGN',
    '10182': 'GREEK KYATHOS BASE SIGN',
    '10183': 'GREEK LITRA SIGN',
    '10184': 'GREEK OUNKIA SIGN',
    '10185': 'GREEK XESTES SIGN',
    '10186': 'GREEK ARTABE SIGN',
    '10187': 'GREEK AROURA SIGN',
    '10188': 'GREEK GRAMMA SIGN',
    '10189': 'GREEK TRYBLION BASE SIGN',
    '1018A': 'GREEK ZERO SIGN',
    '1018B': 'GREEK ONE QUARTER SIGN',
    '1018C': 'GREEK SINUSOID SIGN',
    '1018D': 'GREEK INDICTION SIGN',
    '101A0': 'GREEK SYMBOL TAU RHO',
    '1D200': 'GREEK VOCAL NOTATION SYMBOL-1',
    '1D201': 'GREEK VOCAL NOTATION SYMBOL-2',
    '1D202': 'GREEK VOCAL NOTATION SYMBOL-3',
    '1D203': 'GREEK VOCAL NOTATION SYMBOL-4',
    '1D204': 'GREEK VOCAL NOTATION SYMBOL-5',
    '1D205': 'GREEK VOCAL NOTATION SYMBOL-6',
    '1D206': 'GREEK VOCAL NOTATION SYMBOL-7',
    '1D207': 'GREEK VOCAL NOTATION SYMBOL-8',
    '1D208': 'GREEK VOCAL NOTATION SYMBOL-9',
    '1D209': 'GREEK VOCAL NOTATION SYMBOL-10',
    '1D20A': 'GREEK VOCAL NOTATION SYMBOL-11',
    '1D20B': 'GREEK VOCAL NOTATION SYMBOL-12',
    '1D20C': 'GREEK VOCAL NOTATION SYMBOL-13',
    '1D20D': 'GREEK VOCAL NOTATION SYMBOL-14',
    '1D20E': 'GREEK VOCAL NOTATION SYMBOL-15',
    '1D20F': 'GREEK VOCAL NOTATION SYMBOL-16',
    '1D210': 'GREEK VOCAL NOTATION SYMBOL-17',
    '1D211': 'GREEK VOCAL NOTATION SYMBOL-18',
    '1D212': 'GREEK VOCAL NOTATION SYMBOL-19',
    '1D213': 'GREEK VOCAL NOTATION SYMBOL-20',
    '1D214': 'GREEK VOCAL NOTATION SYMBOL-21',
    '1D215': 'GREEK VOCAL NOTATION SYMBOL-22',
    '1D216': 'GREEK VOCAL NOTATION SYMBOL-23',
    '1D217': 'GREEK VOCAL NOTATION SYMBOL-24',
    '1D218': 'GREEK VOCAL NOTATION SYMBOL-50',
    '1D219': 'GREEK VOCAL NOTATION SYMBOL-51',
    '1D21A': 'GREEK VOCAL NOTATION SYMBOL-52',
    '1D21B': 'GREEK VOCAL NOTATION SYMBOL-53',
    '1D21C': 'GREEK VOCAL NOTATION SYMBOL-54',
    '1D21D': 'GREEK INSTRUMENTAL NOTATION SYMBOL-1',
    '1D21E': 'GREEK INSTRUMENTAL NOTATION SYMBOL-2',
    '1D21F': 'GREEK INSTRUMENTAL NOTATION SYMBOL-4',
    '1D220': 'GREEK INSTRUMENTAL NOTATION SYMBOL-5',
    '1D221': 'GREEK INSTRUMENTAL NOTATION SYMBOL-7',
    '1D222': 'GREEK INSTRUMENTAL NOTATION SYMBOL-8',
    '1D223': 'GREEK INSTRUMENTAL NOTATION SYMBOL-11',
    '1D224': 'GREEK INSTRUMENTAL NOTATION SYMBOL-12',
    '1D225': 'GREEK INSTRUMENTAL NOTATION SYMBOL-13',
    '1D226': 'GREEK INSTRUMENTAL NOTATION SYMBOL-14',
    '1D227': 'GREEK INSTRUMENTAL NOTATION SYMBOL-17',
    '1D228': 'GREEK INSTRUMENTAL NOTATION SYMBOL-18',
    '1D229': 'GREEK INSTRUMENTAL NOTATION SYMBOL-19',
    '1D22A': 'GREEK INSTRUMENTAL NOTATION SYMBOL-23',
    '1D22B': 'GREEK INSTRUMENTAL NOTATION SYMBOL-24',
    '1D22C': 'GREEK INSTRUMENTAL NOTATION SYMBOL-25',
    '1D22D': 'GREEK INSTRUMENTAL NOTATION SYMBOL-26',
    '1D22E': 'GREEK INSTRUMENTAL NOTATION SYMBOL-27',
    '1D22F': 'GREEK INSTRUMENTAL NOTATION SYMBOL-29',
    '1D230': 'GREEK INSTRUMENTAL NOTATION SYMBOL-30',
    '1D231': 'GREEK INSTRUMENTAL NOTATION SYMBOL-32',
    '1D232': 'GREEK INSTRUMENTAL NOTATION SYMBOL-36',
    '1D233': 'GREEK INSTRUMENTAL NOTATION SYMBOL-37',
    '1D234': 'GREEK INSTRUMENTAL NOTATION SYMBOL-38',
    '1D235': 'GREEK INSTRUMENTAL NOTATION SYMBOL-39',
    '1D236': 'GREEK INSTRUMENTAL NOTATION SYMBOL-40',
    '1D237': 'GREEK INSTRUMENTAL NOTATION SYMBOL-42',
    '1D238': 'GREEK INSTRUMENTAL NOTATION SYMBOL-43',
    '1D239': 'GREEK INSTRUMENTAL NOTATION SYMBOL-45',
    '1D23A': 'GREEK INSTRUMENTAL NOTATION SYMBOL-47',
    '1D23B': 'GREEK INSTRUMENTAL NOTATION SYMBOL-48',
    '1D23C': 'GREEK INSTRUMENTAL NOTATION SYMBOL-49',
    '1D23D': 'GREEK INSTRUMENTAL NOTATION SYMBOL-50',
    '1D23E': 'GREEK INSTRUMENTAL NOTATION SYMBOL-51',
    '1D23F': 'GREEK INSTRUMENTAL NOTATION SYMBOL-52',
    '1D240': 'GREEK INSTRUMENTAL NOTATION SYMBOL-53',
    '1D241': 'GREEK INSTRUMENTAL NOTATION SYMBOL-54',
    '1D242': 'COMBINING GREEK MUSICAL TRISEME',
    '1D243': 'COMBINING GREEK MUSICAL TETRASEME',
    '1D244': 'COMBINING GREEK MUSICAL PENTASEME',
    '1D245': 'GREEK MUSICAL LEIMMA',
    '1F7A1': 'THIN GREEK CROSS',
    '1F7A2': 'LIGHT GREEK CROSS',
    '1F7A3': 'MEDIUM GREEK CROSS',
    '1F7A4': 'BOLD GREEK CROSS',
    '1F7A5': 'VERY BOLD GREEK CROSS',
    '1F7A6': 'VERY HEAVY GREEK CROSS',
    '1F7A7': 'EXTREMELY HEAVY GREEK CROSS'
};
