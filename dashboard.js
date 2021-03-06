*,
*::before,
*::after {
	box-sizing: border-box;
}

.header {
    margin: 0;
    padding: 0;
    margin-bottom: 10%;
    background-color: #355070;
    box-shadow:  0px 6px 10px 5px grey;
}

body {
	margin: 0;
	 font-family: 'Helvetica', sans-serif;
	background: #FCF3EE;
}

.header h1 {
    margin: 0;
    padding-left: 2%;
    color: #E56B6F;
    font-size: 50px;
}

.forms-section {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.section-title {
	font-size: 32px;
	letter-spacing: 1px;
	color: #fff;
}

.forms {
	display: flex;
    flex-direction: row;
	align-items: flex-start;
    justify-content: center;
	margin-top: 30px;
}

p {
    font-size: 40px;
    display: block;

}

.center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.split {
    width: 50%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
}

.right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
}

.left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0;
}

.form-wrapper {
	animation: hideLayer .3s ease-out forwards;
}

.form-wrapper.is-active {
	animation: showLayer .3s ease-in forwards;
}

@keyframes showLayer {
	50% {
		z-index: 1;
	}
	100% {
		z-index: 1;
	}
}

@keyframes hideLayer {
	0% {
		z-index: 1;
	}
	49.999% {
		z-index: 1;
	}
}

.switcher {
	position: relative;
	cursor: pointer;
	display: block;
	margin-right: auto;
	margin-left: auto;
	padding: 0;
	text-transform: uppercase;
	font-family: inherit;
	font-size: 16px;
	letter-spacing: .5px;
	color: #999;
	background-color: transparent;
	border: none;
	outline: none;
	transform: translateX(0);
	transition: all .3s ease-out;
}

.form-wrapper.is-active .switcher-login {
	color: #355070;
	transform: translateX(90px);
}

.form-wrapper.is-active .switcher-signup {
	color: #355070;
	transform: translateX(-90px);
}

.underline {
	position: absolute;
	bottom: -5px;
	left: 0;
	overflow: hidden;
	pointer-events: none;
	width: 100%;
	height: 2px;
}

.underline::before {
	content: '';
	position: absolute;
	top: 0;
	left: inherit;
	display: block;
	width: inherit;
	height: inherit;
	background-color: currentColor;
	transition: transform .2s ease-out;
}

.switcher-login .underline::before {
	transform: translateX(101%);
}

.switcher-signup .underline::before {
	transform: translateX(-101%);
}

.form-wrapper.is-active .underline::before {
	transform: translateX(0);
}

.form {
	overflow: hidden;
	min-width: 400px;
	margin-top: 50px;
	padding: 10%;
    border-radius: 5px;
	transform-origin: top;
    border: 1px solid black;
}

.form-login {
	animation: hideLogin .3s ease-out forwards;
    
}

.form-wrapper.is-active .form-login {
	animation: showLogin .3s ease-in forwards;
}

@keyframes showLogin {
	0% {
		background: #6D597A;
		transform: translate(40%, 10px);
	}
	50% {
		transform: translate(0, 0);
	}
	100% {
		background-color: #6D597A;
		transform: translate(35%, -20px);
	}
}

@keyframes hideLogin {
	0% {
		background-color: #fff;
		transform: translate(35%, -20px);
	}
	50% {
		transform: translate(0, 0);
	}
	100% {
		background: #6D597A;
		transform: translate(40%, 10px);
	}
}

.form-signup {
	animation: hideSignup .3s ease-out forwards;
}

.form-wrapper.is-active .form-signup {
	animation: showSignup .3s ease-in forwards;
}

@keyframes showSignup {
	0% {
		background: #6D597A;
		transform: translate(-40%, 10px) scaleY(.8);
	}
	50% {
		transform: translate(0, 0) scaleY(.8);
	}
	100% {
		background-color: #6D597A;
		transform: translate(-35%, -20px) scaleY(1);
	}
}

@keyframes hideSignup {
	0% {
		background-color: #6D597A;
		transform: translate(-35%, -20px) scaleY(1);
	}
	50% {
		transform: translate(0, 0) scaleY(.8);
	}
	100% {
		background: #6D597A;
		transform: translate(-40%, 10px) scaleY(.8);
	}
}

.form fieldset {
	position: relative;
	opacity: 0;
	margin: 0;
	padding: 0;
	border: 0;
	transition: all .3s ease-out;
}

.form-login fieldset {
	transform: translateX(-50%);
}

.form-signup fieldset {
	transform: translateX(50%);
}

.form-wrapper.is-active fieldset {
	opacity: 1;
	transform: translateX(0);
	transition: opacity .4s ease-in, transform .35s ease-in;
}

.form legend {
	position: absolute;
	overflow: hidden;
	width: 1px;
	height: 1px;
	clip: rect(0 0 0 0);
}

.input-block {
	margin-bottom: 20px;
}

.input-block label {
	font-size: 14px;
  color: #FFFF;
}

.input-block input {
	display: block;
	width: 100%;
	margin-top: 8px;
	padding-right: 15px;
	padding-left: 15px;
	font-size: 16px;
	line-height: 40px;
	color: #3b4465;
  background: #eef9fe;
  border: 1px solid #cddbef;
  border-radius: 2px;
}

.form [type='submit'] {
	opacity: 0;
	display: block;
	min-width: 120px;
	margin: 30px auto 10px;
	font-size: 18px;
	line-height: 40px;
	border-radius: 25px;
	border: none;
	transition: all .3s ease-out;
}

.form-wrapper.is-active .form [type='submit'] {
	opacity: 1;
	transform: translateX(0);
	transition: all .4s ease-in;
}

.btn-login {
	color: #fbfdff;
	background: #E56B6F;
	transform: translateX(-30%);
}

.btn-signup {
	color: #E56B6F;
	background: #fbfdff;
	box-shadow: inset 0 0 0 2px #E56B6F;
	transform: translateX(30%);
}

#map {
    height: 500px;
    width: 100%;
}
