<template>
    <footer id="contact" class="footer-distributed">

        <div class="footer-left">

            <!-- <h3>Company<span>logo</span></h3> -->

            <!-- <p class="footer-links">
                <a href="#">Home</a>
                ·
                <a href="#">Blog</a>
                ·
                <a href="#">Pricing</a>
                ·
                <a href="#">About</a>
                ·
                <a href="#">Faq</a>
                ·
                <a href="#">Contact</a>
            </p> -->

            <p class="footer-company-name">Jaded Water Technologies © 2023</p>
<!-- 
            <div class="footer-icons">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

            </div> -->

        </div>

        <div class="footer-right">

            <p>Contact Us</p>
            <form action="#" method="post">
                <input type="text" name="email" placeholder="Email">
                <textarea name="message" placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);

* {
  font-family: Roboto;
  margin: 0;
}

.footer-distributed{
	background: #444;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	font: bold 16px sans-serif;
	text-align: left;
	padding: 50px 60px 40px;
	overflow: hidden;
}

section {
  width: 100%;
  display: inline-block;
  background: #ccc;
  height: 60vh;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-decoration: underline;
}


/* Footer left */

.footer-distributed .footer-left{
	float: left;
}

.footer-distributed .footer-company-name{
	color:  #8f9296;
	font-size: 14px;
	font-weight: normal;
	float:inline-end;
}
/* Footer Right */

.footer-distributed .footer-right{
	float: right;
}

.footer-distributed .footer-right p{
	display: inline-block;
	vertical-align: top;
	margin: 15px 50px 0 0;
	color: #ffffffbb;
}

/* The contact form */

.footer-distributed form{
	display: inline-block;
}

.footer-distributed form input,
.footer-distributed form textarea{
	display: block;
	border-radius: 1px;
	box-sizing: border-box;
	background-color:  #1f2022;
	box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
	border: none;
	resize: none;

	font: inherit;
	font-size: 10px;
	font-weight: normal;
	color:  #d1d2d2;

	width: 600px;
	padding: 20px;
}

.footer-distributed ::-webkit-input-placeholder {
	color:  #5c666b;
}

.footer-distributed ::-moz-placeholder {
	color:  #5c666b;
	opacity: 1;
}

.footer-distributed :-ms-input-placeholder{
	color:  #5c666b;
}


.footer-distributed form input{
	height: 30px;
	margin-bottom: 15px;
}

.footer-distributed form textarea{
	height: 150px;
	margin-bottom: 20px;
}

.footer-distributed form button{
	border-radius: 1px;
	background-color:  #33383b;
	color: #ffffffbb;
	border: 0;
	padding: 15px 30px;
	float: right;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 1000px) {

	.footer-distributed {
		font: bold 14px sans-serif;
	}

	.footer-distributed .footer-company-name{
		font-size: 12px;
	}

	.footer-distributed form input,
	.footer-distributed form textarea{
		width: 350px;
	}

	.footer-distributed form button{
		padding: 10px 35px;
	}

}

@media (max-width: 800px) {

	.footer-distributed{
		padding: 30px;
	}

	.footer-distributed .footer-left,
	.footer-distributed .footer-right{
		float: none;
		max-width: 300px;
		margin: 0 auto;
	}

	.footer-distributed .footer-left{
		margin-bottom: 40px;
	}

	.footer-distributed form{
		margin-top: 30px;
	}

	.footer-distributed form{
		display: block;
	}

	.footer-distributed form button{
		float: none;
	}
}

</style>