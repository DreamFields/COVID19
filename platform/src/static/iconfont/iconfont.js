import {createGlobalStyle} from 'styled-components'; //用于生成处理全局样式

/*
对于全局样式，类名前可以不加&.className

对于iconfont图表如果要使用类名展现图表的话需要对content进行转义
    .iconAa:before {
      content: "\\e666";
    }
*/
export const Icon=createGlobalStyle`  
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1586332231671'); /* IE9 */
  src: url('./iconfont.eot?t=1586332231671#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWMAAsAAAAACzQAAAU/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqIcIcYATYCJAMcCxAABCAFhG0HcxuDCcgekiSxLvWD40glpZQARQ6ep3X8nzsz6yeovS85gUoQIlitZOYdyk0Ps6qmKpSpUWYCTBS5hBTasDRUNGwOnQP1l6g9J6av2uM1Hnhu+etmiBMrCqNefNJoYLfIBAZ+HWD7n2Opd80Hlv8qQe6danUumw5XBTSgqNCJjDdNnk2QN4xdmMDtEODLkoxRZO5XAj5D0QpsanBMA/ghG5NDEK7RTjk1RlZY3HCNegxsst9fntQFfFCsCOVOPWq5Hmy7cBbvaDqkGRItZnF7HoA6CzSoADCQIdW3GO1qKmydn/Y7jT4AUVyKfbH+pv0d/Lfi36/FJ2FIeKAyXUSp/+CBIRTNYkNSoC4CYwfkbXzg6BwYfAjiQPDhNAcKHyo40Pi4zIGFH0/0rCra2TsK5ANSASBHgG34cV8UxSZULnFxDFG0aHFdD0cTEphiVaAoImCwiCC4rM/o5XrJJL15yr61Y8Dan9j+0Fe1rrWOZlj3+nfYE5z1YPEuH8ZxoSq5xbp78raPynFIKPSfctjXCTZv82GgSkm/YrtYtwhti5Vbd/rZHMDusNXlsjlop5rEWPHr0Dv3rVZvPWltt7XSbcfXAalHJVSMZ63dtk66i/+addo2SU9VYMfXJWGVRSp99I61fqiraJtvoWeEWR/1fCzwWNqtHf6ezja6tUDukv/kTd/Xr/sI+WeJRM+e9X/7tp+4r3Nxq81P7Vrif7zycFu1j7LYY1BWkefIrRe29FyxuM3uj7HNTIc/BzrTXrPfFb8zy8nLZ+P+FNPJSDTbb4nfnrKTzILm7EizKmfHN7ty3dAq/+G6CuX6O1sCfR1Pefdhqn9Klly2N5ml1oG4DurdW5/f6T4GPgoQH7GAjd/v3++//k7Nb8qwVZzieEMoM6DNLrY3b+vhfNEE8WzxrJtirolREe2VeS2FdxKfJOhHd6HEvwL/Byylfo+5MxsX6hUMmFNue8gj5OHM2EWPgpiCKOZ7zdJrEmvimRsYh6eqppKfUr198nfp9+pl6Yol727cGm+Z9xqv7dX75I3yNWBzMCdwtF9+rnBbcnpQi+Xu46E0em1NR/xvbOx9GExvS4/wu4HkRY5MkgaB0pOJMu71mbLv5rs5f6k0JNwRyMrLqvss87JqPtNtbPo5VhWh8vw8irl0KRMcNurSMq1E7trZEY6Gj396Zak74MkXn4+TnNziAo3neUWS2HRPCblJ//y2oKri+dWpkSgqb9sTlbhbb9t2VWmRgdVgIeVGeq0GAHTPUgD6r4a4u2zULwh/aCOrBBBe0V90yQu/G59U52LOuzf5zw8+gmUvBxoUtie8YlqyAfDW6iktf73lJScYUanYnZgfXpeVpDjmc8so4Ktt8FKH4nxtz5BYWscfZEj0QXFkguYqQBpsBVgCDWBzNQdfOcXZgXgkFok9oMxVACJGDyhRroEW4wnSYL+AJckC2GICFvj6BfGXDBQFuLA1CTUU1CPaQgTXETmo5qSETvNRiFlMGjKotIlqSObiSUSamh4tKmAOJNs4IjcPy6AoFEFJIhvJBHeDJhOBmEkiC+qoVANFmTekpaFpL5SqI7KBUGskSIMC6SG0CiFwOoQcqDk7RRh7+6MgjIWJBpkzpCCuBpFy4RtHSKVKL4FU6HJKDTmWzrnyYDJQKINCoFQjIRsiE3kgk5ojIMzpO2WBdCipDDUyZhukoanQsrrU/g3Zx3kd4FP+ohMo0WLEElsccdEtYZZMwjVFGhyDOZjeQriFukq5RQaox6HHLnVIQTU5BgtepG9XCLlj8BxMawEAAA==') format('woff2'),
  url('./iconfont.woff?t=1586332231671') format('woff'),
  url('./iconfont.ttf?t=1586332231671') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1586332231671#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-top:before {
  content: "\\e61a";
}

.icon-jiazaigengduo:before {
  content: "\\e65b";
}

.icon-jiazaigengduo1:before {
  content: "\\e68c";
}

.icon-zhedie:before {
  content: "\\e605";
}

.icon-icon-fanhuizhuye:before {
  content: "\\e7f0";
}

.icon-dingbu:before {
  content: "\\eecd";
}


`;
