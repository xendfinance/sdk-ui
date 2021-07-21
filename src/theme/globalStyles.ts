import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
	font-size:18px;
	font-family: 'Fira Sans', sans-serif;
  	height: 100%;
}
body {
	line-height: 1;
	height: 100%;
	min-height: 100%;
	margin: 0;
}
body * {
	font-family: 'Fira Sans', sans-serif;
}
#root {
	height: 100%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.react-datepicker-wrapper {
	width: 100%;
}
.uppercase {
	text-transform: uppercase;
}

.h1 {
	font-size:14.91px !important;
}
.h2 {
	font-size:11.93px !important;
}
.h3 {
	font-size:11.72px !important;
}
.h4 {
	font-size:10.34px !important;
}
.h5 {
	font-size:9.99px !important;
}
.h6 {
	font-size:9.63px !important;
}
.h7 {
	font-size:8px !important;
}
.h8 {
	font-size:7.72px !important;
}
.h9 {
	font-size:7.6px !important;
}
.h10 {
	font-size:7.49px !important;
}
.h11 {
	font-size:7.05px !important;
}
.h12 {
	font-size:5.69px !important;
}
.h13 {
	font-size:18px !important;
}
.h14 {
	font-size:16.53px !important;
}
.h15 {
	font-size:13px !important;
}
.h16 {
	font-size:12.4px !important;
}
.h17 {
	font-size:8.7px !important;
}
.h18 {
	font-size:9.33px !important;
}
.h19 {
	font-size:9.57px !important;
}
.h20 {
	font-size:7.44px !important;
}
.h21 {
	font-size:18px !important;
}
.h22 {
	font-size:16.53px !important;
}
.h23 {
	font-size:13px !important;
}
.h24 {
	font-size:12.4px !important;
}
.h25 {
	font-size:36px !important;
}
.h26 {
	font-size:18px !important;
}
.h27 {
	font-size:16px !important;
}

.float-right {
	float: right !important;
}
  
.text-center {
	text-align: center !important;
}
  
.text-right {
	text-align: right !important;
}
  
.text-left {
	text-align: left !important;
}
  
#root {
	height: 100%;
}
  
  .main-layout {
	display: flex;
	height : 100%;
  
	.sidebar {
	  position    : relative;
	  width       : 250px;
	  border-right: 2px solid #f1f1f1;
	}
  
	@media screen and (max-width: 738px) {
	  .sidebar {
		display: none;
	  }
	}
  
	@media screen and (min-width: 738px) {
	  .app-btn {
		display: none;
	  }
  
	  #menu-list-grow {
		display: none;
	  }
	}
  
	.topbar-content {
	  flex          : 1;
	  display       : flex;
	  flex-direction: column;
	}
  }
  
  .green-ball {
	border-radius: 100%;
	width        : 13px;
	height       : 13px;
	background   : #63E34E;
	display      : inline-block;
  }
  
  .sunset-outlined {
	background   : linear-gradient(to right, #2042B8, #FF6600);
	border-radius: 25px;
	padding      : 0px;
  }
  
  .sunset-outlined .MuiButton-root {
	height          : 100%;
	width           : 100%;
	border-radius   : 25px !important;
	background-clip : padding-box;
	background-color: white !important;
	box-shadow      : unset !important;
  
	.MuiButton-label {
	  color      : #484848;
	  font-weight: 500;
	}
  
	.connect-id {
	  max-width    : 116px;
	  overflow     : hidden;
	  text-overflow: ellipsis;
	}
  
	.connect-status {
	  display    : flex;
	  align-items: center;
  
	  .green-ball {
		width : 9px;
		height: 9px;
	  }
	}
  }
  
  .crowded {
	padding: 6px 11px !important;
  }
  
  .sunset-contained {
	border       : unset;
	padding      : 1px;
	background   : transparent;
	border-radius: 25px;
  }
  
  .sunset-contained .MuiButton-root {
	width              : 100%;
	border-radius      : 25px !important;
	background         : linear-gradient(to right, #2042B8, #FF6600 130%);
  
	.MuiButton-label {
	  color: white;
	}
  }
  
  .user-actions {
	flex           : 1;
	display        : flex;
	justify-content: flex-end;
	align-items    : center;
  
	.status-txt {
		font-weight: 500;
		color      : black;
	}
  }
  
  .paper {
	background   : white;
	padding      : 30px;
	border-radius: 7px;
	box-shadow   : 1px 8px 10px 3px #f0f0f0;
  }
  
  .primary-outlined {
	border-width : 1px;
	border-radius: 25px !important;
	border-color : #2143B9 !important;
	background-color: white !important;
  
	.MuiButton-label {
	  color: #565656;
	}
  }
  
  .orange-outlined {
	border-width : 1px;
	border-radius: 25px !important;
	border-color : #FF6600 !important;
  
	.MuiButton-label {
	  color: #565656;
	}
  }
  
  .slots-container {
	display        : flex;
	flex           : 0 1;
	justify-content: center;
  }
  
  .slots-count {
	background: linear-gradient(to right, #2042B8, #FF6600);
  
	padding         : 3px;
	border-radius   : 100% !important;
	background-clip : padding-box;
	background-color: white !important;
	box-shadow      : unset !important;
	display         : flex;
	justify-content : center;
	align-items     : center;
  
	.MuiBox-root {
	  flex         : 1;
	  width        : 30px;
	  height       : 30px;
	  background   : white;
	  border-radius: 100%;
  
	  span {
		vertical-align: -webkit-baseline-middle;
	  }
	}
	.right-action {
      @media screen and (max-width: 930px) {
        .arrow {
          display: none;
        }
      }
    }
  }
`;


export default GlobalStyles;