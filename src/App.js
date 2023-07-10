import logo from './logo.svg';
import background from "./user-3.jpg";
import coverBG from "./cover_bg_3.jpg";
import './App.css';

function App() {
	const myBg={
		backgroundImage:`url(${coverBG})`,
		width: '100%',
        height: '601px',
		backgroundPosition: '0px 0px',
		backgroundColor: 'transparent',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		position: 'relative',
  }
  const bg ={
	  backgroundImage:`url(${background})`,
  }
  return (
    <div className="page">
      <header id="fh5co-header" className="banner" style={myBg}>
		<div className="overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
					<div className="display-t js-fullheight">
						<div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
							<div className="profile-thumb" style={bg}></div>
							<h1><span>SATHEESHKUMAR M</span></h1>
							<h3><span>UI Developer</span></h3>
							<p>
								<ul className="fh5co-social-icons">
									<li><a href="#"><i className="icon-twitter2"></i></a></li>
									<li><a href="#"><i className="icon-facebook2"></i></a></li>
									<li><a href="#"><i className="icon-linkedin2"></i></a></li>
									<li><a href="#"><i className="icon-dribbble2"></i></a></li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	  </header>
	  <div id="fh5co-about" className="animate-box">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>About Me</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<ul className="info">
						<li><span className="first-block">Full Name:</span><span className="second-block">Satheeshkumar M</span></li>
						<li><span className="first-block">Phone:</span><span className="second-block">+ 91 842X39X75X</span></li>
						<li><span className="first-block">Email:</span><span className="second-block">share2satheesh@gmail	.com</span></li>
						<li><span className="first-block">Website:</span><span className="second-block">https://satheeshmsakkaa.github.io/portfolio</span></li>
						<li><span className="first-block">Address:</span><span className="second-block">xxx, Kelambakkam, Chengalpattu (Dist), 603103</span></li>
					</ul>
				</div>
				<div className="col-md-8">
					<h2>Hello There!</h2>
					<p>As a UI Developer, I specialize in creating engaging and user-friendly interfaces for websites, applications, and other digital platforms. I have a deep understanding of front-end technologies such as HTML, CSS, and JavaScript, and I'm proficient in using various frameworks and libraries like React, Angular.</p>
					<p>I have a keen eye for design and a passion for crafting visually appealing and intuitive user experiences. I work closely with designers and stakeholders to translate their concepts and wireframes into functional and responsive interfaces. I pay attention to details, ensuring that every element is pixel-perfect and optimized for different devices and screen sizes.</p>
					<p>In addition to my technical skills, I possess strong problem-solving abilities and enjoy finding innovative solutions to complex challenges. I stay up to date with the latest industry trends and best practices in UI development to deliver cutting-edge designs and seamless interactions.</p>
					<p>Overall, my goal as a UI Developer is to create visually stunning and user-centric interfaces that enhance the overall user experience and help businesses achieve their goals. I'm passionate about creating elegant and functional designs that leave a lasting impression on users.</p>
				</div>
			</div>
		</div>
	</div>

	<div id="fh5co-resume" className="fh5co-bg-color">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>My Resume</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 col-md-offset-0">
					<ul className="timeline">
						<li className="timeline-heading text-center animate-box">
							<div><h3>Work Experience</h3></div>
						</li>
						<li className="animate-box timeline-unverted">
							<div className="timeline-badge"><i className="icon-suitcase"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Senior UI Developer</h3>
									<span className="company">Capgemini India Pvt.Ltd - 2019 - Current</span>
								</div>
								<div className="timeline-body">
									<p>Overall, as a Senior UI Developer, you will play a crucial role in designing and implementing intuitive user interfaces, ensuring a seamless user experience, and contributing to the success of the development team and the organization.</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge"><i className="icon-suitcase"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Technical Lead</h3>
									<span className="company">Exela Technologies - 2014 - 2019</span>
								</div>
								<div className="timeline-body">
									<p>As a Technical Lead, you will play a crucial role in leading the technical aspects of a project, ensuring the successful delivery of high-quality software, and fostering a collaborative and productive environment for the development team.</p>
								</div>
							</div>
						</li>
						<br />
						<li className="timeline-heading text-center animate-box">
							<div><h3>Education</h3></div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Masters Degree (MCA)</h3>
									<span className="company">MKU, Madurai - 2009 - 2011</span>
								</div>
								<div className="timeline-body">
									<p>Master of Computer Applications (MCA) is a postgraduate degree program in the field of computer science.</p>
								</div>
							</div>
						</li>
						<li className="animate-box timeline-unverted">
							<div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Bachelors Degree (BCA)</h3>
									<span className="company">MKU, Madurai - 2007 - 2009</span>
								</div>
								<div className="timeline-body">
									<p>Bachelors of Computer Applications (MCA) is a graduate degree program in the field of computer science</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Diploma Course (Dip.Comp.Engg)</h3>
									<span className="company">Valivalam Desikar PolyThechnic - 2004 - 2006</span>
								</div>
								<div className="timeline-body">
									<p>A Diploma in Computer Science is a short-term vocational program that focuses on providing fundamental knowledge and skills in the field of computer science.</p>
								</div>
							</div>
						</li>
						<li className="animate-box timeline-unverted">
							<div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">HSC</h3>
									<span className="company">Govt.Hr.Sec.School - 2002 - 2004</span>
								</div>
								<div className="timeline-body">
									<p>Higher Secondary School refers to the educational level that follows secondary or high school education and typically prepares students for higher education or specialized vocational training.</p>
								</div>
							</div>
						</li>
			    	</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="fh5co-skills" className="animate-box">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Skills</h2>
				</div>
			</div>
			<div className="row row-pb-md">
				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<div className="chart" data-percent="95"><span><strong>HTML5</strong>95%</span></div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<div className="chart" data-percent="93"><span><strong>CSS3</strong>93%</span></div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<div className="chart" data-percent="90"><span><strong>jQuery</strong>90%</span></div>
				</div>

				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<div className="chart" data-percent="89"><span><strong>PHP</strong>89%</span></div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<div className="chart" data-percent="85"><span><strong>MySQL</strong>85%</span></div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<div className="chart" data-percent="90"><span><strong>Angular 4 and above</strong>90%</span></div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<div className="chart" data-percent="85"><span><strong>ReactJS</strong>85%</span></div>
				</div>
			</div>
		</div>
		<div id="fh5co-started" class="fh5co-bg-dark">
		<div class="overlay"></div>
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Hire Me!</h2>
					<p>I am eager to contribute my skills and make a positive impact on your organization. I am confident that my expertise and passion align perfectly with the goals and values of your company.</p>
					<p><a href="#" class="btn btn-default btn-lg">Contact</a></p>
				</div>
			</div>
		</div>
	</div>
	</div>
    </div>
  );
}

export default App;
