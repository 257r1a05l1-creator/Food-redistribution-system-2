function addDonation(e){
  e.preventDefault();
  const name=document.getElementById("foodName").value;
  const qty=document.getElementById("qty").value;
  const donor=document.getElementById("donor").value;
  const type=document.getElementById("type").value;
  const date=document.getElementById("date").value;
  const row=document.createElement("tr");
  const cls=type==="Meals"?"yellow":type==="Bakery"?"purple":"blue";
  row.innerHTML=`<td><b>${name}</b></td><td>${donor}</td><td>${qty}</td><td>${date||"Today"}</td><td><span class="pill ${cls}">${type}</span></td><td><span class="pill green">Available</span></td>`;
  document.getElementById("donationRows").prepend(row);
  document.getElementById("message").textContent="✓ Donation published successfully.";
  e.target.reset();
}
function showAll(){document.getElementById("donations").scrollIntoView({behavior:"smooth"});}
document.querySelectorAll(".side-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelectorAll(".side-nav a").forEach(x=>x.classList.remove("active"))));
