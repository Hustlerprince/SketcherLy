const title=document.getElementById("title"),questionName=document.getElementById("questionName"),questionIcon=document.getElementById("questionIcon"),questionUsername=document.getElementById("questionUsername"),answerParent=document.getElementById("answerParent");function addAnswer(e,t){const n=document.createElement("div"),o=document.createElement("p");fetch(`https://fairfield-programming.herokuapp.com/user/${e.user}`).then((e=>e.json())).then((e=>{const t=document.createElement("div"),o=document.createElement("img"),s=document.createElement("div"),a=document.createElement("div");t.className="d-flex text-muted pt-3",s.className="mb-0 small lh-sm w-100",a.className="d-flex justify-content-between",t.append(o),t.append(s),s.append(a),o.src=e.profilePicture,n.append(t)})),n.className="bg-body border my-3 p-3 rounded",o.innerHTML=e.body,n.append(o),t.append(n)}fetch("https://fpa-questions.herokuapp.com/question/1").then((e=>(200!=e.status&&(window.location.href="/"),e))).then((e=>e.json())).then((e=>{title.innerHTML=e.body,e.answers.forEach((e=>{addAnswer(e,answerParent)})),console.log(e)})),addAnswer({body:"This is a test"},answerParent);
//# sourceMappingURL=index.a48559bc.js.map