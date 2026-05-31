function changecolor(){
    const colors = ["#f4f4f4","#ffc4c1","#e6f7ff","#eaffea"];
    let randomcolor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=randomcolor;
}
function showmessage(){
    document.getElementById("message").innerHTML="<h2>Welcome to my Personal Webpage</h2>";
}
function updatedatetime(){
    let now = new Date();
    document.getElementById("datetime").innerHTML=now.toLocaleString();
}
updatedatetime();
function showtext(){
    document.getElementById("text").innerHTML="Through determination, hard work, and a commitment to lifelong learning, I aim to build a successful career while continuously expanding my horizons. I view challenges as opportunities for growth and believe that persistence and dedication are the foundation of success. As a student, I am committed to making the most of every learning experience and preparing myself for the opportunities and responsibilities that lie ahead."
}
function hidetext(){
    document.getElementById("text").style.display='none';
}
function show(){
    document.getElementById("text").innerHTML="These experiences have reinforced my passion for learning and innovation. I continuously seek opportunities to work on meaningful projects that challenge my abilities and help me acquire new skills. Through dedication, creativity, and continuous improvement, I aim to develop projects that create value, solve real-world problems, and contribute positively to society while strengthening my expertise in my chosen field."
}
function hide(){
    document.getElementById("text").style.display='none';
}
function showme(){
    document.getElementById("text").innerHTML="My academic goal is to achieve excellence while building a strong foundation for my future career. I am committed to improving my skills, overcoming challenges, and making the most of every learning opportunity. Through consistent effort, determination, and a positive mindset, I aim to develop the knowledge and expertise required to succeed in both higher education and the professional world."
}
function hideme(){
    document.getElementById("text").style.display='none';
}