export const fixtures = {
  'fromWords': {
    'invalid': [
      {
        'exception': 'Excess padding',
        'words': [14, 20, 15, 7, 13, 26, 0, 25, 18, 6, 11, 13, 8, 21, 4, 20, 3, 17, 2, 29, 3, 0],
      },
      {
        'exception': 'Non-zero padding',
        'words': [3, 1, 17, 17, 8, 15, 0, 20, 24, 20, 11, 6, 16, 1, 5, 29, 3, 4, 16, 3, 6, 21, 22, 26, 2, 13, 22, 9, 16, 21, 19, 24, 25, 21, 6, 18, 15, 8, 13, 24, 24, 24, 25, 9, 12, 1, 4, 16, 6, 9, 17, 1],
      },
    ],
  },
  'bech32': {
    'valid': [
      {
        'string': 'A12UEL5L',
        'prefix': 'A',
        'hex': '',
        'words': [],
      },
      {
        'string': 'an83characterlonghumanreadablepartthatcontainsthenumber1andtheexcludedcharactersbio1tt5tgs',
        'prefix': 'an83characterlonghumanreadablepartthatcontainsthenumber1andtheexcludedcharactersbio',
        'hex': '',
        'words': [],
      },
      {
        'string': 'abcdef1qpzry9x8gf2tvdw0s3jn54khce6mua7lmqqqxw',
        'prefix': 'abcdef',
        'hex': '00443214c74254b635cf84653a56d7c675be77df',
        'words': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      },
      {
        'string': '11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqc8247j',
        'prefix': '1',
        'hex': '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        'words': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        'string': 'split1checkupstagehandshakeupstreamerranterredcaperred2y9e3w',
        'prefix': 'split',
        'hex': 'c5f38b70305f519bf66d85fb6cf03058f3dde463ecd7918f2dc743918f2d',
        'words': [24, 23, 25, 24, 22, 28, 1, 16, 11, 29, 8, 25, 23, 29, 19, 13, 16, 23, 29, 22, 25, 28, 1, 16, 11, 3, 25, 29, 27, 25, 3, 3, 29, 19, 11, 25, 3, 3, 25, 13, 24, 29, 1, 25, 3, 3, 25, 13],
      },
      {
        'string': '11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq978ear',
        'prefix': '1',
        'hex': '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        'words': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'limit': 300,
      },
    ],
    'invalid': [
      {
        'string': 'A12Uel5l',
        'exception': 'Mixed-case string A12Uel5l',
      },
      {
        'string': ' 1nwldj5',
        'exception': 'Invalid prefix',
      },
      {
        'string': 'abc1rzg',
        'exception': 'abc1rzg too short',
      },
      {
        'string': 'an84characterslonghumanreadablepartthatcontainsthenumber1andtheexcludedcharactersbio1569pvx',
        'exception': 'Exceeds length limit',
      },
      {
        'string': 'x1b4n0q5v',
        'exception': 'Unknown character b',
      },
      {
        'string': '1pzry9x0s0muk',
        'exception': 'Missing prefix',
      },
      {
        'string': 'pzry9x0s0muk',
        'exception': 'No separator character',
      },
      {
        'string': 'abc1rzgt4',
        'exception': 'Data too short',
      },
      {
        'string': 's1vcsyn',
        'exception': 's1vcsyn too short',
      },
      {
        'prefix': 'abc',
        'words': [128],
        'exception': 'Non 5-bit word',
      },
      {
        'prefix': 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzfoobarfoobar',
        'words': [128],
        'exception': 'Exceeds length limit',
      },
      {
        'prefix': 'foobar',
        'words': [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
        'exception': 'Exceeds length limit',
      },
      {
        'prefix': 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzfoobarfoobarfoobarfoobar',
        'words': [128],
        'limit': 104,
        'exception': 'Exceeds length limit',
      },
      {
        'string': '11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqc8247j',
        'exception': 'Exceeds length limit',
      },
      {
        'prefix': 'abc\u00ff',
        'words': [18],
        'exception': 'Invalid prefix',
      },
      {
        'string': 'li1dgmt3',
        'exception': 'Data too short',
      },
      {
        'stringHex': '6465316c67377774ff',
        'exception': 'Unknown character',
      },
    ],
  },
  'bech32m': {
    'valid': [
      {
        'string': 'A1LQFN3A',
        'prefix': 'A',
        'hex': '',
        'words': [],
      },
      {
        'string': 'a1lqfn3a',
        'prefix': 'a',
        'hex': '',
        'words': [],
      },
      {
        'string': 'an83characterlonghumanreadablepartthatcontainsthetheexcludedcharactersbioandnumber11sg7hg6',
        'prefix': 'an83characterlonghumanreadablepartthatcontainsthetheexcludedcharactersbioandnumber1',
        'hex': '',
        'words': [],
      },
      {
        'string': 'abcdef1l7aum6echk45nj3s0wdvt2fg8x9yrzpqzd3ryx',
        'prefix': 'abcdef',
        'hex': 'ffbbcdeb38bdab49ca307b9ac5a928398a418820',
        'words': [31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      },
      {
        'string': '11llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllludsr8',
        'prefix': '1',
        'words': [31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
      },
      {
        'string': 'split1checkupstagehandshakeupstreamerranterredcaperredlc445v',
        'prefix': 'split',
        'hex': 'c5f38b70305f519bf66d85fb6cf03058f3dde463ecd7918f2dc743918f2d',
        'words': [24, 23, 25, 24, 22, 28, 1, 16, 11, 29, 8, 25, 23, 29, 19, 13, 16, 23, 29, 22, 25, 28, 1, 16, 11, 3, 25, 29, 27, 25, 3, 3, 29, 19, 11, 25, 3, 3, 25, 13, 24, 29, 1, 25, 3, 3, 25, 13],
      },
      {
        'string': '?1v759aa',
        'prefix': '?',
        'hex': '',
        'words': [],
      },
      {
        'string': '11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqszh4cp',
        'prefix': '1',
        'hex': '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        'words': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'limit': 300,
      },
    ],
    'invalid': [
      {
        'string': 'A1LQfN3A',
        'exception': 'Mixed-case string A1LQfN3A',
      },
      {
        'string': ' 1xj0phk',
        'exception': 'Invalid prefix \\( \\)',
      },
      {
        'string': 'abc1rzg',
        'exception': 'abc1rzg too short',
      },
      {
        'string': 'an84characterslonghumanreadablepartthatcontainsthetheexcludedcharactersbioandnumber11d6pts4',
        'exception': 'Exceeds length limit',
      },
      {
        'string': 'qyrz8wqd2c9m',
        'exception': 'No separator character for qyrz8wqd2c9m',
      },
      {
        'string': '1qyrz8wqd2c9m',
        'exception': 'Missing prefix for 1qyrz8wqd2c9m',
      },
      {
        'string': 'y1b0jsk6g',
        'exception': 'Unknown character b',
      },
      {
        'string': 'lt1igcx5c0',
        'exception': 'Unknown character i',
      },
      {
        'string': 'in1muywd',
        'exception': 'Data too short',
      },
      {
        'string': 'mm1crxm3i',
        'exception': 'Unknown character i',
      },
      {
        'string': 'au1s5cgom',
        'exception': 'Unknown character o',
      },
      {
        'string': 'M1VUXWEZ',
        'exception': 'Invalid checksum for m1vuxwez',
      },
      {
        'string': '16plkw9',
        'exception': '16plkw9 too short',
      },
      {
        'string': '1p2gdwpf',
        'exception': 'Missing prefix for 1p2gdwpf',
      },
      {
        'prefix': 'abc',
        'words': [128],
        'exception': 'Non 5-bit word',
      },
      {
        'prefix': 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzfoobarfoobar',
        'words': [128],
        'exception': 'Exceeds length limit',
      },
      {
        'prefix': 'foobar',
        'words': [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
        'exception': 'Exceeds length limit',
      },
      {
        'prefix': 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzfoobarfoobarfoobarfoobar',
        'words': [128],
        'limit': 104,
        'exception': 'Exceeds length limit',
      },
      {
        'string': '11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqc8247j',
        'exception': 'Exceeds length limit',
      },
      {
        'prefix': 'abc\u00ff',
        'words': [18],
        'exception': 'Invalid prefix \\(abc\u00ff\\)',
      },
      {
        'string': 'in1muywd',
        'exception': 'Data too short',
      },
      {
        'stringHex': '6465316c67377774ff',
        'exception': 'Unknown character ',
      },
    ],
  },
}
